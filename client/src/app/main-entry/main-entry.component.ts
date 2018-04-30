import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-main-entry',
	templateUrl: './main-entry.component.html',
	styleUrls: ['./main-entry.component.scss']
})
export class MainEntryComponent implements OnInit {
	constructor() { }

	@ViewChild("title") titleRef;
	public get title(): HTMLHeadingElement { return this.titleRef.nativeElement; }

	@ViewChild("container") containerRef;
	public get container(): HTMLHeadingElement { return this.containerRef.nativeElement; }
	
	private animationDuration: number = 750;
	private animating: boolean = true;
	private titlePaddingBottom: number = 24;
	public titleOffsetY: number = 0;
	public titleCentered: boolean = true;
	public contentVisible: boolean = false;
	public registering: boolean = false;

	calculateTitleOffset(): void {
		this.titleOffsetY = this.container.clientHeight / 2 +
			this.title.clientHeight / 2 +
			this.titlePaddingBottom;
	}

	ngOnInit() {
		setTimeout(() => {
			this.calculateTitleOffset();

			this.titleCentered = false; // Move title to top of form

			setTimeout(() => {
				this.contentVisible = true; // Fade in form
				this.animating = false; // Done animating
				
			}, this.animationDuration);
		}, this.animationDuration);
	}

	onClickRegister() {
		this.switchForm(true);
	}

	onClickLogIn() {
		this.switchForm(false);
	}

	switchForm(registering: boolean) {
		if (this.animating) return;

		this.animating = true;
		this.contentVisible = false; // Fade out form

		setTimeout(() => {
			this.titleCentered = true; // Re-center title

			setTimeout(() => {
				this.registering = registering; // Display correct form

				setTimeout(() => {
					this.calculateTitleOffset();

					this.titleCentered = false;

					setTimeout(() => {
						this.contentVisible = true; // Fade in form
						this.animating = false;

					}, this.animationDuration);
				}, this.animationDuration);
			}, this.animationDuration);
		}, this.animationDuration);
	}
}
