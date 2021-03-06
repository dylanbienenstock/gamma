import { Component, Input, ViewChild, ElementRef, HostListener, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { ContactList } from '../../../../gamma/account/account.types';
import { ScrollbarComponent } from 'ngx-scrollbar';
import { ScreenSizeService } from '../screen-size.service';

@Component({
	selector: 'app-main-contacts',
	templateUrl: './main-contacts.component.html',
	styleUrls: ['./main-contacts.component.scss']
})
export class MainContactsComponent {
	constructor(private screenSizeService: ScreenSizeService) { }

	@Input() shadowOpacity: number;
	@Output() cancelDrag: EventEmitter<null> = new EventEmitter<null>();

	waiting: boolean;
	searching: boolean = false;
	searchResults: ContactList;

	scroll: boolean = false;
	scrollCalculated: boolean = false;
	
	@ViewChild("container") containerRef: ElementRef;
	get container(): HTMLDivElement { return this.containerRef.nativeElement; }

	@ViewChild("topbar") topbarRef: ElementRef;
	get topbar(): HTMLDivElement { return this.topbarRef.nativeElement; }
	
	@ViewChild("content") contentRef: ElementRef;
	get content(): HTMLDivElement { return this.contentRef.nativeElement; }

	@ViewChild("scrollbar") scrollbarRef: ScrollbarComponent;
	
	@HostListener("window:resize", ["$event"])
	onResize(event) {		
		this.calculateShouldScroll();
	}

	onMouseEnter() {
		if (this.scrollCalculated) return;
		
		this.calculateShouldScroll();
	}

	calculateShouldScroll() {
		this.scrollCalculated = true;

		let containerHeight = this.container.clientHeight;
		containerHeight -= this.screenSizeService.mobile ? 0 : this.topbar.clientHeight;
		this.scroll = this.content.clientHeight > containerHeight;

		setTimeout(() => {
			this.scrollbarRef.update();
		});
	}

	onSetSearching(searching: boolean) {
		this.waiting = true;
		this.searching = searching;
		this.searchResults = {
			contacts: []	
		};
	}

	onDisplaySearchResults(searchResults: ContactList) {
		this.searchResults = searchResults;
		this.waiting = false;
	}

	onScrollState(e) {
		if (e) this.cancelDrag.emit(null);
	}
}
