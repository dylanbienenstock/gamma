import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ScrollbarModule } from 'ngx-scrollbar';

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
import { MainContactsHomeYouComponent } from './main-contacts-home-you/main-contacts-home-you.component';
import { MainContactsStatusComponent } from './main-contacts-status/main-contacts-status.component';
import { MainContactsSearchresultsComponent } from './main-contacts-searchresults/main-contacts-searchresults.component';
import { MainContactsUserComponent } from './main-contacts-user/main-contacts-user.component';
import { MainContactsListComponent } from './main-contacts-list/main-contacts-list.component';
import { MainContactsListSectionComponent } from './main-contacts-list-section/main-contacts-list-section.component';
import { ContactService } from './contact.service';
import { LocalUserService } from './local-user.service';
import { ChatService } from './chat.service';

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
		MainContactsHomeYouComponent,
		MainContactsStatusComponent,
		MainContactsSearchresultsComponent,
		MainContactsUserComponent,
		MainContactsListComponent,
		MainContactsListSectionComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		ScrollbarModule
	],
	providers: [
		SocketService,
		ContactService,
		LocalUserService
		ChatService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
