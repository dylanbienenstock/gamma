import { LogInCreds, RegisterCreds, LogInResponse, RegisterResponse, SearchQuery, ContactList, FriendInviteRequest, AuthCreds, Contact } from "../../../gamma/account/account.types";
import { StatusChangeDispatch } from "../../../server/server.types";
import { Injectable, Inject } from '@angular/core';
import { Observable } from "rxjs/Observable";

import * as io from "socket.io-client";
import { LocalUserService } from "./local-user.service";
import { ContactService } from "./contact.service";
import { NativeService } from "./native.service";

import { environment } from "../environments/environment"
import { Message } from "../../../gamma/gamma.types";
import { KeyRequest, Nonce, KeyResponse, SecureMessage, KeyPair } from "../../../gamma/crypto/crypto.types";
import { Crypto } from "../../../gamma/crypto/crypto.module";
import { KeyPromise } from "./socket.service.types";

@Injectable()
export class SocketService {
	private socket;
	private internalListenersSetup: boolean = false;

	private localKeyPairs: KeyPair[] = [];
	private keyPromises: KeyPromise[] = [];

	constructor(private localUserService: LocalUserService,
				@Inject("NativeService") private nativeService: NativeService) {

		this.socket = io(environment.serverURL);

		document.addEventListener("deviceready", function() {
			this.socket = io(environment.serverURL);
		});
	}

	setupInternalListeners() {
		if (this.internalListenersSetup) return;

		this.internalListenersSetup = true;

		this.socket.on("dispatch key request", (keyRequest) => {
			this.sendKey(keyRequest);
		});

		this.socket.on("dispatch key response", (keyResponse) => {
			this.receiveKey(keyResponse);
		});
	}

	sendPing() {
		this.socket.emit("ping", { data: 1 });
	}

	logIn(creds: LogInCreds): Observable<LogInResponse> {
		this.socket.emit("login request", creds);

		return new Observable<LogInResponse>((observer) => {
			this.socket.on("login response", (data) => {
				if (data.success) this.setupInternalListeners();

				observer.next(data);
			});
		});
	}

	register(creds: RegisterCreds): Observable<RegisterResponse> {
		this.socket.emit("register request", creds);

		return new Observable<LogInResponse>((observer) => {
			this.socket.on("register response", (data) => {
				if (data.success) this.setupInternalListeners();

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

	changeStatus(status: string) {
		this.socket.emit("status", {
			authCreds: this.localUserService.authCreds(),
			status: status
		});
	}

	onFriendAdded(): Observable<Contact> {
		return new Observable<Contact>((observer) => {
			this.socket.on("dispatch friend added", (data: Contact) => {
				observer.next(data);
			});
		});
	}

	onFriendRemoved(): Observable<Contact> {
		return new Observable<Contact>((observer) => {
			this.socket.on("dispatch friend removed", (data: Contact) => {
				observer.next(data);
			});
		});
	}

	onInvitationAccepted(): Observable<Contact> {
		return new Observable<Contact>((observer) => {
			this.socket.on("dispatch friend accepted", (data: Contact) => {
				observer.next(data);
			});
		});
	}

	onInvitationRejected(): Observable<Contact> {
		return new Observable<Contact>((observer) => {
			this.socket.on("dispatch friend rejected", (data: Contact) => {
				observer.next(data);
			});
		});
	}

	onStatusChanged(): Observable<StatusChangeDispatch> {
		return new Observable<StatusChangeDispatch>((observer) => {
			this.socket.on("dispatch status", (data: StatusChangeDispatch) => {
				observer.next(data);
			});
		});
	}

	onMessageReceived(): Observable<Message> {
		return new Observable<Message>((observer) => {
			this.socket.on("dispatch message", async (data: SecureMessage) => {
				let decryptedMessage: Message;

				await this.decryptMessage(data)
				.then((_decryptedMessage) => {
					decryptedMessage = _decryptedMessage;
				});

				observer.next(decryptedMessage);
			});
		});
	}

	private async decryptMessage(secureMessage: SecureMessage): Promise<Message> {
		let keyPair: KeyPair;
		let keyPairIndex: number;

		for (let i = 0; i < this.localKeyPairs.length; i++) {
			if (this.localKeyPairs[i].nonce.timestamp == secureMessage.nonce.timestamp &&
				this.localKeyPairs[i].nonce.data == secureMessage.nonce.data) {

				keyPair = this.localKeyPairs[i];
				keyPairIndex = i;

				break;
			}
		}

		if (!keyPair) throw "No matching local keypair";

		secureMessage.message.text = await Crypto.decryptMessage(secureMessage, keyPair.private);

		return secureMessage.message;
	}

	private requestKey(id: string): Promise<KeyResponse> {
		let promise = new Promise<KeyResponse>(async (resolve, reject) => {
			let nonce: Nonce = await Crypto.generateNonce();

			let keyRequest: KeyRequest = {
				nonce: nonce,
				recipientId: id
			};

			let timeout = setTimeout(() => {
				reject("Timed out");
			}, 10000);

			let keyPromise: KeyPromise = {
				nonce: nonce,
				resolve: resolve,
				reject: reject,
				timeout: timeout
			};

			this.keyPromises.push(keyPromise);
			this.socket.emit("key request", keyRequest);		
		});

		return promise;
	}

	private receiveKey(keyResponse: KeyResponse) {
		let keyPromise: KeyPromise;
		let keyPromiseIndex: number;

		for (let i = 0; i < this.keyPromises.length; i++) {
			if (this.keyPromises[i].nonce.timestamp == keyResponse.nonce.timestamp &&
				this.keyPromises[i].nonce.data == keyResponse.nonce.data) {

				keyPromise = this.keyPromises[i];
				keyPromiseIndex = i;

				break;
			}
		}

		if (!keyPromise) throw "Received unrequested key";

		clearTimeout(keyPromise.timeout);
		keyPromise.resolve(keyResponse);
		this.keyPromises.splice(keyPromiseIndex);
	}

	private async sendKey(keyRequest: KeyRequest) {
		let localKeyPair = this.localKeyPairs
		.find(localKeyPair => localKeyPair.nonce == keyRequest.nonce);

		if (localKeyPair) throw "Invalid nonce";

		let keyPair: KeyPair | void;
		let error: any;

		await Crypto.generateKeyPair(keyRequest.nonce)
		.catch((_error) => { error = _error; })
		.then((_keyPair) => { keyPair = _keyPair; })

		if (error) throw error;
		if (!keyPair) throw "No keypair returned";

		let keyResponse: KeyResponse = {
			nonce: keyRequest.nonce,
			publicKey: keyPair.public,
			recipientId: keyRequest.senderId
		};

		this.localKeyPairs.push(keyPair);
		this.socket.emit("key response", keyResponse);
	}

	async sendMessage(message: Message) {

		// Get the public key
		let keyResponse: KeyResponse | void;
		let error: any;
		
		await this.requestKey(message.recipientId)
		.catch((_error) => { error = _error; })
		.then((_keyResponse) => { keyResponse = _keyResponse; })

		if (error) throw error;
		if (!keyResponse) throw "No public key received";


		// Encrypt message
		let secureMessage: SecureMessage | void;

		await Crypto.encryptMessage(keyResponse, message)
		.catch((_error) => { error = _error; })
		.then((_secureMessage) => { secureMessage = _secureMessage; })

		if (error) throw error;
		if (!keyResponse) throw "No encrypted message returned";


		// Send it
		this.socket.emit("message", secureMessage);
	}	
}
