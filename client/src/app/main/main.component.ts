import { Component } from '@angular/core';
import { AuthCreds } from '../../../../gamma/account/account.types';
import { LocalUserService } from '../local-user.service';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})

export class MainComponent {

	constructor(private localUserService: LocalUserService) { }

	public loggedIn: boolean = false;

	public onLogInComplete() {
		this.loggedIn = true;
	}

	public sidebars = {
		// animationDuration must match
		// $sidebar-animation-duration in global.scss
		animationDuration: 600,
		contacts: {
			visible: true,
			animating: false
		},
		options: {
			visible: false,
			animating: false			
		}
	}

	private hideSidebar(sidebar: string) {
		this.sidebars[sidebar].visible = false;
	}

	private showSidebar(sidebar: string) {
		this.sidebars[sidebar].visible = true;
	}

	public onToggleSidebar(sidebar: string) {
		if (this.sidebars[sidebar].animating) return;

		if (this.sidebars[sidebar].visible) {
			this.hideSidebar(sidebar);
		} else {
			this.showSidebar(sidebar);
		}

		this.sidebars[sidebar].animating = true;

		setTimeout(() => {
			this.sidebars[sidebar].animating = false;
		}, this.sidebars.animationDuration);
	}
}
