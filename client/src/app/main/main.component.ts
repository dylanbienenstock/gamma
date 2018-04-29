import { Component } from '@angular/core';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})

export class MainComponent {

	constructor() { }

	public sidebars = {
		contacts: {
			visible: true,
			previouslyHidden: false
		},
		options: {
			visible: true,
			previouslyHidden: false
		}
	}

	public hideSidebar(sidebar: string) {
		this.sidebars[sidebar].visible = false;
	}

	public showSidebar(sidebar: string) {
		if (!this.sidebars[sidebar].visible) {
			this.sidebars[sidebar].previouslyHidden = true;
		}

		this.sidebars[sidebar].visible = true;
	}
}
