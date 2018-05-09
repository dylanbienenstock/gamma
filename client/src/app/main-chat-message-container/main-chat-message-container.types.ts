import { Message } from "../../../../server/server.types";

export interface MessageCluster {
	messages: Message[];
	senderId: string;
	sentByLocalUser: boolean;
}