import { Component, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Contact, ContactList } from '../../../../gamma/account/account.types';
import { ContactService } from '../contact.service';
import { SectionChange } from '../contact.service.types';
import { Subscription } from 'rxjs/Subscription';
import { SocketService } from '../socket.service';

@Component({
	selector: 'app-main-contacts-list',
	templateUrl: './main-contacts-list.component.html',
	styleUrls: ['./main-contacts-list.component.scss']
})

export class MainContactsListComponent implements AfterViewInit, OnDestroy {

	constructor(private contactService: ContactService,
				private socketService: SocketService) { }

	// $user-container-animation-duration in
	// main-contacts-user.component.scss
	animationDuration: number = 250;
	contacts: { [key: string]: Contact[] } = { };
	allContacts: Contact[] = [];
	subscriptions: Subscription[];

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

		this.allContacts = value.contacts;
	}

	private getContactById(id: string): Contact {
		return this.allContacts.find((contact) => {
			return contact && contact.id == id;
		});
	}

	ngAfterViewInit() {
		let onChangeSection = 
		this.contactService.onChangeSection
		.subscribe((data) => {
			this.onChangeSection(data);
		});

		let onFriendAdded = 
		this.socketService.onFriendAdded()
		.subscribe((statelessContact) => {
			let contact = this.getContactById(statelessContact.id) || statelessContact;
			this.contactService.changeSection(contact, "requests");
		});

		let onFriendRemoved = 
		this.socketService.onFriendRemoved()
		.subscribe((statelessContact) => {
			let contact = this.getContactById(statelessContact.id) || statelessContact;
			this.contactService.changeSection(contact, "others");
		});

		let onInvitationAccepted = 
		this.socketService.onInvitationAccepted()
		.subscribe((statelessContact) => {
			let contact = this.getContactById(statelessContact.id) || statelessContact;
			this.contactService.changeSection(contact, "friends");
		});

		let onInvitationRejected = 
		this.socketService.onInvitationRejected()
		.subscribe((statelessContact) => {
			let contact = this.getContactById(statelessContact.id) || statelessContact;
			this.contactService.changeSection(contact, "others");
		});

		this.subscriptions = [
			onChangeSection,
			onFriendAdded,
			onFriendRemoved,
			onInvitationAccepted,
			onInvitationRejected
		];
	}

	ngOnDestroy() {
		this.subscriptions.forEach(sub => sub.unsubscribe());
	}

	onChangeSection(sectionChange: SectionChange) {
		this.contacts[sectionChange.to].unshift(sectionChange.contact);

		let contactInAllContacts = this.allContacts
		.find((contact) => {
			return contact.id == sectionChange.contact.id;
		});

		if (!contactInAllContacts) {
			this.allContacts.unshift(sectionChange.contact);
		}
		
		if (sectionChange.from) {
			let contact = this.contacts[sectionChange.from]
			.find((contact) => {
				return contact && contact.id == sectionChange.contact.id;
			});

			if (contact) {
				let index = this.contacts[sectionChange.from].indexOf(contact);

				if (index != -1) {
					this.contacts[sectionChange.from].splice(index, 1);
				}
			}
		}
	}
}
