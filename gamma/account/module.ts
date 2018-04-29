import * as mongoose from "mongoose";
import * as bcrypt from "bcrypt-as-promised";

import { GammaConfig } from "../types";
import { RegisterCreds, RegisterResponse, LogInCreds, LogInResponse } from "./types";
import { User } from "./schemas";

export module AccountManager {
	export function initialize(config: GammaConfig) {
		mongoose.connect(config.database);
	}

	function getValidationErrors(reject: any) {
		return Object.keys(reject.errors).map(error => reject.errors[error].message);
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
		// Hash the password
		await bcrypt.hash(creds.password).then((hash) => {
			creds.password = hash;
		}, console.error);

		let nameInUse = false;
		let response: RegisterResponse;

		// Ensure that the name is unique
		await User.where({ name: creds.name }).findOne((error, user) => {
			nameInUse = (user != null);
		});

		if (nameInUse) {
			response = {
				success: false,
				errors: ["Username is currently in use"]
			};
		}
		else {
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
				response = {
					success: true,
					user: user,
					authToken: authToken
				};
			})
			.catch((reject) => {
				response = {
					success: false,
					errors: getValidationErrors(reject)
				};
			});
		}

		return response;		
	}

	export async function logIn(creds: LogInCreds): Promise<LogInResponse> {
		let response: LogInResponse;
		let error: any;
		let user: any;

		await User.where({ name: creds.name }).findOne((_error, _user) => {
			error = _error;
			user = _user;
		});

		if (error) {
			response = { success: false }
		}
		else
		{
			await bcrypt.compare(creds.password, user.password)
			.then(() => {
				// Generate a new auth token on every login
				let authToken: string = generateAuthToken();

				response = {
					success: true,
					authToken: authToken
				}

				user.authToken = authToken;
				user.save();
			})
			.catch(() => {
				response = { success: false }
			});
		}

		return response;
	}

	export function logOut(name: string, authToken?: string) {
		User.where({ name: name }).findOne((error, user) => {
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
}