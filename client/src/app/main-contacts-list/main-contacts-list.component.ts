import { Component, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Contact, ContactList } from '../../../../gamma/account/account.types';
import { ContactService } from '../contact.service';
import { SectionChange } from '../contact.service.types';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-main-contacts-list',
	templateUrl: './main-contacts-list.component.html',
	styleUrls: ['./main-contacts-list.component.scss']
})

export class MainContactsListComponent implements AfterViewInit, OnDestroy {

	constructor(private contactService: ContactService) { }

	// $user-container-animation-duration in
	// main-contacts-user.component.scss
	animationDuration: number = 250;
	contacts: { [key: string]: Contact[] } = { };
	onChangeSectionSubscription: Subscription;

	@Input() localUser: any;
	@Input() sections = {
		you: false,
		requests: false, // Received invitations
		pending: false, // Sent invitatons
		friends: false, // Confirmed friends
		others: false // Strangers
	};

	@Input() set contactList(value: ContactList) {
		for (let section in this.sections) {
			if (this.sections[section]) {
				this.contacts[section] = value.contacts.filter(contact =>
					this.contactService.in(contact, section)
				) || [];
			} else {
				this.contacts[section] = [];
			}
		}
	}

	ngAfterViewInit() {
		this.onChangeSectionSubscription = 
		this.contactService.onChangeSection
		.subscribe((data) => {
			this.onChangeSection(data);
		});
	}

	ngOnDestroy() {
		this.onChangeSectionSubscription.unsubscribe();
	}

	onChangeSection(sectionChange: SectionChange) {
		let contact = this.contacts[sectionChange.from]
		.find((contact) => {
			// if (contact) {
				return contact.id == sectionChange.contact.id;
			// }
		});

		// if (!contact) return;

		let index = this.contacts[sectionChange.from].indexOf(contact);

		// if (index == -1) return;

		if (this.sections[sectionChange.to]) {
			this.contacts[sectionChange.to].unshift(sectionChange.contact);
		}
		
		this.contacts[sectionChange.from].splice(index, 1);
	}
}
