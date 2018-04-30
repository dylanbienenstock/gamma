import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-main-chat',
	templateUrl: './main-chat.component.html',
	styleUrls: ['./main-chat.component.scss']
})
export class MainChatComponent  {
	constructor() { }

	@Input() sidebars;
	@Output() toggleSidebar: EventEmitter<string> = new EventEmitter<string>();

	onToggleContacts() {
		this.toggleSidebar.emit("contacts");
	}

	onToggleOptions() {
		this.toggleSidebar.emit("options");
	}
}
