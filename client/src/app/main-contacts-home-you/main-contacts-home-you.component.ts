import { Component, Input } from '@angular/core';
import { LocalUserService } from '../local-user.service';

@Component({
	selector: 'app-main-contacts-home-you',
	templateUrl: './main-contacts-home-you.component.html',
	styleUrls: ['./main-contacts-home-you.component.scss']
})
export class MainContactsHomeYouComponent {
	constructor(private localUserService: LocalUserService) { }
}
