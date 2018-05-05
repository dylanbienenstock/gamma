import { Injectable } from '@angular/core';
import { AuthCreds } from '../../../gamma/account/account.types';

@Injectable()
export class LocalUserService {
	constructor() { }

	id: string;
	name: string;
	authToken: string
	valid: boolean = false;
	
	setLocalUser(localUser: any) {
		this.id = localUser.id;
		this.name = localUser.name;
		this.authToken = localUser.authToken;
		this.valid = true;		
	}

	authCreds(): AuthCreds {
		return {
			id: this.id,
			authToken: this.authToken
		};
	}
}
