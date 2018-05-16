import { Contact } from "../../../gamma/account/account.types";
import { Message } from "../../../gamma/gamma.types";

export interface Conversation {
	withId: string; // Who the conversation is with
	messages: Message[];
	open: boolean; // Tab is open
	startedByLocalUser: boolean;
}