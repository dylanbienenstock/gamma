import * as mongoose from "mongoose";
import * as bcrypt from "bcrypt-as-promised";

import { GammaConfig } from "../gamma.types";
import { RegisterCreds, RegisterResponse, LogInCreds, LogInResponse, SearchResponse, SearchQuery, AuthCreds, AuthResult, FriendInviteRequest } from "./account.types";
import { User } from "./account.schemas";

const ObjectId = mongoose.Types.ObjectId;

export module AccountManager {
	export function initialize(config: GammaConfig) {
		mongoose.connect(config.database);
	}

	function getValidationErrors(reject: any) {
		return Object.keys(reject.errors)
		.map((error) => {
			return { 
				field: error,
				text: reject.errors[error].message
			};
		});
	}

	function generateAuthToken() {
		let authToken: string = "";

		for (let i = 0; i < 16; i++) {
			let byte: number = Math.floor(Math.random() * 255);

			authToken += String.fromCharCode(byte);
		}

		return authToken;
	}

	export async function createAccount(creds: RegisterCreds): Promise<RegisterResponse> {
		let response: RegisterResponse = {
			success: true,
			errors: []
		};

		if (creds.password.length < 8) {
			response.success = false;
			response.errors = [{
				field: "password",
				text: "Password must be at least 8 characters"
			}];
		}

		// Hash the password
		await bcrypt.hash(creds.password).then((hash) => {
			creds.password = hash;
		}, console.error);

		creds.name = creds.name.toLowerCase();
		creds.email = creds.email.toLowerCase();

		// Ensure that the name is unique
		await User.findOne({ name: creds.name }, (error, user) => {
			if (user) {
				response.success = false;
				response.errors.push({
					field: "name",
					text: "Username is already in use"
				});
			}
		});

		// Ensure that the email address is unique
		await User.findOne({ email: creds.email }, (error, user) => {
			if (user) {
				response.success = false;
				response.errors.push({
					field: "email",
					text: "Email Address is already in use"
				});
			}
		});

		if (response.success) {
			// Validate and create the user
			let authToken = generateAuthToken();

			let newUser = new User({
				name: creds.name,
				email: creds.email,
				password: creds.password,
				authToken: authToken
			});

			await newUser.save()
			.then((user) => {
				response.user = {
					id: user.id,					
					name: user.name,
					authToken: user.authToken
				};
			})
			.catch((reject) => {
				response.success = false;
				response.errors = response.errors.concat(getValidationErrors(reject))
			});
		}

		return response;		
	}

	export async function logIn(creds: LogInCreds): Promise<LogInResponse> {
		let response: LogInResponse = { success: false };

		let error: any;
		let user: any;

		creds.name = creds.name.toLowerCase();		

		await User.findOne({ name: creds.name }, (_error, _user) => {
			error = _error;
			user = _user;
		});

		if (error || !user || creds.password.length == 0) return response;

		await bcrypt.compare(creds.password, user.password)
		.then(() => {
			// Generate a new auth token on every login
			user.authToken = generateAuthToken();

			response = {
				success: true,
				user: {
					id: user.id,
					name: user.name,
					authToken: user.authToken
				}
			}

			user.save();
		})
		.catch(() => { /* Do nothing */ });

		return response;
	}

	export function logOut(name: string, authToken?: string): void {
		User.where({ name: name }).findOne((error, user) => {
			if (!user) return;

			let shouldLogOut = true;

			if (authToken) { 
				// Don't log them out if they provide the incorrect auth token
				// Keeps people from logging other people out
				shouldLogOut = (authToken == user.authToken);
			}

			if (shouldLogOut) {
				user.authToken = null;
				user.save();
			}
		});
	}

	export async function authenticate(auth: AuthCreds, extraFields?: string, populate?: string): Promise<AuthResult> {
		let error: any;
		let user: any;

		let defaultFields = "id name authToken";
		let fields = extraFields ? `${defaultFields} ${extraFields}` : defaultFields;

		console.log(fields);

		await User.findOne({ _id: ObjectId(auth.id) }, fields)
		.populate(populate || "")
		.catch((_error) => { error = _error; })
		.then((_user) => { user = _user });

		if (!error && user && auth.authToken == user.authToken) {
			return {
				valid: true,
				user: user
			}
		}

		return { valid: false };
	}

	export async function search(query: SearchQuery): Promise<SearchResponse> {
		let response: SearchResponse = {};
		let authResult: AuthResult;
		
		await this.authenticate(query.authCreds, null, "friends friends.user")
		.then((_authResult: AuthResult) => {
			authResult = _authResult;
		});

		if (!authResult.valid) return response;

		let error: any;
		let users: any;

		await User.find(
			{ name: {
				$regex: `.*${query.text}.*`,
				$options: "i"
			}},
			"id name",
			{
				$skip: query.offset || 0,
				$limit: query.limit || 16
			}
		).catch((_error) => {
			error = _error;
		})
		.then((_users) => {
			users = _users;
		});

		if (!error && users) {
			let friendIds = [];
			let friendConfirmations = {};

			for (let friend of authResult.user.friends) {
				friendIds.push(friend.user.id);
				friendConfirmations[friend.user.id] = friend.confirmed;
			}

			response.results = users.map((user) => {
				let isSelf = user.id == authResult.user.id;
				let isFriend = !isSelf && friendIds.includes(user.id);
				let isConfirmed = friendConfirmations[user.id];

				return {
					id: user.id,
					name: user.name,
					isSelf: isSelf,
					isFriend: isFriend,
					isConfirmed: isConfirmed
				};
			});
		} else {
			console.log(error);
		}

		return response;
	}

	export async function addFriend(invite: FriendInviteRequest): Promise<null> {
		let authResult: AuthResult;

		await this.authenticate(invite.authCreds, null, "friends friends.user")
		.then((_authResult: AuthResult) => {
			authResult = _authResult;
		});

		if (!authResult.valid) return;

		let recipientError: any;
		let recipient: any;

		await User.findOne({ _id: ObjectId(invite.id) })
			.catch((error) => { recipientError = error; })
			.then((user) => { recipient = user; })

		if (recipientError || !recipient) return;

		let senderFriendIds = authResult.user.friends.map(friend => friend.user.id);
		let recipientFriendInviteIds = recipient.friends.map(friendInvite => friendInvite.user.id);

		if (senderFriendIds.includes(recipient.id)) return;
		if (recipientFriendInviteIds.includes(authResult.user.id)) return;

		let friend = { user: ObjectId(recipient.id) };
		authResult.user.friends.push(friend);
		authResult.user.save();

		let friendInvite = { user: ObjectId(authResult.user.id) };
		recipient.friendInvites.push(friendInvite);
		recipient.save();
	}

	export async function removeFriend(invite: FriendInviteRequest): Promise<null> {
		let authResult: AuthResult;

		await this.authenticate(invite.authCreds, null, "friends friends.user")
		.then((_authResult: AuthResult) => {
			authResult = _authResult;
		});

		if (!authResult.valid) return;

		for (let friend of authResult.user.friends) {
			if (friend.user.id == invite.id) {
				authResult.user.friends.id(ObjectId(friend.id)).remove();
				authResult.user.save();

				break;
			}
		}
	}
}