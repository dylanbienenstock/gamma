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

	private animationDuration: number = 1500;
	private titlePaddingBottom: number = 24;
	public titleOffsetY: number = 0;
	public titleCentered: boolean = true;
	public contentVisible: boolean = false;

	ngOnInit() {
		setTimeout(() => {
			this.titleOffsetY = this.container.clientHeight / 2 +
				this.title.clientHeight / 2 +
				this.titlePaddingBottom;

			this.titleCentered = false; // Move title to top of form

			setTimeout(() => {
				this.contentVisible = true; // Fade in the form
			}, this.animationDuration / 2);
		}, this.animationDuration / 2);
	}

	onClickRegister() { }
}
