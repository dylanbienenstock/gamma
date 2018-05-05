import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Contact, FriendInviteRequest } from '../../../../gamma/account/account.types';
import { SocketService } from '../socket.service';
import { ContactService } from '../contact.service';
import { LocalUserService } from '../local-user.service';

@Component({
	selector: 'app-main-contacts-user',
	templateUrl: './main-contacts-user.component.html',
	styleUrls: ['./main-contacts-user.component.scss']
})
export class MainContactsUserComponent implements AfterViewInit {

	constructor(private socketService: SocketService,
				private contactService: ContactService,
				private localUserService: LocalUserService) { }

	@Input() contact: Contact;
	@Input() section: string;
	@Input() index: number;
	@Input() showBanner: boolean;
	@Input() bannerText: string;

	hidden: boolean = true;
	animationDelay: number = 75;

	ngAfterViewInit() {
		setTimeout(() => {
			this.hidden = false;
		}, (this.index + 1) * this.animationDelay)
	}

	toggleInvitation() {
		if (this.hidden) return;
		this.hidden = true;

		let invite: FriendInviteRequest = {
			authCreds: this.localUserService.authCreds(),
			contact: this.contact
		}

		setTimeout(() => {
			if (this.contactService.in(this.contact, "others")) {
				this.contactService.addFriend(this.contact);
				this.socketService.addFriend(invite);
			}
			else if (this.contactService.in(this.contact, "pending")) {
				this.contactService.removeFriend(this.contact);
				this.socketService.removeFriend(invite);
			}
		}, this.animationDelay);
	}

	acceptInvitation() {
		if (this.hidden) return;
		this.hidden = true;	

		this.contactService.acceptInvitation(this.contact);

		this.socketService.acceptInvitation({ 
			authCreds: this.localUserService.authCreds(),
			contact: this.contact
		});
	}

	rejectInvitation() {
		if (this.hidden) return;
		this.hidden = true;

		this.contactService.rejectInvitation(this.contact);		

		this.socketService.rejectInvitation({
			authCreds: this.localUserService.authCreds(),
			contact: this.contact
		});
	}
}
