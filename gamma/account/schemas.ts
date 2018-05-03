import * as mongoose from "mongoose"

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const nameRegex: RegExp = /^([a-zA-Z0-9\-_])*$/;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const friendInviteSchema = new Schema({
	friendId: ObjectId,
	confirmed: {
		type: Boolean,
		default: false
	}
},
{
	timestamps: true
});

const friendSchema = new Schema({
	friendId: ObjectId,
	confirmed: {
		type: Boolean,
		default: false
	},
	lastMessage: {
		type: Date,
		default: Date.now
	}
},
{
	timestamps: true
});

const userSchema = new Schema({
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

	// Random 16 byte string
	authToken: String,

	friendInvites: [friendInviteSchema],
	friends: [friendSchema]
},
{
	timestamps: true
});


const User = mongoose.model("User", userSchema);

export { User }