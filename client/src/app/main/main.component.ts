import { Component, HostListener } from '@angular/core';
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

	public mobile = (window.innerWidth <= 768);

	public sidebars = {
		// animationDuration must match
		// $sidebar-animation-duration in global.scss
		animationDuration: 600,
		minWidth: 300,
		contacts: {
			visible: (!this.mobile),
			animating: false,
			animationDuration: 600,
			progress: (this.mobile ? 0 : 1),
			dragging: false,
			dragStartX: 0
		},
		options: {
			visible: false,
			animating: false,
			animationDuration: 600,
			progress: 0,
			dragging: false,
			dragStartX: 0
		}
	}

	private animateSidebar(sidebar: string, duration?: number) {
		this.sidebars[sidebar].animating = true;
		this.sidebars[sidebar].animationDuration = 
			duration || this.sidebars.animationDuration;
		
		setTimeout(() => {
			this.sidebars[sidebar].animating = false;
		}, this.sidebars[sidebar].animationDuration);
	}

	private hideSidebar(sidebar: string, animate?: boolean) {
		this.sidebars[sidebar].visible = false;
		this.sidebars[sidebar].progress = 0;		

		if (animate) {
			this.animateSidebar(sidebar);			
		}
	}

	private showSidebar(sidebar: string, animate?: boolean) {
		this.sidebars[sidebar].visible = true;
		this.sidebars[sidebar].progress = 1;

		if (animate) {
			this.animateSidebar(sidebar);
		}

		if (this.mobile) {
			let otherSidebar = (sidebar == "contacts" ? "options" : "contacts");

			if (this.sidebars[otherSidebar].visible) {
				this.hideSidebar(otherSidebar);
			}
		}
	}

	public onToggleSidebar(sidebar: string) {
		if (this.sidebars[sidebar].animating) return;

		if (this.sidebars[sidebar].visible) {
			this.hideSidebar(sidebar, true);
		} else {
			this.showSidebar(sidebar, true);
		}
	}

	@HostListener("window:resize", ["$event"])
	onResize() {
		let mobile = (window.innerWidth <= 768);

		if (!this.mobile && mobile) {
			this.hideSidebar("contacts");
			this.hideSidebar("options");
		}

		this.mobile = mobile;
	}

	@HostListener("touchmove", ["$event"])
	onTouchMove(e) {
		if (!this.mobile) return;

		let touch = e.touches.item(0);

		if (!touch) return;

		if (this.sidebars.contacts.visible) {
			if (this.sidebars.contacts.dragging) {
				let progress = this.sidebars.contacts.dragStartX;
				progress -= touch.pageX;
				progress /= this.sidebars.minWidth;
				progress = Math.min(Math.max(progress, 0), 1);
				progress = 1 - progress;

				this.sidebars.contacts.progress = progress;
			} else if (touch.pageX <= this.sidebars.minWidth) {
				this.sidebars.contacts.dragging = true;
				this.sidebars.contacts.dragStartX = touch.pageX;
			}
		}
		else if (this.sidebars.options.visible) {
			if (this.sidebars.options.dragging) {
				let progress = touch.pageX;
				progress -= this.sidebars.options.dragStartX;
				progress /= this.sidebars.minWidth;
				progress = Math.min(Math.max(progress, 0), 1);
				progress = 1 - progress;

				this.sidebars.options.progress = progress;
			} else if (touch.pageX >= (window.innerWidth - this.sidebars.minWidth)) {
				this.sidebars.options.dragging = true;
				this.sidebars.options.dragStartX = touch.pageX;
			}
		}
	}

	@HostListener("touchend", ["$event"])
	onTouchEnd(e) {
		let sidebar: string;

		if (this.sidebars.contacts.dragging) {
			sidebar = "contacts";
		} else if (this.sidebars.options.dragging) {
			sidebar = "options";			
		}

		if (sidebar) {
			this.sidebars[sidebar].dragging = false;
			
			if (this.sidebars[sidebar].progress < 0.5) {
				this.animateSidebar(sidebar, this.sidebars[sidebar].progress * 600);
				this.sidebars[sidebar].visible = false;				
				this.sidebars[sidebar].progress = 0;
			} else {
				this.animateSidebar(sidebar, (1 - this.sidebars[sidebar].progress) * 600);
				this.sidebars[sidebar].visible = true;
				this.sidebars[sidebar].progress = 1;
			}
		}
	}
}
