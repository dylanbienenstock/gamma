import { Injectable, EventEmitter } from '@angular/core';
import { Conversation } from './chat.service.types';
import { Message } from '../../../server/server.types';
import { SocketService } from './socket.service';
import { Subscription } from 'rxjs/Subscription';
import { Contact } from '../../../gamma/account/account.types';
import { LocalUserService } from './local-user.service';

@Injectable()
export class ChatService {

	constructor(private socketService: SocketService,
				private localUserService: LocalUserService) {
		this.setupSubscriptions();
	}

	onNewConversation: EventEmitter<Conversation> = new EventEmitter<Conversation>();
	onMessageReceived: EventEmitter<Message> = new EventEmitter<Message>();

	conversations: Conversation[] = [];

	setupSubscriptions() {
		this.socketService.onMessageReceived()
		.subscribe((message) => {
			this._onMessageReceived(message);
		});
	}

	_onMessageReceived(message: Message) {
		console.log("_onMessageReceived")

		let conversation = this.conversations
		.find((conversation) => {
			return conversation.withId == message.senderId;
		});

		if (!conversation) {
			console.log("!conversation")
			
			conversation = this._openNewConversation(message, false);
		}
		
		conversation.messages.push(message);
		this.onMessageReceived.next(message);

		console.log("message:", message)
	}

	_openNewConversation(firstMessage: Message, startedByLocalUser: boolean) {
		let withId = startedByLocalUser ?
			this.localUserService.id : firstMessage.senderId;

		let conversation: Conversation = {
			withId: withId,
			messages: [],
			open: true, // Open it by default
			startedByLocalUser: startedByLocalUser
		};

		this.conversations.push(conversation);
		this.onNewConversation.next(conversation);

		return conversation;
	}

	openNewConversation(withId: string) {
		let conversation = {
			withId: withId,
			messages: [],
			open: true, // Open it by default
			startedByLocalUser: true
		};

		this.conversations.push(conversation);
		this.onNewConversation.next(conversation);
	}

	closeConversation(conversation: Conversation) {
		conversation.open = false;
	}

	sendMessage(text: string, toId: string) {
		this.socketService.sendMessage({
			text: text,
			// senderId is set by the server
			recipientId: toId
		});
	}
}
