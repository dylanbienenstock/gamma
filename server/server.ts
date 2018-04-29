import { config } from "./server.config";
import { AccountManager } from "../gamma/module";
import { LogInCreds, RegisterCreds, RegisterResponse } from "../gamma/account/types";
import { disconnect } from "cluster";

const io = require("socket.io")();

var users = {};

(function initialize() {
	AccountManager.initialize(config);

	listen();
})();

function listen() {
	let port = process.env.port || 8000;
	console.log(`Listening on port ${port}`);

	io.on("connection", (socket: SocketIO.Socket) => {
		let loggedIn = false;
		let name: string; // Null until logged in

		socket.on("disconnect", () => {
			AccountManager.logOut(name);
			delete users[name];
		});

		socket.on("login request", (creds: RegisterCreds) => {
			if (!loggedIn) {
				AccountManager.logIn(creds)
				.then((response) => {
					if (response.success) {
						users[creds.name] = socket.id;

						loggedIn = true;
						name = creds.name;
					}

					socket.emit("login response", response);
				});
			}
		});

		socket.on("register request", (creds: RegisterCreds) => {
			if (!loggedIn) {
				AccountManager.createAccount(creds)
				.then((response) => {
					if (response.success) {
						users[creds.name] = socket.id;

						loggedIn = true;
						name = creds.name;						
					}

					socket.emit("register response", response);
				});
			}
		});
	});

	io.listen(process.env.port || 8000);
}