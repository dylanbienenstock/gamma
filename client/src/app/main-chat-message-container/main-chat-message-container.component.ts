import { Component, Input } from '@angular/core';
import { Conversation } from '../chat.service.types';
import { ChatService } from '../chat.service';
import { ContactService } from '../contact.service';
import { MessageCluster } from './main-chat-message-container.types';
import { LocalUserService } from '../local-user.service';
import { Subscription } from 'rxjs/Subscription';
import { Message } from '../../../../gamma/gamma.types';

@Component({
	selector: 'app-main-chat-message-container',
	templateUrl: './main-chat-message-container.component.html',
	styleUrls: ['./main-chat-message-container.component.scss']
})

export class MainChatMessageContainerComponent {
	constructor(private chatService: ChatService,
				private contactService: ContactService,
				private localUserService: LocalUserService) { }


	@Input() set messages(value: Message[]) {
		this.buildMessageClusters(value);
	}

	messageClusters: MessageCluster[] = [];

	buildMessageClusters(messages: Message[]) {
		let messageClusters: MessageCluster[] = [];
		let builtCluster: MessageCluster;

		for (let message of messages) {
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
