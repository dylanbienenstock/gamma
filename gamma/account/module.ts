import * as mongoose from "mongoose";
import * as bcrypt from "bcrypt-as-promised";

import { GammaConfig } from "../types";
import { RegisterCreds, RegisterResponse, LogInCreds, LogInResponse, FriendInviteResponse, SearchResponse, SearchQuery } from "./types";
import { User } from "./schemas";

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

	export async function validate(name: string, authToken: string): Promise<boolean> {
		let error: any;
		let user: any;

		await User.where({ name: name }).findOne((_error, _user) => {
			error = _error;
			user = _user;
		});

		return (!error && user && authToken == user.authToken);
	}

	export async function search(query: SearchQuery): Promise<SearchResponse> {
		let response: SearchResponse = {};

		let error: any;
		let users: any;

		await User.find(
			{ name: {
				$regex: `.*${query.text}.*`,
				$options: "i"
			}},
			"id name",
			{
				$limit: query.limit || 16,
				$skip: query.offset || 0
			},
			(_error, _users) => {
				error = _error;
				users = _users;
			}
		);

		if (!error) {
			response.results = users.map((user) => {
				return {
					id: user.id,
					name: user.name
				};
			});
		} else {
			console.log(error);
		}

		return response;
	}

	export async function sendFriendInvite(inviterName: string, inviteeName: string, ): Promise<FriendInviteResponse> {
		let response: FriendInviteResponse = { success: false };

		let inviterError: any;
		let inviter: any;

		let inviteeError: any;
		let invitee: any;

		await User.where({ name: inviterName }).findOne((_inviterError, _inviter) => {
			inviterError = _inviterError;
			inviter = _inviter;
		});

		if (inviterError || !inviter) return response;

		await User.where({ name: inviteeName }).findOne((_inviteeError, _invitee) => {
			inviteeError = _inviteeError;
			invitee = _invitee;
		});

		if (inviteeError || !invitee) return response;

		let inviterFriendNames = inviter.friends.map(friend => friend.id);

		if (inviterFriendNames.contains(invitee.names)) return response;

		let friendInvite = { friendId: invitee.id }
		inviter.friendInvites.push(friendInvite);
		inviter.save();

		response.success = true;
		response.friendInvite = {
			id: invitee.id,
			name: invitee.name
		}

		return response;
	}
}