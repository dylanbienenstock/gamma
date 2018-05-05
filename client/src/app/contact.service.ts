import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from '../../../gamma/account/account.types';
import { SectionChange } from './contact.service.types';
import { SocketService } from './socket.service';
import { LocalUserService } from './local-user.service';

@Injectable()
export class ContactService {
	constructor(private socketService: SocketService,
				private localUserService: LocalUserService) { }

	// The following events return a user id
	onAddFriend: EventEmitter<string> = new EventEmitter<string>();
	onRemoveFriend: EventEmitter<string> = new EventEmitter<string>();
	onAcceptInvitation: EventEmitter<string> = new EventEmitter<string>();
	onRejectInvitation: EventEmitter<string> = new EventEmitter<string>();
	onChangeSection: EventEmitter<SectionChange> = new EventEmitter<SectionChange>();

	// A contact belongs in a section if it
	// has ALL of the variables stated and
	// NONE of the variables not stated
	sectionDefinitions: { [key: string]: string[] } = {
		"you": [ "isSelf" ],
		"requests": [ "isRequesting" ],
		"pending": [ "isFriend" ],
		"friends": [ "isFriend", "isConfirmed" ],
		"others": []
	};

	// Returns true if the contact
	// is in the specified section
	// (If I didn't have to use it
	// so much in templats I would 
	// call it "isInSection")
	in(contact: Contact, section: string) {
		if (!contact || !this.sectionDefinitions[section]) return false;

		let sectionDefinition = this.sectionDefinitions[section];

		return contact.isSelf === sectionDefinition.includes("isSelf") &&
		contact.isFriend === sectionDefinition.includes("isFriend") &&
		contact.isConfirmed === sectionDefinition.includes("isConfirmed") &&
		contact.isRequesting === sectionDefinition.includes("isRequesting") 
	}

	getSection(contact: Contact) {
		for (let section in this.sectionDefinitions) {
			if (this.in(contact, section)) return section;
		}
	}

	changeSection(contact: Contact, section: string) {
		let previousSection = this.getSection(contact);
		let sectionDefinition = this.sectionDefinitions[section];

		contact.isSelf = sectionDefinition.includes("isSelf");
		contact.isFriend = sectionDefinition.includes("isFriend");
		contact.isConfirmed = sectionDefinition.includes("isConfirmed");
		contact.isRequesting = sectionDefinition.includes("isRequesting");
		
		this.onChangeSection.next({
			contact: contact,
			from: previousSection,
			to: section
		});
	}

	private createInvite(contact: Contact) {
		return {
			authCreds: this.localUserService.authCreds(),
			contact: contact
		};
	}

	addFriend(contact: Contact) {
		this.changeSection(contact, "pending");
		this.onAddFriend.next(contact.id);
		this.socketService.addFriend(this.createInvite(contact));
	}

	removeFriend(contact: Contact) {
		this.changeSection(contact, "others");	
		this.onRemoveFriend.next(contact.id);
		this.socketService.removeFriend(this.createInvite(contact));
	}

	acceptInvitation(contact: Contact) {
		this.changeSection(contact, "friends");			
		this.onAcceptInvitation.next(contact.id);
		this.socketService.acceptInvitation(this.createInvite(contact));
	}

	rejectInvitation(contact: Contact) {
		this.changeSection(contact, "others");	
		this.onRejectInvitation.next(contact.id);
		this.socketService.rejectInvitation(this.createInvite(contact));
	}
}
