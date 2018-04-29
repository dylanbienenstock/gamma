import { Component } from '@angular/core';

@Component({
	selector: 'app-main-chat-tabs',
	templateUrl: './main-chat-tabs.component.html',
	styleUrls: ['./main-chat-tabs.component.scss']
})
export class MainChatTabsComponent {

	constructor() { }

	public tabs: string[] = [
		"Dylan Bienenstock", "Dylan Bienenstock", 
		"Some else", "Some else", 
		"Another person", "Another person"
	];
}
