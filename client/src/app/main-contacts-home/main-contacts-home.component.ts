import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-main-contacts-home',
	templateUrl: './main-contacts-home.component.html',
	styleUrls: ['./main-contacts-home.component.scss']
})
export class MainContactsHomeComponent implements OnInit {

	constructor() { }

	@Input() localUser: any;	

	ngOnInit() {

	}
}
