import { Nonce } from "../../../gamma/crypto/crypto.types";

export interface KeyPromise {
	nonce: Nonce;
	resolve: Function;
	reject: Function;
	timeout: any;
}