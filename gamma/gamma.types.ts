export interface GammaConfig {
	database: string;
}

export interface Message {
	text: string;
	senderId?: string;
	recipientId?: string;
	timestamps?: {
		sent?: number;
		received?: number;
	};
}