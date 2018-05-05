import { Socket } from "socket.io";

export interface UserState {
	id: string;
	name: string;
	friendIds: string[]; // Only confirmed friends
}

export interface DispatchEvent {
	from: Socket;
	to?: string; // Recipient id
	event: string;
	data: string;
}