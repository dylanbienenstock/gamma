import { Socket } from "socket.io";
import { LogInCreds, RegisterCreds, SearchQuery, FriendInviteRequest, AuthCreds } from "../gamma/account/account.types";
import { Actions } from "./server.actions";
import { StatusChangeRequest } from "./server.types";
import { KeyRequest, KeyResponse } from "../gamma/crypto/crypto.types";
import { Message } from "../gamma/gamma.types";

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

		socket.on("contacts request", (authCreds: AuthCreds) => {
			Actions.getContactList(socket, authCreds);
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

		socket.on("friend invite accept", (invite: FriendInviteRequest) => {
			Actions.acceptInvitation(socket, invite);
		});

		socket.on("friend invite reject", (invite: FriendInviteRequest) => {
			Actions.rejectInvitation(socket, invite);
		});

		socket.on("status", (statusChange: StatusChangeRequest) => {
			Actions.changeStatus(socket, statusChange);
		});

		socket.on("key request", (keyRequest: KeyRequest) => {
			Actions.requestKey(socket, keyRequest);
		});

		socket.on("key response", (keyResponse: KeyResponse) => {
			Actions.sendKey(socket, keyResponse);
		});

		socket.on("message", (message: Message) => {
			Actions.sendMessage(socket, message);
		});
	}
}