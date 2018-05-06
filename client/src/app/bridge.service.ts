declare global {
	interface Window {
		require: any;
	}
}

import { Injectable } from '@angular/core';
import isElectron from "is-electron";
const { ipcRenderer } = window.require("electron");

@Injectable()
export class BridgeService {
	constructor() {
		console.log("ipcRenderer", ipcRenderer);
	}

	test() {
		ipcRenderer.emit("gamma", { it: "works" });
	}
}
