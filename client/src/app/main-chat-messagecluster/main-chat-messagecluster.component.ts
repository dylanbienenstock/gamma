import { Component, Input } from '@angular/core';
import { MessageCluster } from '../main-chat-message-container/main-chat-message-container.types';
import { ContactService } from '../contact.service';

@Component({
	selector: 'app-main-chat-messagecluster',
	templateUrl: './main-chat-messagecluster.component.html',
	styleUrls: ['./main-chat-messagecluster.component.scss']
})
export class MainChatMessageclusterComponent {
	constructor(private contactService: ContactService) { }

	@Input() messageCluster: MessageCluster;
}
