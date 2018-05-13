import { Component, HostListener } from '@angular/core';
import { AuthCreds } from '../../../../gamma/account/account.types';
import { LocalUserService } from '../local-user.service';
import { ScreenSizeService } from '../screen-size.service';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})

export class MainComponent {

	constructor(private localUserService: LocalUserService,
				private screenSizeService: ScreenSizeService) { }

	public loggedIn: boolean = false;

	public onLogInComplete() {
		this.loggedIn = true;
	}

	public mobile = (window.innerWidth <= 768);

	public sidebars = {
		// animationDuration must match
		// $sidebar-animation-duration in global.scss
		animationDuration: 400,
		minWidth: 300,
		dragLock: false,

		contacts: {
			visible: (!this.mobile),
			animating: false,
			animationDuration: 400,
			animationTimeout: null,
			progress: (this.mobile ? 0 : 1),
			dragging: false,
			draggingOut: false,
			dragStartX: 0
		},
		options: {
			visible: false,
			animating: false,
			animationDuration: 400,
			animationTimeout: null,			
			progress: 0,
			dragging: false,
			draggingOut: false,
			dragStartX: 0
		}
	}

	private animateSidebar(sidebar: string, duration?: number) {
		this.sidebars[sidebar].animating = true;
		this.sidebars[sidebar].animationDuration = 
			duration || this.sidebars.animationDuration;
		
		clearTimeout(this.sidebars[sidebar].animationTimeout);

		this.sidebars[sidebar].animationTimeout = setTimeout(() => {
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
		this.screenSizeService.resize(window.innerWidth);
		
		if (!this.mobile && this.screenSizeService.mobile) {
			this.hideSidebar("contacts");
			this.hideSidebar("options");
		}

		this.mobile = this.screenSizeService.mobile;
	}

	@HostListener("touchmove", ["$event"])
	onTouchMove(e) {
		if (!this.mobile || this.sidebars.dragLock) return;

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
				this.sidebars.contacts.draggingOut = false;
				this.sidebars.contacts.dragStartX = touch.pageX;
			}
		} else if (this.sidebars.options.visible) {
			if (this.sidebars.options.dragging) {
				let progress = touch.pageX;
				progress -= this.sidebars.options.dragStartX;
				progress /= this.sidebars.minWidth;
				progress = Math.min(Math.max(progress, 0), 1);
				progress = 1 - progress;

				this.sidebars.options.progress = progress;
			} else if (touch.pageX >= (window.innerWidth - this.sidebars.minWidth)) {
				this.sidebars.options.dragging = true;
				this.sidebars.options.draggingOut = false;
				this.sidebars.options.dragStartX = touch.pageX;
			}
		} else {
			let handleWidth = 64;

			let startDrag = (sidebar: string) => {
				let dragStartX = (sidebar == "contacts") ?
					this.sidebars.minWidth : window.innerWidth - this.sidebars.minWidth;

				this.sidebars[sidebar].visible = true;
				this.sidebars[sidebar].dragging = true;
				this.sidebars[sidebar].draggingOut = true;
				this.sidebars[sidebar].dragStartX = dragStartX;
				this.sidebars[sidebar].progress = 0;
			}

			if (touch.pageX <= handleWidth) {
				startDrag('contacts');
			} else if (touch.pageX >= window.innerWidth - handleWidth) {
				startDrag('options');
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
			
			let threshold = this.sidebars[sidebar].draggingOut ? 0.25 : 0.75;

			if (this.sidebars[sidebar].progress < threshold) {
				this.animateSidebar(sidebar, this.sidebars[sidebar].progress * this.sidebars.animationDuration);
				this.sidebars[sidebar].visible = false;				
				this.sidebars[sidebar].progress = 0;
			} else {
				this.animateSidebar(sidebar, (1 - this.sidebars[sidebar].progress) * this.sidebars.animationDuration);
				this.sidebars[sidebar].visible = true;
				this.sidebars[sidebar].progress = 1;
			}
		}

		this.sidebars.dragLock = false;
	}

	onCancelDrag() {
		this.sidebars.dragLock = true;		
	}
}
