import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { SearchResult } from '../../../../gamma/account/account.types';

@Component({
	selector: 'app-main-contacts-user',
	templateUrl: './main-contacts-user.component.html',
	styleUrls: ['./main-contacts-user.component.scss']
})
export class MainContactsUserComponent implements AfterViewInit {
	constructor() { }

	@Input() localUser: any;
	@Input() data: SearchResult;
	@Input() index: number;

	invited: boolean = false;
	hidden: boolean = true;
	animationDelay: number = 75;

	ngAfterViewInit() {
		setTimeout(() => {
			this.hidden = false;
		}, (this.index + 1) * this.animationDelay)
	}

	toggleInvitation() {
		this.invited = !this.invited;
	}
}
