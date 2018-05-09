import { Component, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { Conversation } from '../chat.service.types';
import { ChatService } from '../chat.service';
import { Message } from '../../../../server/server.types';
import { ContactService } from '../contact.service';
import { MessageCluster } from './main-chat-message-container.types';
import { LocalUserService } from '../local-user.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-main-chat-message-container',
	templateUrl: './main-chat-message-container.component.html',
	styleUrls: ['./main-chat-message-container.component.scss']
})

export class MainChatMessageContainerComponent implements AfterViewInit, OnDestroy {
	constructor(private chatService: ChatService,
				private contactService: ContactService,
				private localUserService: LocalUserService) { }


	@Input() conversation: Conversation;

	messageClusters: MessageCluster[] = [];
	onMessageReceivedSubscription: Subscription;

	ngAfterViewInit() {
		this.onMessageReceivedSubscription = 
		this.chatService.onMessage.subscribe((message) => {
			this.buildMessageCluster();
		});
	}

	ngOnDestroy() {
		this.onMessageReceivedSubscription.unsubscribe();
	}

	buildMessageCluster() {
		let messageClusters: MessageCluster[] = [];
		let builtCluster: MessageCluster;

		for (let message of this.conversation.messages) {
			if (!builtCluster || message.senderId != builtCluster.senderId) {
				if (builtCluster) {
					messageClusters.push(builtCluster);
				}

				builtCluster = {
					messages: [],
					senderId: message.senderId,
					sentByLocalUser: (message.senderId == this.localUserService.id)
				};
			}

			builtCluster.messages.push(message);
		}

		if (builtCluster) {
			messageClusters.push(builtCluster);
		}
		
		this.messageClusters = messageClusters;
	}
}
