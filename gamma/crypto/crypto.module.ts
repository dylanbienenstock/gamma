import * as openpgp from "openpgp";
import { Nonce, KeyPair } from "./crypto.types";

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
		let data: Uint8Array = await openpgp.crypto.random.getRandomBytes(16);
		let timestamp = resistFingerprinting(Date.now());

		return {
			timestamp: timestamp,
			data: data
		};
	}

	export async function generateKeyPair(nonce: Nonce): Promise<KeyPair> {
		if(this.localKeyPairs.has(nonce)) throw "Invalid nonce";

		// Gets a random name from list of NSA leaders
		let name = nsaNames[Math.floor(Math.random() * nsaNames.length)];

		let options = {
			userIds: [{ name: name, email: nsaEmail }],
			curve: curve, // https://safecurves.cr.yp.to/
			passphrase: nonce.data.join("")
		};

		let keyPair: KeyPair;

		await openpgp.generateKey(options).then((key) => {
			keyPair = {
				private: key.privateKeyArmored,
				public: key.publicKeyArmored
			};
		});

		return keyPair;
	}
}