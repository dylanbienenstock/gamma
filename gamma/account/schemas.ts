import * as mongoose from "mongoose"

const nameRegex: RegExp = /^([a-zA-Z0-9\-_])*$/;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const User = mongoose.model("User", {
	name: {
		type: String,
		required: [true, "Username is required"],
		match: [nameRegex, "Username must contain only letters, numbers, and hyphens"],
		maxlength: [24, "Username must be fewer than 24 characters"]
	},

	email: {
		type: String,
		required: [true, "Email address is required"],
		match: [emailRegex, "Email address is invalid"]
	},

	// Hashed using bcrypt
	password: {
		type: String,
		required: [true, "Password is required"]
	},

	authToken: String
});

export { User }