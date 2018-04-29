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

	export async function createAccount(creds: RegisterCreds) {
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

	function generateAuthToken() {
		let authToken: string = "";

		for (let i = 0; i < 16; i++) {
			let byte: number = Math.floor(Math.random() * 255);

			authToken += String.fromCharCode(byte);
		}

		return authToken;
	}

	export async function logIn(creds: LogInCreds) {
		let response: LogInResponse;

		await User.where({ name: creds.name }).findOne((error, user) => {
			bcrypt.compare(creds.password, user.password)
			.then(() => {
				let authToken: string = generateAuthToken();

				user.authToken = authToken;

				user.save().then(() => {
					response = {
						success: true,
						authToken: authToken
					}
				});
			})
			.catch(() => {
				response = {
					success: false
				}
			});
		});

		return response;
	}
}