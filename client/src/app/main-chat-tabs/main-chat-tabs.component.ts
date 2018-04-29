import { Component, HostListener, OnInit } from '@angular/core';
import { ChatTab } from "./main-chat-tabs.types";

@Component({
	selector: 'app-main-chat-tabs',
	templateUrl: './main-chat-tabs.component.html',
	styleUrls: ['./main-chat-tabs.component.scss']
})
export class MainChatTabsComponent implements OnInit {

	constructor() { }

	public tabs: ChatTab[] = [];

	ngOnInit() {
		this.addTab("Dylan Bienenstock");
		this.addTab("Dylan Bienenstock");
		this.addTab("Dylan Bienenstock");
	}

	addTab(title: string) {
		let tab: ChatTab = {
			title: title,
			flashing: false,
			style: {
				left: `-${this.tabs.length}px`,
				zIndex: 16 - this.tabs.length
			}
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
		let currentLeft = parseInt(tab.style.left || "0");

		this.dragging = true;
		this.draggingTab = tab;		
		this.dragStartX = e.screenX - currentLeft;

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
			// console.log(e.screenX,this.dragStartX);
			this.draggingTab.style.left = `${difference}px`;
		}
	}
}
