import { Message } from "../../../../gamma/gamma.types";

export interface MessageCluster {
	messages: Message[];
	senderId: string;
	sentByLocalUser: boolean;
}