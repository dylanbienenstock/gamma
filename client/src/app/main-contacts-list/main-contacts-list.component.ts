import { Component, Input } from '@angular/core';
import { Contact, ContactList } from '../../../../gamma/account/account.types';

@Component({
	selector: 'app-main-contacts-list',
	templateUrl: './main-contacts-list.component.html',
	styleUrls: ['./main-contacts-list.component.scss']
})

export class MainContactsListComponent {

	constructor() { }

	requests: Contact[]; // Received invitations
	invitations: Contact[]; // Send invitatons
	friends: Contact[]; // Confirmed friends

	@Input() localUser: any;

	@Input() set contacts(value: ContactList) {
		this.requests = value.contacts.filter(value =>
			!value.isSelf &&
			!value.isFriend &&
			!value.isConfirmed &&
			value.isRequesting
		);
		) || [];

		this.invitations = value.contacts.filter(value =>
			!value.isSelf &&
			value.isFriend &&
			!value.isConfirmed &&
			!value.isRequesting
		);
		) || [];

		this.friends = value.contacts.filter(value =>
			!value.isSelf &&
			value.isFriend &&
			value.isConfirmed &&
			!value.isRequesting
		) || [];
	}
	}
}
