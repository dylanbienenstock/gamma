import { Message } from "../gamma.types";

export interface Nonce {
	timestamp: number;
	data: string;
}

export interface KeyPair {
	nonce: Nonce;
	private: string;
	public: string;
}

export interface SecureMessage {
	nonce: Nonce;
	hash: string;
	message: Message;
}

export interface KeyRequest {
	nonce: Nonce;
	senderId?: string;
	recipientId?: string;
}

export interface KeyResponse {
	nonce: Nonce;
	publicKey: string;
	recipientId: string;
}