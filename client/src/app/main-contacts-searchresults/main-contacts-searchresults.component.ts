import { Component, OnInit, Input } from '@angular/core';
import { ContactList } from '../../../../gamma/account/account.types';

@Component({
	selector: 'app-main-contacts-searchresults',
	templateUrl: './main-contacts-searchresults.component.html',
	styleUrls: ['./main-contacts-searchresults.component.scss']
})
export class MainContactsSearchresultsComponent implements OnInit {

	constructor() { }

	noResults: boolean;

	@Input() localUser: any;
	@Input() waiting: boolean;
	@Input() searchResults: ContactList;

	ngOnInit() {

	}
}
