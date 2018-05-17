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
		this.chatService.onMessage.subscribe((message: Message) => {
			this.onMessage(message);
		});

		this.animateMessages();
	}

	@Input() sidebars;
	@Output() toggleSidebar: EventEmitter<string> = new EventEmitter<string>();
	@Output() hideSidebars: EventEmitter<null> = new EventEmitter<null>();

	@ViewChild("scrollbar") scrollbarRef: ScrollbarComponent;

	currentConversation: Conversation;
	autoScroll: boolean = true;
	autoScrollInProgress: boolean = false;
	messagesToAnimate: Message[] = [];

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
		if (!this.scrollbarRef || !this.scrollbarRef.view) return;

		if (this.autoScrollInProgress) {
			this.autoScrollInProgress = false;
			
			return;
		}

		let distanceToBottom = this.scrollbarRef.view.scrollHeight;
		distanceToBottom -= this.scrollbarRef.view.scrollTop;
		distanceToBottom -= this.scrollbarRef.view.clientHeight;

		this.autoScroll = (distanceToBottom <= 128);
	}

	onMessage(message: Message) {
		let shouldAnimateMessage =
			this.currentConversation && // Not the first message received this session
			this.autoScroll && 			// Message is within viewport
			this.scrollbarRef &&		// Scrollbar initialized
			this.scrollbarRef.view &&	// Scrollbar view initialized
										// v Message is in current conversation
			(message.recipientId == this.currentConversation.withId ||
			message.senderId == this.currentConversation.withId);

		if (shouldAnimateMessage) {
			message.visible = false;
			message.animated = true;			
			
			this.messagesToAnimate.push(message);

			setTimeout(() => {
				let scrollMax: number = this.scrollbarRef.view.scrollHeight;

				this.scrollbarRef.view.scrollTop = scrollMax;
				this.autoScrollInProgress = true;

				message.visible = true;
				message.animationProgress = 0;
				message.animationStartTime = Date.now();
			}, 0);
		} else {
			message.visible = true;
			message.animated = false;
			message.animationProgress = 1;
		}
	}

	// http://www.gizma.com/easing/#quint2
	easeOutQuint(t, b, c, d) {
		t /= d;
		t--;

		return c * (t * t * t * t * t + 1) + b;
	};

	animateMessages() {
		this.messagesToAnimate = 
		this.messagesToAnimate
		.filter((message) => {
			if (!message.visible) return true;

			message.animationProgress =
				this.easeOutQuint(Date.now() - message.animationStartTime, 0, 1, 600);

			if (message.animationProgress >= 0.99) {
				message.animated = false;
				message.animationProgress = 1;
			}

			return message.animated;
		});

		requestAnimationFrame(this.animateMessages.bind(this));
	}
}
