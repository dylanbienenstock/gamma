import { Component, Input, AfterViewInit, EventEmitter, OnDestroy } from '@angular/core';
import { Contact } from '../../../../gamma/account/account.types';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-main-contacts-list-banner',
	templateUrl: './main-contacts-list-banner.component.html',
	styleUrls: ['./main-contacts-list-banner.component.scss']
})

export class MainContactsListBannerComponent implements AfterViewInit, OnDestroy {

	constructor() { }

	@Input() text: string;
	@Input() index: number;
	@Input() contacts: Contact[];
	@Input() hideContact: EventEmitter<string>;

	hidden: boolean = true;
	animationDelay: number = 75;
	hideContactSubscription: Subscription;

	ngAfterViewInit() {
		setTimeout(() => {
			this.hidden = false;
		}, (this.index + 1) * this.animationDelay)

		this.hideContactSubscription = 
		this.hideContact.subscribe((id) => {
			if (this.contacts.length == 1) {
				this.hidden = (this.contacts[0].id == id);
			}
		});
	}

	ngOnDestroy() {
		this.hideContactSubscription.unsubscribe();
	}
}
