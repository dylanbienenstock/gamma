import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../../../gamma/account/account.types';

@Component({
	selector: 'app-main-contacts-searchresults',
	templateUrl: './main-contacts-searchresults.component.html',
	styleUrls: ['./main-contacts-searchresults.component.scss']
})
export class MainContactsSearchresultsComponent implements OnInit {

	constructor() { }

	_searchResults: Contact[];
	noResults: boolean;

	@Input() localUser: any;
	@Input() waiting: boolean;

	@Input() set searchResults(value: Contact[]) {
		this.noResults = (!value || value.length == 0);
		this._searchResults = value.sort((a, b) => {
			if (a.isSelf) return -1;
			if (b.isSelf) return 1;

			if (a.isFriend) return -1;
			if (b.isFriend) return 1;

			return 0;
		});
	}

	get searchResults() {
		return this._searchResults;
	}

	ngOnInit() {

	}
}
