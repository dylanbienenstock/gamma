import * as mongoose from "mongoose"

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const User = mongoose.model("User", {
	name: {
		type: String,
		required: [true, "Username is required"],
		maxlength: [24, "Username must be fewer than 24 characters"]
	},

	// Required for account recovery
	email: {
		type: String,
		required: false,
		match: [emailRegex, "Email format is invalid"]
	},

	// Hashed using bcrypt
	password: {
		type: String,
		required: [true, "Password is required"]
	},

	authToken: String
});

export { User }