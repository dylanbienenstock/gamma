import { UserState } from "./server.types";
import { Socket } from "socket.io";
import { AccountManager } from "../gamma/gamma.module";

export module State {
	// Key: user.id, Value: socket.id
	let userSockets: { [key: string]: Socket } = {};
	let userStates: UserState[] = [];

	export function createUserState(socket: Socket, user: any): void {
		if (!userStates[socket.id]) {
			userSockets[user.id] = socket;
			userStates[socket.id] = {
				id: user.id,
				name: user.name,
				friendIds: AccountManager.getFriendIds(user.id)
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
		return getFriendIds(socket).map(id => getSocket(id));
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

	export function removeFriendId(socket: Socket, id: string) {
		let index = userStates[socket.id].friendIds.indexOf(id);

		if (index != -1) {
			userStates[socket.id].friendIds.splice(index);
		}
	}

	export function getFriendIds(socket: Socket): string[] {
		return userStates[socket.id].friendIds;
	}
}