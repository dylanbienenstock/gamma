import { UserState } from "./server.types";
import { Socket } from "socket.io";
import { AccountManager } from "../gamma/gamma.module";
import { ContactList } from "../gamma/account/account.types";

export module State {
	// Key: user.id, Value: socket.id
	let userSockets: { [key: string]: Socket } = {};
	let userStates: UserState[] = [];
	let validStatuses = [ "online", "away", "busy", "offline" ];

	export async function createUserState(socket: Socket, user: any) {
		if (!userStates[socket.id]) {
			let friendIds: string[];

			await AccountManager.getFriendIds(user.id)
			.then((_friendIds) => {
				friendIds = _friendIds;
			});

			userSockets[user.id] = socket;
			userStates[socket.id] = {
				id: user.id,
				name: user.name,
				status: "online",
				friendIds: friendIds
			};
		}
	}
	
	export function destroyUserState(socket: Socket): void {
		delete userSockets[getId(socket)];
		delete userStates[socket.id];
	}

	export function userStateExists(socket: Socket): boolean {
		return userStates[socket.id] != undefined;
	}

	export function getSocket(id: string): Socket {
		return userSockets[id];
	}

	export function getFriendSockets(socket: Socket): Socket[] {
		let friendIds = getFriendIds(socket);
		return friendIds.map(id => getSocket(id));
	}

	export function getId(socket: Socket): string {		
		return userStates[socket.id].id;
	}

	export function getName(socket: Socket): string {		
		return userStates[socket.id].name;
	}

	export function addFriendId(socket: Socket, id: string) {
		userStates[socket.id].friendIds.push(id);
	}

	// Note: Nothing is actually being "exchanged" here.
	export function exchangeFriendId(socket: Socket, id: string) {
		let socket2: Socket = State.getSocket(id);
		let id2: string = State.getId(socket);

		if (!socket2 || !id2) return;

		State.addFriendId(socket, id);
		State.addFriendId(socket2, id2);
	}

	export function removeFriendId(socket: Socket, id: string) {
		let index = userStates[socket.id].friendIds.indexOf(id);

		if (index != -1) {
			userStates[socket.id].friendIds.splice(index);
		}
	}
	
	export function getFriendIds(socket: Socket): string[] {
		return userStates[socket.id].friendIds;
	}

	export function userIsFriendsWith(socket, id: string) {
		return State.getFriendIds(socket).includes(id);
	}
	
	export function setStatus(socket: Socket, status: string): boolean {
		if (!validStatuses.includes(status)) return false;
		
		userStates[socket.id].status = status;

		return true;
	}
	
	export function getStatus(socket: Socket): string {
		return userStates[socket.id].status;
	}

	export function insertStatusIntoContacts(socket: Socket, contactList: ContactList) {
		let myId = State.getId(socket);

		for (let contact of contactList.contacts) {
			contact.status = "offline";

			if (contact.id != myId && !userIsFriendsWith(socket, contact.id)) continue;

			let contactSocket = State.getSocket(contact.id);

			if (!contactSocket) continue;

			contact.status = State.getStatus(contactSocket);
		}
	}
}