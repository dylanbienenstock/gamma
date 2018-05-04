import { Socket } from "socket.io";
import { LogInCreds, RegisterCreds, SearchQuery, FriendInviteRequest } from "../gamma/account/account.types";
import { Actions } from "./server.actions";

export module Events {
	export function configure(socket: Socket) {
		socket.on("disconnect", () => { 
			Actions.disconnect(socket);
		});

		socket.on("ping", (data: any) => {
			Actions.pong(socket, data); 
		});

		socket.on("login request", (creds: LogInCreds) => {
			Actions.logIn(socket, creds); 
		});

		socket.on("register request", (creds: RegisterCreds) => {
			Actions.register(socket, creds);
		});

		socket.on("search request", (query: SearchQuery) => {
			Actions.search(socket, query);
		});

		socket.on("friend add", (invite: FriendInviteRequest) => {
			Actions.addFriend(socket, invite);
		});

		socket.on("friend remove", (invite: FriendInviteRequest) => {
			Actions.removeFriend(socket, invite);
		});
	}
}