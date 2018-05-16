import { Message } from "../gamma.types";

export interface Nonce {
	timestamp: number;
	data: Uint8Array;
}

export interface KeyPair {
	private: string;
	public: string;
}

export interface SecureMessage {
	nonce: Nonce;
	hash: string;
	message: Message;
}