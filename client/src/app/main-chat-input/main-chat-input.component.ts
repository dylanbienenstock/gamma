import { Component, Input } from '@angular/core';
import { ChatService } from '../chat.service';
import { Conversation } from '../chat.service.types';

@Component({
	selector: 'app-main-chat-input',
	templateUrl: './main-chat-input.component.html',
	styleUrls: ['./main-chat-input.component.scss']
})
export class MainChatInputComponent {

	constructor(private chatService: ChatService) { }

	@Input() conversation: Conversation;	
	input: string = "";

	sendMessage(e) {
		e.preventDefault();
		this.chatService.sendMessage(this.input, this.conversation.withId);

		this.input = "";
	}
}
