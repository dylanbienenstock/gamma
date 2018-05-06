import { Component, Input, AfterViewInit, EventEmitter, OnDestroy } from '@angular/core';
import { Contact } from '../../../../gamma/account/account.types';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-main-contacts-list-section',
	templateUrl: './main-contacts-list-section.component.html',
	styleUrls: ['./main-contacts-list-section.component.scss']
})

export class MainContactsListSectionComponent implements AfterViewInit, OnDestroy {

	constructor() { }

	@Input() animated: boolean;
	@Input() section: string;
	@Input() index: number;
	@Input() contacts: Contact[];
	@Input() hideContact: EventEmitter<string>;

	hidden: boolean = true;
	hideContactSubscription: Subscription;

	get animationDelay() {
		return this.animated ? 75 : 0;
	}

	ngAfterViewInit() {
		setTimeout(() => {
			this.hidden = false;
		}, this.animationDelay)

		this.hideContactSubscription = 
		this.hideContact.subscribe((id) => {
			if (this.contacts.length == 1 &&
				this.contacts[0].id == id) {

				this.hidden = true;
			}
		});
	}

	ngOnDestroy() {
		this.hideContactSubscription.unsubscribe();
	}
}
