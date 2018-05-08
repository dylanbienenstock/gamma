import { Component, Input } from '@angular/core';
import { Conversation } from '../chat.service.types';
import { ChatService } from '../chat.service';
import { Message } from '../../../../server/server.types';
import { ContactService } from '../contact.service';

@Component({
	selector: 'app-main-chat-message-container',
	templateUrl: './main-chat-message-container.component.html',
	styleUrls: ['./main-chat-message-container.component.scss']
})

export class MainChatMessageContainerComponent {

	constructor(private chatService: ChatService,
				private contactService: ContactService) { }

	@Input() conversation: Conversation;
}
