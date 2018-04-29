import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ChatTab } from "./main-chat-tabs.types";

@Component({
	selector: 'app-main-chat-tabs',
	templateUrl: './main-chat-tabs.component.html',
	styleUrls: ['./main-chat-tabs.component.scss']
})
export class MainChatTabsComponent implements OnInit {

	constructor() { }

	public tabs: ChatTab[] = [];

	@ViewChild("container") private containerRef;
	public get container() { return this.containerRef.nativeElement };

	ngOnInit() {
		this.addTab("Dylan Bienenstock");
		this.addTab("Dylan Bienenstock");
		this.addTab("Dylan Bienenstock");
		this.addTab("Dylan Bienenstock");

		this.tabs[2].flashing = true;
	}

	addTab(title: string) {
		let tab: ChatTab = {
			title: title,
			flashing: false,
			offsetX: -this.tabs.length,
			order: this.tabs.length
		}

		if (this.tabs.length == 0) {
			this.selectedTab = tab;
		}

		this.tabs.push(tab);
	}

	public selectedTab: ChatTab;
	private dragging: boolean = false;
	private draggingTab: ChatTab;
	private dragStartX: number;

	onMouseDown(tab: ChatTab, e: MouseEvent) {
		this.dragging = true;
		this.draggingTab = tab;		
		this.dragStartX = e.screenX - tab.offsetX;

		this.selectedTab = tab;
	}

	@HostListener("document:mouseup", ["$event"])
	onMouseUp(e) {
		this.dragging = false;
	}

	@HostListener("document:mousemove", ["$event"])
	onMouseMove(e) {
		if (this.dragging) {
			let difference = e.screenX - this.dragStartX;
			this.draggingTab.offsetX = difference;
		}
	}
}
