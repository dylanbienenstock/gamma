import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MainContactsComponent } from './main-contacts/main-contacts.component';
import { MainChatComponent } from './main-chat/main-chat.component';
import { MainOptionsComponent } from './main-options/main-options.component';
import { MainChatTabsComponent } from './main-chat-tabs/main-chat-tabs.component';
import { MainChatMessageContainerComponent } from './main-chat-message-container/main-chat-message-container.component';
import { MainEntryComponent } from './main-entry/main-entry.component';

import { SocketService } from './socket.service';
import { MainContactsSearchComponent } from './main-contacts-search/main-contacts-search.component';
import { MainContactsHomeComponent } from './main-contacts-home/main-contacts-home.component';
import { MainContactsHomeStatusComponent } from './main-contacts-home-status/main-contacts-home-status.component';
import { MainContactsStatusComponent } from './main-contacts-status/main-contacts-status.component';

@NgModule({
	declarations: [
		AppComponent,
		MainComponent,
		MainContactsComponent,
		MainChatComponent,
		MainOptionsComponent,
		MainChatTabsComponent,
		MainChatMessageContainerComponent,
		MainEntryComponent,
		MainContactsSearchComponent,
		MainContactsHomeComponent,
		MainContactsHomeStatusComponent,
		MainContactsStatusComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [
		SocketService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
