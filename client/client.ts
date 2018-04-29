import * as rl from "readline-sync";
import { LogInCreds, RegisterCreds, RegisterResponse } from "../gamma/account/types";
import { SocketService } from "./socket.service";

const socketService = new SocketService();
var currentAction = "initialize";

function clear(title?: string) {
	title = title || "Gamma client by Dylan Bienenstock.\n";

	console.log("\x1B[2J\x1B[0f"); // Clear console.
	console.log(`${title}\n`);
}

(function initialize() {
	clear();
	logInOrRegister();
})();

function logInOrRegister() {
	let choice = rl.question("[L]og in or [R]egister: ");

	choice = choice.toUpperCase();

	switch (choice) {
		case "L":
			logIn();
			break;
		case "R":
			register();
			break;
		default:
			clear();
			logInOrRegister();
	} 
}

function logIn(error?: string) {
	currentAction = "log in";

	let creds: LogInCreds = {
		name: null,
		password: null
	}

	clear(error || "Enter your account credentials.");

	creds.name = rl.question("Username: ");
	creds.password = rl.question("Password: ", { hideEchoBack: true });
}

function register(error?: string) {
	currentAction = "register";

	let creds: RegisterCreds = {
		name: null,
		email: null,
		password: null
	}

	clear(error || "Enter your account credentials.");

	creds.name = rl.question("Username: ");
	creds.email = rl.question("(Optional) Email: ");
	creds.password = rl.question("Password: ", { hideEchoBack: true });
	
	let passwordConfirm = rl.question("Confirm password: ", { hideEchoBack: true });

	if (creds.password == passwordConfirm) {
		socketService.register(creds);

		console.log("\nRegistering...");
	} else {
		register("Passwords did not match. Please try again.");
	}
}

socketService.socket.on("register response", (response: RegisterResponse) => {
	if (currentAction == "register") {
		if (response.success) {
			clear("Successfully registered.");
		} else {
			register(`The following errors occured:\n${response.errors.join("\n")}\n\nPlease try again.`)
		}
	}
});