import { Contact } from "../../../gamma/account/account.types";
import { Message } from "../../../server/server.types";

export interface Conversation {
	withId: string; // Who the conversation is with
	messages: Message[];
	open: boolean; // Tab is open
	startedByLocalUser: boolean;
}