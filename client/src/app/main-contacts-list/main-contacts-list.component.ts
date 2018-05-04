import { Component, Input } from '@angular/core';
import { Contact, ContactList } from '../../../../gamma/account/account.types';

@Component({
	selector: 'app-main-contacts-list',
	templateUrl: './main-contacts-list.component.html',
	styleUrls: ['./main-contacts-list.component.scss']
})

export class MainContactsListComponent {

	constructor() { }

	you: Contact[] = []; // It's only an array because I'm lazy.
	requests: Contact[] = []; // Received invitations
	invitations: Contact[] = []; // Send invitatons
	friends: Contact[] = []; // Confirmed friends
	others: Contact[] = []; // Confirmed friends

	@Input() localUser: any;
	@Input() sections: {
		you: boolean;
		requests: boolean;
		invitations: boolean;
		friends: boolean;
		others: boolean;
		all: boolean;
	};

	@Input() set contacts(value: ContactList) {
		if (this.sections.you || this.sections.all) {
			this.you = value.contacts.filter(value =>
				value.isSelf &&
				!value.isFriend &&
				!value.isConfirmed &&
				!value.isRequesting
			) || [];
		}

		if (this.sections.requests || this.sections.all) {
			this.requests = value.contacts.filter(value =>
				!value.isSelf &&
				!value.isFriend &&
				!value.isConfirmed &&
				value.isRequesting
			) || [];
		}

		if (this.sections.invitations || this.sections.all) {
			this.invitations = value.contacts.filter(value =>
				!value.isSelf &&
				value.isFriend &&
				!value.isConfirmed &&
				!value.isRequesting
			) || [];
		}

		if (this.sections.friends || this.sections.all) {
			this.friends = value.contacts.filter(value =>
				!value.isSelf &&
				value.isFriend &&
				value.isConfirmed &&
				!value.isRequesting
			) || [];
		}

		if (this.sections.others || this.sections.all) {
			this.others = value.contacts.filter(value =>
				!value.isSelf &&
				!value.isFriend &&
				!value.isConfirmed &&
				!value.isRequesting
			) || [];
		}
	}

	onAccepted(index: number) {
		// $user-container-animation-duration in
		// main-contacts-user.component.scss
		let animationDuration: number = 250;

		setTimeout(() => {
			this.requests[index].isFriend = true;
			this.requests[index].isConfirmed = true;
			this.requests[index].isRequesting = false;

			this.friends.unshift(this.requests[index]);
			this.requests.splice(index);
		}, animationDuration);
	}
}
