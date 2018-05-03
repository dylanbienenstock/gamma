import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-main-contacts',
	templateUrl: './main-contacts.component.html',
	styleUrls: ['./main-contacts.component.scss']
})
export class MainContactsComponent implements OnInit {

	constructor() { }

	@Input() localUser: any;

	waiting: boolean;
	searching: boolean = false;
	searchResults: any[];

	ngOnInit() {
		
	}

	onSetSearching(searching: boolean) {
		this.waiting = true;
		this.searching = searching;
		this.searchResults = [];
	}

	onDisplaySearchResults(searchResults: any[]) {
		this.searchResults = searchResults;
		this.waiting = false;
	}
}
