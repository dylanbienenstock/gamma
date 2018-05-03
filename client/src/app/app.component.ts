import { Component } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app';

	constructor(private socketService: SocketService) {
		(function sendPing() {
			socketService.sendPing();
			setTimeout(sendPing, 10000);
		})();
	}
}
