import { Component, Input } from '@angular/core';
import { ContactList } from '../../../../gamma/account/account.types';

@Component({
	selector: 'app-main-contacts-searchresults',
	templateUrl: './main-contacts-searchresults.component.html',
	styleUrls: ['./main-contacts-searchresults.component.scss']
})
export class MainContactsSearchresultsComponent {
	constructor() { }

	noResults: boolean;

	@Input() waiting: boolean;
	@Input() searchResults: ContactList;
}
