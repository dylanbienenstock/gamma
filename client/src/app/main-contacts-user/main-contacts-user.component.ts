import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Contact, FriendInviteRequest } from '../../../../gamma/account/account.types';
import { SocketService } from '../socket.service';
import { ContactService } from '../contact.service';
import { LocalUserService } from '../local-user.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-main-contacts-user',
	templateUrl: './main-contacts-user.component.html',
	styleUrls: ['./main-contacts-user.component.scss']
})
export class MainContactsUserComponent implements AfterViewInit, OnDestroy {

	constructor(private socketService: SocketService,
				private contactService: ContactService,
				private localUserService: LocalUserService) { }

	@Input() contact: Contact;
	@Input() animated: boolean;
	@Input() hideContact: EventEmitter<string>;
	@Input() section: string;
	@Input() index: number;
	@Input() showBanner: boolean;
	@Input() bannerText: string;

	hidden: boolean = true;
	hideContactSubscription: Subscription;

	get animationDelay() {
		return this.animated ? 75 : 0;
	}


	ngAfterViewInit() {
		setTimeout(() => {
			this.hidden = false;
		}, (this.index + 1) * this.animationDelay)

		this.hideContactSubscription = 
		this.hideContact.subscribe((id) => {
			if (this.contact.id == id) {
				this.hidden = true;
			}
		});
	}

	ngOnDestroy() {
		this.hideContactSubscription.unsubscribe();
	}

	toggleInvitation() {
		if (this.hidden) return;

		setTimeout(() => {
			if (this.contactService.in(this.contact, "others")) {
				this.contactService.addFriend(this.contact);
			}
			else if (this.contactService.in(this.contact, "pending")) {
				this.contactService.removeFriend(this.contact);
			}
		}, this.animationDelay);
	}

	acceptInvitation() {
		if (this.hidden) return;

		this.contactService.acceptInvitation(this.contact);
	}

	rejectInvitation() {
		if (this.hidden) return;

		this.contactService.rejectInvitation(this.contact);
	}
}
