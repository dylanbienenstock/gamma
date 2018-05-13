import { Injectable } from '@angular/core';

@Injectable()
export class NativePseudoService {
	constructor() { }

	platform: string = "web";

	promptServerURL(callback: Function) { }
}
