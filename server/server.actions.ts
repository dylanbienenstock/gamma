import { Socket } from "socket.io";
import { LogInCreds, RegisterCreds, SearchQuery, FriendInviteRequest, AuthCreds } from "../gamma/account/account.types";
import { AccountManager } from "../gamma/gamma.module";
import { State } from "./server.state";

export module Actions {
	export function disconnect(socket: Socket) {
		AccountManager.logOut(State.getId(socket));
		State.destroyUserState(socket);
	}

	export function pong(socket: Socket, data: any) {
		socket.emit("pong", data);
	}

	export function logIn(socket: Socket, creds: LogInCreds) {
		if (!State.userStateExists(socket)) {
			AccountManager.logIn(creds)
			.then((response) => {
				if (response.success) {
					State.createUserState(socket, response.user);
				}

				socket.emit("login response", response);
			});
		}
	}

	export function register(socket: Socket, creds: RegisterCreds) {
		if (!State.userStateExists(socket)) {
			AccountManager.createAccount(creds)
			.then((response) => {
				if (response.success) {
					State.createUserState(socket, response.user);
				}

				socket.emit("register response", response);
			});
		}
	}

	export function getContactList(socket: Socket, authCreds: AuthCreds) {
		AccountManager.getContactList(authCreds)
		.then((response) => {
			socket.emit("contacts response", response);
		});
	}

	export function search(socket: Socket, query: SearchQuery) {
		AccountManager.search(query)
		.then((response) => {
			socket.emit("search response", response);
		});
	}

	export function addFriend(socket: Socket, invite: FriendInviteRequest) {
		AccountManager.addFriend(invite)
		.then((success) => {
			
		});
	}

	export function removeFriend(socket: Socket, invite: FriendInviteRequest) {
		AccountManager.removeFriend(invite)
		.then((success) => {

		});
	}

	export function acceptInvitation(socket: Socket, invite: FriendInviteRequest) {
		AccountManager.acceptInvitation(invite)
		.then((success) => {

		});
	}

	export function rejectInvitation(socket: Socket, invite: FriendInviteRequest) {
		AccountManager.rejectInvitation(invite)
		.then((success) => {

		});
	}
}