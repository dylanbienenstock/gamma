import { Injectable } from '@angular/core';

@Injectable()
export class ScreenSizeService {

	constructor() { }

	screenWidth: number;

	get mobile() {
		return this.screenWidth <= 768;
	}

	resize(width: number) {
		this.screenWidth = width;
	}
}
