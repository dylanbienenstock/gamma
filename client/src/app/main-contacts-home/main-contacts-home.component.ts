import { Component, OnInit, Input } from '@angular/core';
import { ContactList } from '../../../../gamma/account/account.types';
import { SocketService } from '../socket.service';
import { LocalUserService } from '../local-user.service';
import { ContactService } from '../contact.service';

@Component({
	selector: 'app-main-contacts-home',
	templateUrl: './main-contacts-home.component.html',
	styleUrls: ['./main-contacts-home.component.scss']
})
export class MainContactsHomeComponent implements OnInit {

	constructor(private socketService: SocketService,
				private localUserService: LocalUserService,
				private contactService: ContactService) { }

	contactList: ContactList = {
		contacts: []
	};

	ngOnInit() {
		let observable = this.socketService
		.getContactList(this.localUserService.authCreds());

		let subscription = observable
		.subscribe((contactList: ContactList) => {
			subscription.unsubscribe();

			this.contactList = contactList;
			this.contactService.saveFriendNames(contactList);
		});
	}
}
