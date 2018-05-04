import { LogInCreds, RegisterCreds, LogInResponse, RegisterResponse, SearchQuery, ContactList, FriendInviteRequest, AuthCreds } from "../../../gamma/account/account.types";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

import * as io from "socket.io-client";

@Injectable()
export class SocketService {

	private socket;

	constructor() {
		this.socket = io({ transports: ["websocket"] });
	}

	sendPing() {
		this.socket.emit("ping", { data: 1 });
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

	getContactList(authCreds: AuthCreds): Observable<ContactList> {
		this.socket.emit("contacts request", authCreds);

		return new Observable<ContactList>((observer) => {
			this.socket.on("contacts response", (data) => {
				observer.next(data);
			});
		});	
	}

	search(query: SearchQuery): Observable<ContactList> {
		this.socket.emit("search request", query);

		return new Observable<ContactList>((observer) => {
			this.socket.on("search response", (data) => {
				observer.next(data);
			});
		});	
	}

	addFriend(invite: FriendInviteRequest) {
		this.socket.emit("friend add", invite);
	}

	removeFriend(invite: FriendInviteRequest) {
		this.socket.emit("friend remove", invite);
	}

	acceptInvitation(invite: FriendInviteRequest) {
		this.socket.emit("friend invite accept", invite);
	}

	rejectInvitation(invite: FriendInviteRequest) {
		this.socket.emit("friend invite reject", invite);
	}	
}
