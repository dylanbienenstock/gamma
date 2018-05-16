import { Injectable } from '@angular/core';
import { Nonce, KeyPair } from '../../../gamma/crypto/crypto.types';

import * as openpgp from "openpgp";

@Injectable()
export class CryptoService {
	constructor() { }

	localKeyPairs: Map<Nonce, KeyPair> = new Map<Nonce, KeyPair>(); // Owned by local user
	friendPublicKeys: Map<Nonce, any> = new Map<Nonce, any>();  	// Owned by friends
}
