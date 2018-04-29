import * as mongoose from "mongoose";
import * as bcrypt from "bcrypt-as-promised";

import { GammaConfig } from "../types";
import { RegisterCreds, RegisterResponse } from "./types";
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
			let newUser = new User(creds);

			await newUser.save()
			.then((user) => {
				response = {
					success: true,
					user: user
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
}