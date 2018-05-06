import { Component, OnInit, Input } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
	selector: 'app-main-contacts-status',
	templateUrl: './main-contacts-status.component.html',
	styleUrls: ['./main-contacts-status.component.scss']
})
export class MainContactsStatusComponent implements OnInit {

	constructor(private socketService: SocketService) { }

	@Input() selectable: boolean;
	@Input() status: string;

	statusOptions: string[] = ["online", "away", "busy"];
	selectorOpen: boolean = false;

	ngOnInit() {
	}

	openSelector() {
		// Don't open selector if not selectable
		this.selectorOpen = this.selectable;
	}

	closeSelector() {
		this.selectorOpen = false;
	}

	selectStatus(statusOption: string) {
		this.status = statusOption;
		this.closeSelector();

		this.socketService.changeStatus(statusOption);
	}
}
