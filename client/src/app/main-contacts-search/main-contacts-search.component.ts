import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SearchQuery, Contact, ContactList } from '../../../../gamma/account/account.types';
import { SocketService } from '../socket.service';
import { Observable } from 'rxjs/Observable';
import { LocalUserService } from '../local-user.service';

@Component({
	selector: 'app-main-contacts-search',
	templateUrl: './main-contacts-search.component.html',
	styleUrls: ['./main-contacts-search.component.scss']
})
export class MainContactsSearchComponent implements OnInit {

	constructor(private socketService: SocketService,
				private localUserService: LocalUserService) { }

	@Output() setSearching: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output() displaySearchResults: EventEmitter<ContactList> = new EventEmitter<ContactList>();

	queryText: string;
	searchTimeout: any;
	searchDelay: number = 350;
	searchSubscription: Subscription;

	ngOnInit() {

	}

	onNgModelChange() {
		let searching: boolean = this.queryText.length > 0;
		this.setSearching.emit(searching);

		clearTimeout(this.searchTimeout);

		this.searchTimeout = setTimeout(() => {
			this.search({
				authCreds: this.localUserService.authCreds(),
				text: this.queryText
			});
		}, this.searchDelay);
	}

	search(query: SearchQuery) {
		if (this.searchSubscription) {
			this.searchSubscription.unsubscribe();
		}

		let observable: Observable<ContactList> = this.socketService.search(query);
		this.searchSubscription = observable.subscribe((data: ContactList) => {
			this.displaySearchResults.emit(data);
			this.searchSubscription.unsubscribe();
		});
	}
}
