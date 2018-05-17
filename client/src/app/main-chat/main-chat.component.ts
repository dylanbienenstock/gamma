import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { SocketService } from '../socket.service';
import { Subscription } from 'rxjs/Subscription';
import { Conversation } from '../chat.service.types';
import { ChatService } from '../chat.service';
import { ScrollbarComponent } from 'ngx-scrollbar';
import { Message } from '../../../../gamma/gamma.types';
import { LocalUserService } from '../local-user.service';

@Component({
	selector: 'app-main-chat',
	templateUrl: './main-chat.component.html',
	styleUrls: ['./main-chat.component.scss']
})
export class MainChatComponent {
	constructor(private chatService: ChatService) {
		this.onMessageSubscription =
		this.chatService.onMessage
		.subscribe((message: Message) => {
			if (!this.autoScroll ||
				!this.scrollbarRef ||
				!this.scrollbarRef.view) return;
			
			let messageInCurrentConvo = 
				message.recipientId == this.currentConversation.withId ||
				message.senderId == this.currentConversation.withId;

			if (messageInCurrentConvo) {
				setTimeout(() => {
					let scrollMax: number = this.scrollbarRef.view.scrollHeight;
					
					this.scrollbarRef.view.scrollTop = scrollMax;
					this.autoScrollInProgress = true;
				}, 0);
			}
		});
	}

	@Input() sidebars;
	@Output() toggleSidebar: EventEmitter<string> = new EventEmitter<string>();
	@Output() hideSidebars: EventEmitter<null> = new EventEmitter<null>();

	@ViewChild("scrollbar") scrollbarRef: ScrollbarComponent;

	onMessageSubscription: Subscription;
	currentConversation: Conversation;
	autoScroll: boolean = true;
	autoScrollInProgress: boolean = false;
	autoScrollTimeout: any;

	onToggleContacts() {
		this.toggleSidebar.emit("contacts");
	}

	onToggleOptions() {
		this.toggleSidebar.emit("options");
	}

	onTabClicked(conversation: Conversation) {
		this.currentConversation = conversation;
	}

	onHideSidebars() {
		this.hideSidebars.emit(null);
	}

	onScrollState(e) {
		if (!this.scrollbarRef.view) return;

		if (this.autoScrollInProgress) {
			this.autoScrollInProgress = false;
			
			return;
		}

		let distanceToBottom = this.scrollbarRef.view.scrollHeight;
		distanceToBottom -= this.scrollbarRef.view.scrollTop;
		distanceToBottom -= this.scrollbarRef.view.clientHeight;

		this.autoScroll = (distanceToBottom <= 128);
	}
}
