import { State } from "./server.state";
import { Socket } from "socket.io";
import { DispatchEvent } from "./server.types";

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

	export function friendAdded(socket: Socket, id: string) {
		direct({
			from: socket,
			to: id,
			event: "friend added",
			data: State.getId(socket)
		});
	}

	export function friendRemoved(socket: Socket, id: string) {
		direct({
			from: socket,
			to: id,
			event: "friend removed",
			data: State.getId(socket)
		});
	}

	export function invitationAccepted(socket: Socket, id: string) {
		direct({
			from: socket,
			to: id,
			event: "friend accepted",
			data: State.getId(socket)
		});
	}

	export function invitationRejected(socket: Socket, id: string) {
		direct({
			from: socket,
			to: id,
			event: "friend rejected",
			data: State.getId(socket)
		});
	}
}