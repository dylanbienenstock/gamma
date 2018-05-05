import { UserState } from "./server.types";
import { Socket } from "socket.io";
import { AccountManager } from "../gamma/gamma.module";

export module State {
	// Key: user.id, Value: socket.id
	let userSockets: { [key: string]: string } = {};
	let userStates: UserState[] = [];

	export function createUserState(socket: Socket, user: any) {
		if (!userStates[socket.id]) {
			userSockets[user.id] = socket.id;
			userStates[socket.id] = {
				id: user.id,
				name: user.name,
				friendIds: AccountManager.getFriendIds(user.id)
			};
		}
	}

	export function destroyUserState(socket: Socket) {
		delete userSockets[getId(socket)];
		delete userStates[socket.id];
	}

	export function userStateExists(socket: Socket) {
		return userStates[socket.id] != undefined;
	}

	export function getSocket(id: string) {
		return userSockets[id];
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

	export function getFriendIds(socket: Socket) {
		return userStates[socket.id].friendIds;
	}
}