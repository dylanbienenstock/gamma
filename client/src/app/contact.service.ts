import { Injectable, EventEmitter } from '@angular/core';
import { Contact, ContactList } from '../../../gamma/account/account.types';
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

	// Key: id
	friendNames: { [key: string]: string } = { };

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

	changeSection(contact: Contact, section: string, suppressEvent?: boolean) {
		let previousSection = this.getSection(contact);
		let sectionDefinition = this.sectionDefinitions[section];

		contact.isSelf = sectionDefinition.includes("isSelf");
		contact.isFriend = sectionDefinition.includes("isFriend");
		contact.isConfirmed = sectionDefinition.includes("isConfirmed");
		contact.isRequesting = sectionDefinition.includes("isRequesting");
		
		if (!suppressEvent) {
			this.onChangeSection.next({
				contact: contact,
				from: previousSection,
				to: section
			});
		}
	}

	private createInvite(contact: Contact) {
		return {
			authCreds: this.localUserService.authCreds(),
			contact: contact
		};
	}

	getFriendName(id: string) {
		if (id == this.localUserService.id) {
			return this.localUserService.name;
		}

		return this.friendNames[id];
	}

	saveFriendName(contact: Contact) {
		this.friendNames[contact.id] = contact.name;
	}

	saveFriendNames(contactList: ContactList) {
		for (let contact of contactList.contacts) {
			this.saveFriendName(contact);
		}
	}

	addFriend(contact: Contact, suppressEvent?: boolean) {
		this.changeSection(contact, "pending", suppressEvent);
		this.socketService.addFriend(this.createInvite(contact));
		
		if (!suppressEvent) {
			this.onAddFriend.next(contact.id);
		}
	}

	removeFriend(contact: Contact, suppressEvent?: boolean) {
		this.changeSection(contact, "others", suppressEvent);	
		this.socketService.removeFriend(this.createInvite(contact));
		
		if (!suppressEvent) {
			this.onRemoveFriend.next(contact.id);
		}
	}

	acceptInvitation(contact: Contact, suppressEvent?: boolean) {
		this.changeSection(contact, "friends", suppressEvent);			
		this.socketService.acceptInvitation(this.createInvite(contact));
		this.saveFriendName(contact);		
		
		if (!suppressEvent) {
			this.onAcceptInvitation.next(contact.id);
		}
	}

	rejectInvitation(contact: Contact, suppressEvent?: boolean) {
		this.changeSection(contact, "others", suppressEvent);	
		this.socketService.rejectInvitation(this.createInvite(contact));
		
		if (!suppressEvent) {
			this.onRejectInvitation.next(contact.id);
		}
	}
}
