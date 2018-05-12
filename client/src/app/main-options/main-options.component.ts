import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-main-options',
	templateUrl: './main-options.component.html',
	styleUrls: ['./main-options.component.scss']
})
export class MainOptionsComponent {

	constructor() { }

	@Input() shadowOpacity: number;
}
