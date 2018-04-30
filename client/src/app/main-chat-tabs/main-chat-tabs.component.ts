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
	public tabWidth: number = 180;

	ngOnInit() {
		this.addTab("Dylan Bienenstock");
		this.addTab("Dylan Bienenstock");
		this.addTab("Dylan Bienenstock");
		this.addTab("Dylan");
	}

	addTab(title: string) {
		let tab: ChatTab = {
			title: title,
			flashing: false,
			offsetX: this.tabWidth * this.tabs.length,
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

		let tab = this.tabs.find(tab => tab.order == this.draggingTab.order);
		let offsetX = 0;

		// Find the closest open spot
		for (let i = 0; i < tab.order; i++) {
			let tab2 = this.tabs.find(tab2 => tab2.order == i);
			offsetX += this.tabWidth;
		}

		this.draggingTab.offsetX = offsetX;
		this.draggingTab = null;
	}

	@HostListener("document:mousemove", ["$event"])
	onMouseMove(e) {
		if (this.dragging) {
			// Move the dragged tab
			let difference = e.screenX - this.dragStartX;
			this.draggingTab.offsetX = difference;

			// Copy the array
			let tabs = Object.assign([], this.tabs);

			// Sort the new array by order
			tabs.sort((a: ChatTab, b:ChatTab) => {
				return a.order - b.order;
			});

			// Sort by position
			tabs.sort((a: ChatTab, b: ChatTab) => {
				let aLeft = a.offsetX;
				let aWidth = this.tabWidth;
				let aMiddle = aLeft + aWidth / 2;
				let aRight = aLeft + aWidth;

				let bLeft = b.offsetX;
				let bWidth = this.tabWidth;
				let bMiddle = bLeft + bWidth / 2;
				
				if (aMiddle > bLeft) return 1;
				if (aRight < bMiddle) return -1;

				return 0;
			});

			// Copy the indices of sorted array into tab.order
			this.tabs.forEach((tab) => {
				tab.order = tabs.indexOf(tab);
			});

			// Set their positions based on their order
			for (let i = 0; i < this.tabs.length; i++) {
				let tab = this.tabs.find(tab => tab.order == i);
				
				if (tab != this.draggingTab) {
					tab.offsetX = tab.order * this.tabWidth;
				}
			}
		}
	}
}
