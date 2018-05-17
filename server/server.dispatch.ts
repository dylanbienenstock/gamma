import { State } from "./server.state";
import { Socket } from "socket.io";
import { DispatchEvent, StatusChangeDispatch } from "./server.types";
import { Contact } from "../gamma/account/account.types";
import { KeyRequest, KeyResponse, SecureMessage } from "../gamma/crypto/crypto.types";
import { Message } from "../gamma/gamma.types";

export module Dispatch {
	function direct(dispatch: DispatchEvent) {
		let toSocket = State.getSocket(dispatch.to);
		dispatch.event = `dispatch ${dispatch.event}`;

		if (toSocket) {
			toSocket.emit(dispatch.event, dispatch.data);
		}
	}

	function batch(dispatch: DispatchEvent) {
		let friendSockets = State.getFriendSockets(dispatch.from);
		dispatch.event = `dispatch ${dispatch.event}`;

		for (let socket of friendSockets) {
			if (socket) {
				socket.emit(dispatch.event, dispatch.data);
			}
		}
	}

	function statelessContact(socket: Socket): Contact {
		return {
			id: State.getId(socket),
			name: State.getName(socket)
		};
	}

	export function friendAdded(socket: Socket, id: string) {
		direct({
			from: socket,
			to: id,
			event: "friend added",
			data: statelessContact(socket)
		});
	}

	export function friendRemoved(socket: Socket, id: string) {
		direct({
			from: socket,
			to: id,
			event: "friend removed",
			data: statelessContact(socket)
		});
	}

	export function invitationAccepted(socket: Socket, id: string) {
		direct({
			from: socket,
			to: id,
			event: "friend accepted",
			data: statelessContact(socket)
		});
	}

	export function invitationRejected(socket: Socket, id: string) {
		direct({
			from: socket,
			to: id,
			event: "friend rejected",
			data: statelessContact(socket)
		});
	}

	export function statusChanged(socket: Socket, status: string) {
		let data: StatusChangeDispatch = {
			contact: statelessContact(socket),
			status: status
		};

		batch({
			from: socket,
			event: "status",
			data: data
		});
	}

	export function exchangeStatus(socket: Socket, id: string) {
		let socket2: Socket = State.getSocket(id);
		let id2: string = State.getId(socket);

		if (!socket2 || !id2) return;

		direct({
			from: socket,
			to: id,
			event: "status",
			data: <StatusChangeDispatch> {
				contact: statelessContact(socket),
				status: State.getStatus(socket)
			}
		});

		direct({
			from: socket2,
			to: id2,
			event: "status",
			data: <StatusChangeDispatch> {
				contact: statelessContact(socket2),
				status: State.getStatus(socket2)
			}
		});
	}

	export function keyRequested(socket: Socket, keyRequest: KeyRequest) {
		direct({
			from: socket,
			to: keyRequest.recipientId,
			event: "key request",
			data: <KeyRequest> {
				nonce: keyRequest.nonce,
				senderId: State.getId(socket)
			}
		});
	}

	export function keySent(socket: Socket, keyResponse: KeyResponse) {
		direct({
			from: socket,
			to: keyResponse.recipientId,
			event: "key response",
			data: <KeyResponse> {
				nonce: keyResponse.nonce,
				publicKey: keyResponse.publicKey,
				senderId: State.getId(socket)
			}
		});
	}

	export function messageSent(socket: Socket, secureMessage: SecureMessage) {
		direct({
			from: socket,
			to: secureMessage.message.recipientId,
			event: "message",
			data: <SecureMessage> {
				nonce: secureMessage.nonce,
				hash: secureMessage.hash,
				message: {
					text: secureMessage.message.text,
					senderId: State.getId(socket),
					timestamps: secureMessage.message.timestamps
				}
			}
		});
	}
}