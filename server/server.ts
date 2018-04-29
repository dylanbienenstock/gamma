import { config } from "./server.config";
import { AccountManager } from "../gamma/module";
import { LogInCreds, RegisterCreds, RegisterResponse } from "../gamma/account/types";

const io = require("socket.io")();

(function initialize() {
	AccountManager.initialize(config);

	listen();
})();

function listen() {
	let port = process.env.port || 8000;
	console.log(`Listening on port ${port}`);

	io.on("connection", (socket: SocketIO.Socket) => {
		socket.on("register", (creds: RegisterCreds) => {
			AccountManager.createAccount(creds)
			.then((response) => {
				socket.emit("register response", response);
			});
		});
	});

	io.listen(process.env.port || 8000);
}