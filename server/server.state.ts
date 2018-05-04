import { UserState } from "./server.types";
import { Socket } from "socket.io";

export module State {
	let userSockets: { [key: string]: string } = {}; // Key: user.id, Value: socket.id
	let userStates: UserState[] = [];

	function initializeUser(socket: Socket) {
		if (!userStates[socket.id]) {
			userStates[socket.id] = {
				id: null,
				name: null,
				loggedIn: null
			};
		}
	}

	export function removeUser(socket: Socket) {
		delete userStates[socket.id];
	}

	export function setId(socket: Socket, value: string) {
		initializeUser(socket);
		userSockets[value] = socket.id;
		userStates[socket.id].id = value;
	}

	export function getId(socket: Socket): string {
		initializeUser(socket);		
		return userStates[socket.id].id;
	}

	export function setName(socket: Socket, value: string) {
		initializeUser(socket);
		userStates[socket.id].name = value;
	}

	export function getName(socket: Socket): string {
		initializeUser(socket);		
		return userStates[socket.id].name;
	}

	export function setLoggedIn(socket: Socket, value: boolean) {
		initializeUser(socket);
		userStates[socket.id].loggedIn = value;
	}

	export function getLoggedIn(socket: Socket): boolean {
		initializeUser(socket);		
		return userStates[socket.id].loggedIn;
	}
}