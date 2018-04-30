import { Component } from '@angular/core';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})

export class MainComponent {

	constructor() { }

	public loggedIn: boolean = false;
	public authToken: string;

	public onLogInComplete(authToken) {
		this.loggedIn = true;
		this.authToken = authToken;
	}

	public sidebars = {
		// animationDuration must match
		// $sidebar-animation-duration in global.scss
		animationDuration: 600,
		contacts: {
			visible: true,
			previouslyHidden: false,
			animating: false
		},
		options: {
			visible: true,
			previouslyHidden: false,
			animating: false			
		}
	}

	private hideSidebar(sidebar: string) {
		this.sidebars[sidebar].visible = false;
	}

	private showSidebar(sidebar: string) {
		if (!this.sidebars[sidebar].visible) {
			this.sidebars[sidebar].previouslyHidden = true;
		}

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
