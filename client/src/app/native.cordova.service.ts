import { Injectable } from '@angular/core';
import { NativeService } from './native.service';

declare var navigator;

@Injectable()
export class NativeCordovaService implements NativeService {
	constructor() { }

	platform: string = "cordova";	

	promptServerURL(callback: Function) {
		navigator.notification.prompt(
			"Please specify a server URL",
			callback,
			"Failed to connect",
			["CONNECT"]
		);
	}
}
