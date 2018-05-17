import { Nonce, KeyPair, SecureMessage, KeyResponse } from "./crypto.types";
import { Message, GammaConfig } from "../gamma.types";

import * as openpgp from "openpgp";
import * as secureRandom from "secure-random";
import * as md5 from "js-md5";

export module Crypto {
	openpgp.config.compression = openpgp.enums.compression.zip;
	const curve: string = "curve25519";

	// Source: National Security Agency

	const nsaNames: string[] = [
		"Paul M. Nakasone",   // Director
		"George C. Barnes",   // Deputy Director
		"Mark W. Westergren", // Deputy Chief
		"Harry Coker, Jr.",   // Executive Director
		"Earnest Green"		  // Chief of Staff
	];

	const nsaEmail: string = "nsapao@nsa.gov";

	/* A notice from our friends at the NSA

	"Unless a copyright or trademark is indicated, information on the
	National Security Agency Web site is in the public domain and may be reproduced,
	published or otherwise used without the National Security Agency's permission.
	We request only that the National Security Agency be cited as the source of
	information and that any photo credits or bylines be similarly credited to the
	photographer or author or NSA, as appropriate."
	
	https://www.nsa.gov/terms-of-use.shtml#copyright */

	export function resistFingerprinting(timestamp: number): number {
		return Math.round(timestamp * 0.01) / 0.01;
	}

	export async function generateNonce(): Promise<Nonce> {
		return {
			timestamp: resistFingerprinting(Date.now()),
			data: secureRandom(16).join("")
		};
	}

	export async function generateKeyPair(nonce: Nonce): Promise<KeyPair> {
		// Gets a random name from list of NSA leaders
		let name = nsaNames[Math.floor(Math.random() * nsaNames.length)];

		let options = {
			userIds: [{ name: name, email: nsaEmail }],
			curve: curve, // https://safecurves.cr.yp.to/
			passphrase: nonce.data
		};

		let keyPair: KeyPair;

		await openpgp.generateKey(options).then((key) => {
			keyPair = {
				nonce: nonce,
				private: key.privateKeyArmored,
				public: key.publicKeyArmored
			};
		});

		return keyPair;
	}

	export async function encryptMessage(keyResponse: KeyResponse, message: Message): Promise<SecureMessage> {
		let encrypted: string;
		let error: any;

		let encryptOptions = {
			data: message.text,
			publicKeys: openpgp.key
				.readArmored(keyResponse.publicKey).keys
		};
		
		await openpgp.encrypt(encryptOptions)
		.catch((_error) => { error = _error; })
		.then((_encrypted) => {
			encrypted = _encrypted.data;
		});

		if (error) throw error;
		if (!encrypted) throw "Failed to encrypt message";

		let hash: string = md5(message.text);
		message.text = encrypted;

		let secureMessage: SecureMessage = {
			nonce: keyResponse.nonce,
			hash: hash,
			message: message
		};

		return secureMessage;
	}
}