import { config } from "./server.config";
import { AccountManager } from "../gamma/gamma.module";
import { LogInCreds, RegisterCreds, RegisterResponse, SearchQuery, FriendInviteRequest } from "../gamma/account/account.types";
import { Socket } from "socket.io";
import { Events } from "./server.events";

const path = require("path");

const express = require("express");
const app = express();
const http = require("http").createServer(app);

const io = require("socket.io")(http);
io.set("transports", ["websocket"]);
// const p2pserver = require("socket.io-p2p-server").Server

var users = {};


// io.use(p2pserver);

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

(function initialize() {
	AccountManager.initialize(config);

	listen();
})();

function listen() {
	let port: string = process.env.port || "8000";

	http.listen(port, () => {
		console.log(`Listening on port ${port}`);
	});

	io.on("connection", (socket: Socket) => {
		Events.configure(socket);

		// let loggedIn = false;
		// let name: string; // Null until logged in
		// let currentRoom: string;

		// socket.on("disconnect", () => {
		// 	AccountManager.logOut(name);
		// 	delete users[name];
		// });

		// socket.on("ping", (data) => {
		// 	socket.emit("pong", data);
		// });

		// socket.on("login request", (creds: LogInCreds) => {
		// 	if (!loggedIn) {
		// 		AccountManager.logIn(creds)
		// 		.then((response) => {
		// 			if (response.success) {
		// 				users[creds.name] = socket.id;

		// 				loggedIn = true;
		// 				name = creds.name;
		// 			}

		// 			socket.emit("login response", response);
		// 		});
		// 	}
		// });

		// socket.on("register request", (creds: RegisterCreds) => {
		// 	if (!loggedIn) {
		// 		AccountManager.createAccount(creds)
		// 		.then((response) => {
		// 			if (response.success) {
		// 				users[creds.name] = socket.id;

		// 				loggedIn = true;s
		// 				name = creds.name;						
		// 			}

		// 			socket.emit("register response", response);
		// 		});
		// 	}
		// });

		// socket.on("search request", (query: SearchQuery) => {
		// 	AccountManager.search(query)
		// 	.then((response) => {
		// 		socket.emit("search response", response);
		// 	});
		// });

		// socket.on("friend add", (invite: FriendInviteRequest) => {
		// 	AccountManager.addFriend(invite);
		// });

		// socket.on("friend remove", (invite: FriendInviteRequest) => {
		// 	AccountManager.removeFriend(invite);
		// });

		// socket.on("room join request", (data: any) => {
		// 	if (loggedIn) {
		// 		AccountManager.validate(name, data.authToken).then((valid) => {
		// 			socket.leave(currentRoom);

		// 			if (valid) {
		// 				currentRoom = data.room;
		// 				socket.join(data.room);
		// 				// p2pserver(socket, null, data.room);
		// 			}
		// 		});
		// 	}
		// });

		// socket.on("message send", (data: any) => {
		// 	console.log(data);

		// 	socket.to(data.room).emit("message receive", {
		// 		name: name,
		// 		message: data.message
		// 	});
		// });
	});
}