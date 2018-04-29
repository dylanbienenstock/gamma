import * as io from "socket.io-client";
import { LogInCreds, RegisterCreds } from "../gamma/account/types";

export class SocketService {
	socket: SocketIOClient.Socket = io("http://localhost:8000");

	logIn(creds: LogInCreds) {
		this.socket.emit("login request", creds);
	}

	register(creds: RegisterCreds) {
		this.socket.emit("register request", creds);
	}
}