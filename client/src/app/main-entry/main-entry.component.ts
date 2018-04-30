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
	private titlePaddingBottom: number = 16;
	public titleOffsetY: number = 0;
	public contentVisible: boolean = false;

	ngOnInit() {
		setTimeout(() => {
			this.titleOffsetY = this.container.clientHeight / 2 + 
				this.title.clientHeight / 2 + 
				this.titlePaddingBottom;

			setTimeout(() => {
				this.contentVisible = true;
			}, this.animationDuration);
		}, this.animationDuration);
	}
}
