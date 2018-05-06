import { Socket } from "socket.io";
import { LogInCreds, RegisterCreds, SearchQuery, FriendInviteRequest, AuthCreds, AuthResult } from "../gamma/account/account.types";
import { AccountManager } from "../gamma/gamma.module";
import { State } from "./server.state";
import { Dispatch } from "./server.dispatch";
import { StatusChangeRequest } from "./server.types";

export module Actions {
	export function disconnect(socket: Socket) {
		if (!State.userStateExists(socket)) return;

		Dispatch.statusChanged(socket, "offline");
		AccountManager.logOut(State.getId(socket));
		State.destroyUserState(socket);
	}

	export function pong(socket: Socket, data: any) {
		socket.emit("pong", data);
	}

	export function logIn(socket: Socket, creds: LogInCreds) {
		if (State.userStateExists(socket)) return;

		AccountManager.logIn(creds)
		.then((response) => {
			if (response.success) {
				State.createUserState(socket, response.user)
				.then(() => {
					Dispatch.statusChanged(socket, "online");
				});
			}

			socket.emit("login response", response);
		});
	}

	export function register(socket: Socket, creds: RegisterCreds) {
		if (State.userStateExists(socket)) return;

		AccountManager.createAccount(creds)
		.then((response) => {
			if (response.success) {
				State.createUserState(socket, response.user)
				.then(() => {
					Dispatch.statusChanged(socket, "online");
				});
			}

			socket.emit("register response", response);
		});
	}

	export function getContactList(socket: Socket, authCreds: AuthCreds) {
		if (!State.userStateExists(socket)) return;

		AccountManager.getContactList(authCreds)
		.then((response) => {
			response.contacts.forEach((contact) => {
				let contactSocket = State.getSocket(contact.id);

				if (contactSocket) {
					contact.status = State.getStatus(socket);
				} else {
					contact.status = "offline";
				}
			});

			socket.emit("contacts response", response);
		});
	}

	export function search(socket: Socket, query: SearchQuery) {
		if (!State.userStateExists(socket)) return;

		AccountManager.search(query)
		.then((response) => {
			socket.emit("search response", response);
		});
	}

	// Send invite
	export function addFriend(socket: Socket, invite: FriendInviteRequest) {
		if (!State.userStateExists(socket)) return;	

		AccountManager.addFriend(invite)
		.then((success) => {
			Dispatch.friendAdded(socket, invite.contact.id);
		});
	}

	// Retract invite
	export function removeFriend(socket: Socket, invite: FriendInviteRequest) {
		if (!State.userStateExists(socket)) return;

		AccountManager.removeFriend(invite)
		.then((success) => {
			Dispatch.friendRemoved(socket, invite.contact.id);
		});
	}

	export function acceptInvitation(socket: Socket, invite: FriendInviteRequest) {
		if (!State.userStateExists(socket)) return;

		AccountManager.acceptInvitation(invite)
		.then((success) => {
			State.exchangeFriendId(socket, invite.contact.id);
			Dispatch.invitationAccepted(socket, invite.contact.id);
			Dispatch.exchangeStatus(socket, invite.contact.id);
		});
	}

	export function rejectInvitation(socket: Socket, invite: FriendInviteRequest) {
		if (!State.userStateExists(socket)) return;

		AccountManager.rejectInvitation(invite)
		.then((success) => {
			Dispatch.invitationRejected(socket, invite.contact.id);
		});
	}

	export function changeStatus(socket: Socket, statusChange: StatusChangeRequest) {
		if (!State.userStateExists(socket)) return;

		AccountManager.authenticate(statusChange.authCreds)
		.then((authResult) => {
			if (!authResult.valid) return;

			let success = State.setStatus(socket, statusChange.status);

			if (!success) return;
			
			Dispatch.statusChanged(socket, statusChange.status);
		});
	}
}