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

(function configure() {
	io.set("transports", ["websocket"]);

	app.use(express.static(path.join(__dirname, "../client/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "../client/dist/index.html"));
	});
})();

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
	});
}