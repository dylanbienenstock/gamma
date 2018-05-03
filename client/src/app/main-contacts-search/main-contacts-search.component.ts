import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SearchQuery } from '../../../../gamma/account/types';
import { SocketService } from '../socket.service';

@Component({
	selector: 'app-main-contacts-search',
	templateUrl: './main-contacts-search.component.html',
	styleUrls: ['./main-contacts-search.component.scss']
})
export class MainContactsSearchComponent implements OnInit {

	constructor(private socketService: SocketService) { }

	@Input() localUser: any;

	queryText: string;
	searchTimeout: any;
	searchSubscription: Subscription;

	ngOnInit() {

	}

	onNgModelChange() {
		clearTimeout(this.searchTimeout);

		this.searchTimeout = setTimeout(() => {
			this.search({
				auth: this.localUser.authCreds(),
				text: this.queryText
			});
		}, 250);
	}

	search(query: SearchQuery) {
		console.log(query);

		if (this.searchSubscription) {
			this.searchSubscription.unsubscribe();
		}

		let observable = this.socketService.search(query);
		this.searchSubscription = observable.subscribe((data) => {
			console.log(data);
			this.searchSubscription.unsubscribe();
		});
	}
}
