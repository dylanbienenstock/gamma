import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SearchQuery, SearchResult, SearchResponse } from '../../../../gamma/account/account.types';
import { SocketService } from '../socket.service';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-main-contacts-search',
	templateUrl: './main-contacts-search.component.html',
	styleUrls: ['./main-contacts-search.component.scss']
})
export class MainContactsSearchComponent implements OnInit {

	constructor(private socketService: SocketService) { }

	@Input() localUser: any;
	@Output() setSearching: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output() displaySearchResults: EventEmitter<any[]> = new EventEmitter<any[]>();

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
				authCreds: this.localUser.authCreds(),
				text: this.queryText
			});
		}, this.searchDelay);
	}

	search(query: SearchQuery) {
		if (this.searchSubscription) {
			this.searchSubscription.unsubscribe();
		}

		let observable: Observable<SearchResponse> = this.socketService.search(query);
		this.searchSubscription = observable.subscribe((data: SearchResponse) => {
			this.displaySearchResults.emit(data.results);
			this.searchSubscription.unsubscribe();
		});
	}
}
