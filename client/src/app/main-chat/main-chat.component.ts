import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SocketService } from '../socket.service';
import { Subscription } from 'rxjs/Subscription';
import { Conversation } from '../chat.service.types';
import { ChatService } from '../chat.service';

@Component({
	selector: 'app-main-chat',
	templateUrl: './main-chat.component.html',
	styleUrls: ['./main-chat.component.scss']
})
export class MainChatComponent {
	constructor(private chatService: ChatService) { }

	@Input() sidebars;
	@Output() toggleSidebar: EventEmitter<string> = new EventEmitter<string>();

	currentConversation: Conversation;

	onToggleContacts() {
		this.toggleSidebar.emit("contacts");
	}

	onToggleOptions() {
		this.toggleSidebar.emit("options");
	}

	onTabClicked(conversation: Conversation) {
		this.currentConversation = conversation;
	}
}
