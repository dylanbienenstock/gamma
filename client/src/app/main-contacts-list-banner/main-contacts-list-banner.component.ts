import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-main-contacts-list-banner',
	templateUrl: './main-contacts-list-banner.component.html',
	styleUrls: ['./main-contacts-list-banner.component.scss']
})

export class MainContactsListBannerComponent implements AfterViewInit {

	constructor() { }

	@Input() text: string;
	@Input() index: number;

	hidden: boolean = true;
	animationDelay: number = 75;	

	ngAfterViewInit() {
		setTimeout(() => {
			this.hidden = false;
		}, (this.index + 1) * this.animationDelay)
	}
}
