import { Component, OnInit, Input } from '@angular/core';
import { ContactList } from '../../../../gamma/account/account.types';

@Component({
	selector: 'app-main-contacts',
	templateUrl: './main-contacts.component.html',
	styleUrls: ['./main-contacts.component.scss']
})
export class MainContactsComponent implements OnInit {
	constructor() { }

	waiting: boolean;
	searching: boolean = false;
	searchResults: ContactList;

	ngOnInit() {
		
	}

	onSetSearching(searching: boolean) {
		this.waiting = true;
		this.searching = searching;
		this.searchResults = {
			contacts: []	
		};
	}

	onDisplaySearchResults(searchResults: ContactList) {
		this.searchResults = searchResults;
		this.waiting = false;
	}
}
