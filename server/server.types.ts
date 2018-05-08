import { Socket } from "socket.io";
import { AuthCreds, Contact } from "../gamma/account/account.types";

export interface UserState {
	id: string;
	name: string;
	status: string;
	friendIds: string[]; // Only confirmed friends
}

export interface DispatchEvent {
	from: Socket;
	to?: string; // Recipient id
	event: string;
	data: any;
}

export interface StatusChangeRequest {
	authCreds: AuthCreds;
	status: string;
}

export interface StatusChangeDispatch {
	contact: Contact;
	status: string;
}

export interface Message {
	text: string;
	senderId?: string;
	recipientId?: string;
}