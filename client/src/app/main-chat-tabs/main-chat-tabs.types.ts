import { Conversation } from "../chat.service.types";

export interface ChatTab {
	conversation: Conversation;
	flashing?: boolean;
	offsetX?: number;
	order?: number;
}