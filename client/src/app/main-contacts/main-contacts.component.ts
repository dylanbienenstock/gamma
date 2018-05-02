import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-main-contacts',
	templateUrl: './main-contacts.component.html',
	styleUrls: ['./main-contacts.component.scss']
})
export class MainContactsComponent implements OnInit {

	constructor() { }

	@Input() localUser: any;

	ngOnInit() {
		
	}
}
