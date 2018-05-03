import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-main-contacts-searchresults',
	templateUrl: './main-contacts-searchresults.component.html',
	styleUrls: ['./main-contacts-searchresults.component.scss']
})
export class MainContactsSearchresultsComponent implements OnInit {

	constructor() { }

	_searchResults: any[];
	noResults: boolean;

	@Input() waiting: boolean

	@Input() set searchResults(value: any[]) {
		this._searchResults = value;
		this.noResults = (!value || value.length == 0);
	}

	get searchResults() {
		return this._searchResults;
	}

	ngOnInit() {

	}
}
