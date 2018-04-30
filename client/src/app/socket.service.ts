import { LogInCreds, RegisterCreds, LogInResponse, RegisterResponse } from "../../../gamma/account/types";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import * as io from "socket.io-client";

@Injectable()
export class SocketService {

	private socket;

	constructor() {
		this.socket = io();
	}

	logIn(creds: LogInCreds): Observable<LogInResponse> {
		this.socket.emit("login request", creds);

		return new Observable<LogInResponse>((observer) => {
			this.socket.on("login response", (data) => {
				observer.next(data);
			});
		});
	}

	register(creds: RegisterCreds): Observable<RegisterResponse> {
		this.socket.emit("register request", creds);

		return new Observable<LogInResponse>((observer) => {
			this.socket.on("register response", (data) => {
				observer.next(data);
			});
		});		
	}

}
