import { Injectable, EventEmitter } from '@angular/core';
import { Conversation } from './chat.service.types';
import { SocketService } from './socket.service';
import { Subscription } from 'rxjs/Subscription';
import { Contact } from '../../../gamma/account/account.types';
import { LocalUserService } from './local-user.service';
import { Message } from '../../../gamma/gamma.types';

@Injectable()
export class ChatService {

	constructor(private socketService: SocketService,
				private localUserService: LocalUserService) {
		this.setupSubscriptions();
	}

	onNewConversation: EventEmitter<Conversation> = new EventEmitter<Conversation>();
	onMessage: EventEmitter<Message> = new EventEmitter<Message>();

	conversations: Conversation[] = [];

	private addMessageToConversation(conversation: Conversation, message: Message) {
		conversation.messages =
			Object.assign([], conversation.messages.concat(message));
	}

	setupSubscriptions() {
		this.socketService.onMessageReceived()
		.subscribe((message) => {
			this._onMessageReceived(message);
		});
	}

	_onMessageReceived(message: Message) {
		let conversation = this.conversations
		.find((conversation) => {
			return conversation.withId == message.senderId;
		});

		if (!conversation) {
			conversation = this._openNewConversation(message, false);
		}
		
		this.addMessageToConversation(conversation, message);
		this.onMessage.next(message);
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

	sendMessage(text: string, conversation: Conversation) {
		text = text.trim();
		
		if (text.length == 0) return;

		let message = <Message> {
			text: text,
			senderId: this.localUserService.id,
			recipientId: conversation.withId
		};

		this.socketService.sendMessage(message);

		this.onMessage.next(message);
		this.addMessageToConversation(conversation, message);
	}
}
