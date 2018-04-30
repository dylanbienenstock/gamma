import { LogInCreds, RegisterCreds, LogInResponse, RegisterResponse } from "../../../gamma/account/types";
import { Injectable } from '@angular/core';
import { Socket } from "ng-socket-io";
import { Observable } from "rxjs/Observable";

@Injectable()
export class SocketService {

	constructor(private socket: Socket) { }

	logIn(creds: LogInCreds): Observable<LogInResponse> {
		this.socket.emit("login request", creds);

		return this.socket.fromEvent<LogInResponse>("login response");
	}

	register(creds: RegisterCreds): Observable<RegisterResponse> {
		this.socket.emit("register request", creds);

		return this.socket.fromEvent<RegisterResponse>("register response");		
	}

}
