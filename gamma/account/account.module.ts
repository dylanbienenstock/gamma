import * as mongoose from "mongoose";
import * as bcrypt from "bcrypt-as-promised";

import { GammaConfig } from "../gamma.types";
import { RegisterCreds, RegisterResponse, LogInCreds, LogInResponse, ContactList, SearchQuery, AuthCreds, AuthResult, FriendInviteRequest, Contact } from "./account.types";
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

	export function logOut(id: string, authToken?: string): void {
		User.findOne({ _id: ObjectId(id) })
		.catch(console.error)
		.then((user) => {
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

	export async function getContactList(authCreds: AuthCreds) {
		let response: ContactList = {};
		let authResult: AuthResult;

		let populate = "friends friends.user friendInvites friendInvites.user";

		await authenticate(authCreds, null, populate)
		.then((_authResult: AuthResult) => {
			authResult = _authResult;
		});

		if (!authResult.valid) return response;

		let users: any[] = authResult.user.friends.map(friend => friend.user);
		users = users.concat(authResult.user.friendInvites.map(friend => friend.user));

		return generateContactList(authResult.user, users);
	}
	
	// Owner must populate:
	// "friends friends.user friendInvites friendInvites.user"
	// Users must populate:
	// "friends friends.user"
	function generateContactList(owner: any, users: any[]): ContactList {
		let friendIds = [];
		let friendConfirmations = [];
		let friendInviteIds = [];

		for (let friend of owner.friends) {
			friendIds.push(friend.user.id.toString());

			if (friend.confirmed) {
				friendConfirmations.push(friend.user.id.toString());
			}
		}

		friendInviteIds = owner.friendInvites
			.map(friendInvite => friendInvite.user.id);

		return {
			contacts: users.map((contacts) => {
				let isSelf = contacts.id == owner.id;
				let isFriend = !isSelf && friendIds.includes(contacts.id);
				let isConfirmed = !isSelf && friendConfirmations.includes(contacts.id);
				let isRequesting = !isSelf && friendInviteIds.includes(contacts.id);

				return {
					id: contacts.id,
					name: contacts.name,
					isSelf: isSelf,
					isFriend: isFriend,
					isConfirmed: isConfirmed,
					isRequesting: isRequesting
				};
			})
		}
	}

	export async function search(query: SearchQuery): Promise<ContactList> {
		let response: ContactList = {};
		let authResult: AuthResult;

		let populate = "friends friends.user friendInvites friendInvites.user";
		
		await authenticate(query.authCreds, null, populate)
		.then((_authResult: AuthResult) => {
			authResult = _authResult;
		});

		if (!authResult.valid) return response;

		let error: any;
		let users: any[];

		// https://codereview.stackexchange.com/questions/153691/escape-user-input-for-use-in-js-regex
		query.text = (function sanitize(text) {
			var toSanitize = RegExp("[" + "{}[]-/\\()*+?.%$|"
				.replace(RegExp(".", "g"), "\\$&") + "]", "g");

			return text.replace(toSanitize, "\\$&");
		})(query.text);

		// Find users that match query
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
		).populate("friends friends.user")
		.catch((_error) => {
			error = _error;
		})
		.then((_users) => {
			users = _users;
		});

		if (!error && users) {
			response = generateContactList(authResult.user, users);
		} else {
			console.log(error);
		}

		return response;
	}

	export async function addFriend(invite: FriendInviteRequest): Promise<null> {
		let authResult: AuthResult;

		await authenticate(invite.authCreds, null, "friends friends.user")
		.then((_authResult: AuthResult) => {
			authResult = _authResult;
		});

		if (!authResult.valid) return;

		let recipientError: any;
		let recipient: any;

		await User.findOne({ _id: ObjectId(invite.id) })
			.populate("friendInvites friendInvites.user")
			.catch((error) => { recipientError = error; })
			.then((user) => { recipient = user; })

		if (recipientError || !recipient) return;

		let senderFriendIds = authResult.user.friends
			.map(friend => friend.user.id.toString());

		let recipientFriendInviteIds = recipient.friendInvites
			.map(friendInvite => friendInvite.user.id.toString());

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

		await authenticate(invite.authCreds, null, "friends friends.user")
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

	export async function acceptInvitation(invite: FriendInviteRequest): Promise<null> {
		console.log("acceptInvitation")
		let authResult: AuthResult;

		let populate = "friends friends.user friendInvites friendInvites.user";

		await authenticate(invite.authCreds, null, populate)
		.then((_authResult: AuthResult) => {
			authResult = _authResult;
		});

		if (!authResult.valid) return;

		// Make sure we actually have the invitation
		let friendInviteIds = authResult.user.friendInvites
			.map(friendInvite => friendInvite.user.id);
			
		if (!friendInviteIds.includes(invite.id)) return;

		// Make sure the sender actually sent it
		let sender: any;
		let senderError: any;

		await User.findOne({ _id: ObjectId(invite.id) })
		.catch((error) => { senderError = error; })
		.then((user) => { sender = user; });

		if (senderError || !sender) return;
		
		// Add sender to our friends list
		authResult.user.friends.push({
			user: ObjectId(sender.id),
			confirmed: true
		});

		// Remove invitation
		for (let friendInvite of authResult.user.friendInvites) {
			if (friendInvite.user.id == invite.id) {
				authResult.user.friendInvites.id(ObjectId(friendInvite.id)).remove();

				break;
			}
		}

		// Confirm friendship for sender
		for (let friend of sender.friends) {
			if (friend.user.id == invite.id) {
				sender.friends.id(ObjectId(friend.id)).confirmed = true;

				break;
			}
		}

		// Save everything
		authResult.user.save();
		sender.save();
	}
}