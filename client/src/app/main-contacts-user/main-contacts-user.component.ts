import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Contact, FriendInviteRequest } from '../../../../gamma/account/account.types';
import { SocketService } from '../socket.service';

@Component({
	selector: 'app-main-contacts-user',
	templateUrl: './main-contacts-user.component.html',
	styleUrls: ['./main-contacts-user.component.scss']
})
export class MainContactsUserComponent implements AfterViewInit {

	constructor(private socketService: SocketService) { }

	@Input() localUser: any;
	@Input() data: Contact;
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
		this.data.isFriend = !this.data.isFriend;

		let invite: FriendInviteRequest = {
			authCreds: this.localUser.authCreds(),
			id: this.data.id
		}

		if (this.data.isFriend) {
			this.socketService.addFriend(invite);
		} else {
			this.socketService.removeFriend(invite);			
		}
	}
}
