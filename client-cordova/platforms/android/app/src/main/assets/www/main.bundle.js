webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main></app-main>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__("./src/app/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(socketService) {
        this.socketService = socketService;
        this.title = 'app';
        (function sendPing() {
            socketService.sendPing();
            setTimeout(sendPing, 10000);
        })();
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_scrollbar__ = __webpack_require__("./node_modules/ngx-scrollbar/esm5/ngx-scrollbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_main_component__ = __webpack_require__("./src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_contacts_main_contacts_component__ = __webpack_require__("./src/app/main-contacts/main-contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_chat_main_chat_component__ = __webpack_require__("./src/app/main-chat/main-chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_options_main_options_component__ = __webpack_require__("./src/app/main-options/main-options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__main_chat_tabs_main_chat_tabs_component__ = __webpack_require__("./src/app/main-chat-tabs/main-chat-tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__main_chat_message_container_main_chat_message_container_component__ = __webpack_require__("./src/app/main-chat-message-container/main-chat-message-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_entry_main_entry_component__ = __webpack_require__("./src/app/main-entry/main-entry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__socket_service__ = __webpack_require__("./src/app/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__main_contacts_search_main_contacts_search_component__ = __webpack_require__("./src/app/main-contacts-search/main-contacts-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__main_contacts_home_main_contacts_home_component__ = __webpack_require__("./src/app/main-contacts-home/main-contacts-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__main_contacts_home_you_main_contacts_home_you_component__ = __webpack_require__("./src/app/main-contacts-home-you/main-contacts-home-you.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__main_contacts_status_main_contacts_status_component__ = __webpack_require__("./src/app/main-contacts-status/main-contacts-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__main_contacts_searchresults_main_contacts_searchresults_component__ = __webpack_require__("./src/app/main-contacts-searchresults/main-contacts-searchresults.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__main_contacts_user_main_contacts_user_component__ = __webpack_require__("./src/app/main-contacts-user/main-contacts-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__main_contacts_list_main_contacts_list_component__ = __webpack_require__("./src/app/main-contacts-list/main-contacts-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__main_contacts_list_section_main_contacts_list_section_component__ = __webpack_require__("./src/app/main-contacts-list-section/main-contacts-list-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__contact_service__ = __webpack_require__("./src/app/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__local_user_service__ = __webpack_require__("./src/app/local-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__main_chat_input_main_chat_input_component__ = __webpack_require__("./src/app/main-chat-input/main-chat-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__chat_service__ = __webpack_require__("./src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__main_chat_messagecluster_main_chat_messagecluster_component__ = __webpack_require__("./src/app/main-chat-messagecluster/main-chat-messagecluster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__screen_size_service__ = __webpack_require__("./src/app/screen-size.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_7__main_contacts_main_contacts_component__["a" /* MainContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__main_chat_main_chat_component__["a" /* MainChatComponent */],
                __WEBPACK_IMPORTED_MODULE_9__main_options_main_options_component__["a" /* MainOptionsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__main_chat_tabs_main_chat_tabs_component__["a" /* MainChatTabsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__main_chat_message_container_main_chat_message_container_component__["a" /* MainChatMessageContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_12__main_entry_main_entry_component__["a" /* MainEntryComponent */],
                __WEBPACK_IMPORTED_MODULE_14__main_contacts_search_main_contacts_search_component__["a" /* MainContactsSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_15__main_contacts_home_main_contacts_home_component__["a" /* MainContactsHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__main_contacts_home_you_main_contacts_home_you_component__["a" /* MainContactsHomeYouComponent */],
                __WEBPACK_IMPORTED_MODULE_17__main_contacts_status_main_contacts_status_component__["a" /* MainContactsStatusComponent */],
                __WEBPACK_IMPORTED_MODULE_18__main_contacts_searchresults_main_contacts_searchresults_component__["a" /* MainContactsSearchresultsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__main_contacts_user_main_contacts_user_component__["a" /* MainContactsUserComponent */],
                __WEBPACK_IMPORTED_MODULE_20__main_contacts_list_main_contacts_list_component__["a" /* MainContactsListComponent */],
                __WEBPACK_IMPORTED_MODULE_21__main_contacts_list_section_main_contacts_list_section_component__["a" /* MainContactsListSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_24__main_chat_input_main_chat_input_component__["a" /* MainChatInputComponent */],
                __WEBPACK_IMPORTED_MODULE_26__main_chat_messagecluster_main_chat_messagecluster_component__["a" /* MainChatMessageclusterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_scrollbar__["b" /* ScrollbarModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__socket_service__["a" /* SocketService */],
                __WEBPACK_IMPORTED_MODULE_22__contact_service__["a" /* ContactService */],
                __WEBPACK_IMPORTED_MODULE_23__local_user_service__["a" /* LocalUserService */],
                __WEBPACK_IMPORTED_MODULE_25__chat_service__["a" /* ChatService */],
                __WEBPACK_IMPORTED_MODULE_27__screen_size_service__["a" /* ScreenSizeService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__("./src/app/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_user_service__ = __webpack_require__("./src/app/local-user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatService = /** @class */ (function () {
    function ChatService(socketService, localUserService) {
        this.socketService = socketService;
        this.localUserService = localUserService;
        this.onNewConversation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onMessage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.conversations = [];
        this.setupSubscriptions();
    }
    ChatService.prototype.setupSubscriptions = function () {
        var _this = this;
        this.socketService.onMessageReceived()
            .subscribe(function (message) {
            _this._onMessageReceived(message);
        });
    };
    ChatService.prototype._onMessageReceived = function (message) {
        var conversation = this.conversations
            .find(function (conversation) {
            return conversation.withId == message.senderId;
        });
        if (!conversation) {
            conversation = this._openNewConversation(message, false);
        }
        conversation.messages.push(message);
        this.onMessage.next(message);
    };
    ChatService.prototype._openNewConversation = function (firstMessage, startedByLocalUser) {
        var withId = startedByLocalUser ?
            this.localUserService.id : firstMessage.senderId;
        var conversation = {
            withId: withId,
            messages: [],
            open: true,
            startedByLocalUser: startedByLocalUser
        };
        this.conversations.push(conversation);
        this.onNewConversation.next(conversation);
        return conversation;
    };
    ChatService.prototype.openNewConversation = function (withId) {
        var conversation = {
            withId: withId,
            messages: [],
            open: true,
            startedByLocalUser: true
        };
        this.conversations.push(conversation);
        this.onNewConversation.next(conversation);
    };
    ChatService.prototype.closeConversation = function (conversation) {
        conversation.open = false;
    };
    ChatService.prototype.sendMessage = function (text, toId) {
        var conversation = this.conversations
            .find(function (conversation) {
            return conversation.withId == toId;
        });
        if (!conversation)
            return;
        var message = {
            text: text,
            senderId: this.localUserService.id,
            recipientId: toId
        };
        conversation.messages.push(message);
        this.onMessage.next(message);
        this.socketService.sendMessage(message);
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_2__local_user_service__["a" /* LocalUserService */]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/contact.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__("./src/app/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_user_service__ = __webpack_require__("./src/app/local-user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactService = /** @class */ (function () {
    function ContactService(socketService, localUserService) {
        this.socketService = socketService;
        this.localUserService = localUserService;
        // The following events return a user id
        this.onAddFriend = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onRemoveFriend = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onAcceptInvitation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onRejectInvitation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onChangeSection = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        // A contact belongs in a section if it
        // has ALL of the variables stated and
        // NONE of the variables not stated
        this.sectionDefinitions = {
            "you": ["isSelf"],
            "requests": ["isRequesting"],
            "pending": ["isFriend"],
            "friends": ["isFriend", "isConfirmed"],
            "others": []
        };
        // Key: id
        this.friendNames = {};
    }
    // Returns true if the contact
    // is in the specified section
    // (If I didn't have to use it
    // so much in templats I would 
    // call it "isInSection")
    ContactService.prototype.in = function (contact, section) {
        if (!contact || !this.sectionDefinitions[section])
            return false;
        var sectionDefinition = this.sectionDefinitions[section];
        return contact.isSelf === sectionDefinition.includes("isSelf") &&
            contact.isFriend === sectionDefinition.includes("isFriend") &&
            contact.isConfirmed === sectionDefinition.includes("isConfirmed") &&
            contact.isRequesting === sectionDefinition.includes("isRequesting");
    };
    ContactService.prototype.getSection = function (contact) {
        for (var section in this.sectionDefinitions) {
            if (this.in(contact, section))
                return section;
        }
    };
    ContactService.prototype.changeSection = function (contact, section, suppressEvent) {
        var previousSection = this.getSection(contact);
        var sectionDefinition = this.sectionDefinitions[section];
        contact.isSelf = sectionDefinition.includes("isSelf");
        contact.isFriend = sectionDefinition.includes("isFriend");
        contact.isConfirmed = sectionDefinition.includes("isConfirmed");
        contact.isRequesting = sectionDefinition.includes("isRequesting");
        if (!suppressEvent) {
            this.onChangeSection.next({
                contact: contact,
                from: previousSection,
                to: section
            });
        }
    };
    ContactService.prototype.createInvite = function (contact) {
        return {
            authCreds: this.localUserService.authCreds(),
            contact: contact
        };
    };
    ContactService.prototype.getFriendName = function (id) {
        if (id == this.localUserService.id) {
            return this.localUserService.name;
        }
        return this.friendNames[id];
    };
    ContactService.prototype.saveFriendName = function (contact) {
        this.friendNames[contact.id] = contact.name;
    };
    ContactService.prototype.saveFriendNames = function (contactList) {
        for (var _i = 0, _a = contactList.contacts; _i < _a.length; _i++) {
            var contact = _a[_i];
            this.saveFriendName(contact);
        }
    };
    ContactService.prototype.addFriend = function (contact, suppressEvent) {
        this.changeSection(contact, "pending", suppressEvent);
        this.socketService.addFriend(this.createInvite(contact));
        if (!suppressEvent) {
            this.onAddFriend.next(contact.id);
        }
    };
    ContactService.prototype.removeFriend = function (contact, suppressEvent) {
        this.changeSection(contact, "others", suppressEvent);
        this.socketService.removeFriend(this.createInvite(contact));
        if (!suppressEvent) {
            this.onRemoveFriend.next(contact.id);
        }
    };
    ContactService.prototype.acceptInvitation = function (contact, suppressEvent) {
        this.changeSection(contact, "friends", suppressEvent);
        this.socketService.acceptInvitation(this.createInvite(contact));
        this.saveFriendName(contact);
        if (!suppressEvent) {
            this.onAcceptInvitation.next(contact.id);
        }
    };
    ContactService.prototype.rejectInvitation = function (contact, suppressEvent) {
        this.changeSection(contact, "others", suppressEvent);
        this.socketService.rejectInvitation(this.createInvite(contact));
        if (!suppressEvent) {
            this.onRejectInvitation.next(contact.id);
        }
    };
    ContactService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_2__local_user_service__["a" /* LocalUserService */]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/local-user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalUserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalUserService = /** @class */ (function () {
    function LocalUserService() {
        this.valid = false;
    }
    LocalUserService.prototype.setLocalUser = function (localUser) {
        this.id = localUser.id;
        this.name = localUser.name;
        this.authToken = localUser.authToken;
        this.valid = true;
    };
    LocalUserService.prototype.authCreds = function () {
        return {
            id: this.id,
            authToken: this.authToken
        };
    };
    LocalUserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LocalUserService);
    return LocalUserService;
}());



/***/ }),

/***/ "./src/app/main-chat-input/main-chat-input.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<form (submit)=\"sendMessage($event)\">\n\t\t<div class=\"form-input\">\n\t\t\t<input type=\"text\"\n\t\t\t[(ngModel)]=\"input\"\n\t\t\t[ngModelOptions]=\"{ standalone: true }\"\n\t\t\tplaceholder=\"Type your message...\">\n\t\t\t\n\t\t\t<div class=\"underline\"></div>\n\t\t</div>\n\t</form>\n\n\t<div class=\"buttons\" [class.disabled]=\"input.length == 0\">\n\t\t<svg (click)=\"sendMessage($event)\" xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 8.4667 8.4667\">\n\t\t\t<path fill=\"#333\" d=\"M8.4667 4.2333L0 1.0583l.5292 2.6459 4.2333.5291-4.2333.5292L0 7.4083z\" />\n\t\t</svg>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/main-chat-input/main-chat-input.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  width: 100%;\n  height: 100px;\n  padding: 0 32px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n  :host .container form {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: inline-block;\n    margin-right: 32px;\n    font-size: 0; }\n  :host .container form .form-input {\n      position: relative;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%); }\n  :host .container form .form-input input {\n        display: block;\n        width: 100%;\n        border: 0;\n        outline: 0;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        background: none;\n        font-size: 22px;\n        color: #DDD;\n        margin-bottom: 4px; }\n  :host .container form .form-input input::-webkit-input-placeholder {\n          color: #444; }\n  :host .container form .form-input input:-ms-input-placeholder {\n          color: #444; }\n  :host .container form .form-input input::-ms-input-placeholder {\n          color: #444; }\n  :host .container form .form-input input::placeholder {\n          color: #444; }\n  :host .container form .form-input .underline {\n        width: 100%;\n        height: 4px;\n        border-radius: 2px;\n        background-color: #444; }\n  :host .container .buttons svg {\n    position: relative;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    cursor: pointer;\n    width: 32px; }\n  :host .container .buttons svg path {\n      -webkit-transition: fill 300ms ease;\n      transition: fill 300ms ease;\n      fill: #65D588; }\n  :host .container .buttons.disabled svg path {\n    cursor: default;\n    fill: #444; }\n"

/***/ }),

/***/ "./src/app/main-chat-input/main-chat-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainChatInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("./src/app/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainChatInputComponent = /** @class */ (function () {
    function MainChatInputComponent(chatService) {
        this.chatService = chatService;
        this.input = "";
    }
    MainChatInputComponent.prototype.sendMessage = function (e) {
        e.preventDefault();
        this.chatService.sendMessage(this.input, this.conversation.withId);
        this.input = "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MainChatInputComponent.prototype, "conversation", void 0);
    MainChatInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-chat-input',
            template: __webpack_require__("./src/app/main-chat-input/main-chat-input.component.html"),
            styles: [__webpack_require__("./src/app/main-chat-input/main-chat-input.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]])
    ], MainChatInputComponent);
    return MainChatInputComponent;
}());



/***/ }),

/***/ "./src/app/main-chat-message-container/main-chat-message-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<app-main-chat-messagecluster\n\t*ngFor=\"let messageCluster of messageClusters\"\n\t[messageCluster]=\"messageCluster\">\n\t</app-main-chat-messagecluster>\n</div>"

/***/ }),

/***/ "./src/app/main-chat-message-container/main-chat-message-container.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n"

/***/ }),

/***/ "./src/app/main-chat-message-container/main-chat-message-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainChatMessageContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("./src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_service__ = __webpack_require__("./src/app/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__local_user_service__ = __webpack_require__("./src/app/local-user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainChatMessageContainerComponent = /** @class */ (function () {
    function MainChatMessageContainerComponent(chatService, contactService, localUserService) {
        this.chatService = chatService;
        this.contactService = contactService;
        this.localUserService = localUserService;
        this.messageClusters = [];
    }
    MainChatMessageContainerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.onMessageReceivedSubscription =
            this.chatService.onMessage.subscribe(function (message) {
                _this.buildMessageCluster();
            });
    };
    MainChatMessageContainerComponent.prototype.ngOnDestroy = function () {
        this.onMessageReceivedSubscription.unsubscribe();
    };
    MainChatMessageContainerComponent.prototype.buildMessageCluster = function () {
        var messageClusters = [];
        var builtCluster;
        for (var _i = 0, _a = this.conversation.messages; _i < _a.length; _i++) {
            var message = _a[_i];
            if (!builtCluster || message.senderId != builtCluster.senderId) {
                if (builtCluster) {
                    messageClusters.push(builtCluster);
                }
                builtCluster = {
                    messages: [],
                    senderId: message.senderId,
                    sentByLocalUser: (message.senderId == this.localUserService.id)
                };
            }
            builtCluster.messages.push(message);
        }
        if (builtCluster) {
            messageClusters.push(builtCluster);
        }
        this.messageClusters = messageClusters;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MainChatMessageContainerComponent.prototype, "conversation", void 0);
    MainChatMessageContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-chat-message-container',
            template: __webpack_require__("./src/app/main-chat-message-container/main-chat-message-container.component.html"),
            styles: [__webpack_require__("./src/app/main-chat-message-container/main-chat-message-container.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_2__contact_service__["a" /* ContactService */],
            __WEBPACK_IMPORTED_MODULE_3__local_user_service__["a" /* LocalUserService */]])
    ], MainChatMessageContainerComponent);
    return MainChatMessageContainerComponent;
}());



/***/ }),

/***/ "./src/app/main-chat-messagecluster/main-chat-messagecluster.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n[class.local-user]=\"messageCluster.sentByLocalUser\">\n\t<div class=\"content\">\n\t\t<div class=\"sender\">\n\t\t\t<img src=\"assets/contacts.svg\">\n\t\t\t<p>{{ contactService.getFriendName(messageCluster.senderId) }}</p>\t\t\t\n\t\t</div>\n\n\t\t<div class=\"message-container\"\n\t\t[class.local-user]=\"messageCluster.sentByLocalUser\">\n\t\t\t<div class=\"message\"\n\t\t\t*ngFor=\"let message of messageCluster.messages\">\n\t\t\t\t<div class=\"message-inner\">\n\t\t\t\t\t<p class=\"message-text\">{{ message.text }}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"spacer\"></div>\n</div>"

/***/ }),

/***/ "./src/app/main-chat-messagecluster/main-chat-messagecluster.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-bottom: 32px; }\n  :host:first-of-type {\n    margin-top: 32px; }\n  :host:last-of-type {\n    margin-bottom: 0; }\n  :host .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    font-size: 0;\n    padding: 0 32px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n  :host .container .spacer {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1; }\n  :host .container.local-user {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: reverse;\n          -ms-flex-flow: row-reverse nowrap;\n              flex-flow: row-reverse nowrap;\n      text-align: right; }\n  :host .container.local-user .content .sender {\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: reverse;\n            -ms-flex-flow: row-reverse nowrap;\n                flex-flow: row-reverse nowrap; }\n  :host .container.local-user .content .sender p {\n          margin-left: 0;\n          margin-right: 16px; }\n  :host .container .content .sender {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row nowrap;\n              flex-flow: row nowrap;\n      height: 38px;\n      margin-bottom: 12px; }\n  :host .container .content .sender p {\n        display: inline-block;\n        font-size: 16px;\n        line-height: 38px;\n        vertical-align: top;\n        margin-left: 16px; }\n  :host .container .content .sender p:before {\n          content: \"@\";\n          margin-right: 2px;\n          opacity: 0.5; }\n  :host .container .content .sender img {\n        width: 38px;\n        border-radius: 50%; }\n  @media (max-width: 1000px) {\n      :host .container .content .sender {\n        height: 32px; }\n        :host .container .content .sender img {\n          width: 32px; }\n        :host .container .content .sender p {\n          font-size: 14px;\n          line-height: 32px; } }\n  :host .container .content .message-container {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: column nowrap;\n              flex-flow: column nowrap; }\n  :host .container .content .message-container .message {\n        margin-bottom: 3px; }\n  :host .container .content .message-container .message .message-inner {\n          display: inline-block;\n          background-color: #444;\n          color: #DDD;\n          font-size: 16px;\n          border-radius: 4px;\n          padding: 6px;\n          border-top-left-radius: 4px;\n          border-bottom-left-radius: 4px;\n          border-top-right-radius: 12px;\n          border-bottom-right-radius: 12px; }\n  :host .container .content .message-container .message .message-inner .message-text {\n            display: inline-block;\n            word-wrap: break-word;\n            word-break: break-word;\n            -webkit-hyphens: auto;\n                -ms-hyphens: auto;\n                    hyphens: auto; }\n  @media (max-width: 1000px) {\n            :host .container .content .message-container .message .message-inner {\n              font-size: 14px; } }\n  :host .container .content .message-container .message:first-child .message-inner {\n          border-top-left-radius: 12px; }\n  :host .container .content .message-container .message:last-child {\n          margin-bottom: 0; }\n  :host .container .content .message-container .message:last-child .message-inner {\n            border-bottom-left-radius: 12px; }\n  :host .container .content .message-container.local-user .message .message-inner {\n        color: #262626;\n        background-color: #65D588;\n        border-top-left-radius: 12px;\n        border-bottom-left-radius: 12px;\n        border-top-right-radius: 4px;\n        border-bottom-right-radius: 4px; }\n  :host .container .content .message-container.local-user .message:first-child .message-inner {\n        border-top-right-radius: 12px; }\n  :host .container .content .message-container.local-user .message:last-child {\n        margin-bottom: 0; }\n  :host .container .content .message-container.local-user .message:last-child .message-inner {\n          border-bottom-right-radius: 12px; }\n"

/***/ }),

/***/ "./src/app/main-chat-messagecluster/main-chat-messagecluster.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainChatMessageclusterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_service__ = __webpack_require__("./src/app/contact.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainChatMessageclusterComponent = /** @class */ (function () {
    function MainChatMessageclusterComponent(contactService) {
        this.contactService = contactService;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MainChatMessageclusterComponent.prototype, "messageCluster", void 0);
    MainChatMessageclusterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-chat-messagecluster',
            template: __webpack_require__("./src/app/main-chat-messagecluster/main-chat-messagecluster.component.html"),
            styles: [__webpack_require__("./src/app/main-chat-messagecluster/main-chat-messagecluster.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__contact_service__["a" /* ContactService */]])
    ], MainChatMessageclusterComponent);
    return MainChatMessageclusterComponent;
}());



/***/ }),

/***/ "./src/app/main-chat-tabs/main-chat-tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" onresize=\"onResize($event)\">\n\t<img src=\"{{ sidebars.contacts.visible ? 'assets/contacts.svg' : 'assets/contacts-hidden.svg' }}\" \n\tclass=\"panel-button left\" \n\t(click)=\"onToggleContacts()\">\n\n\t<div class=\"container-inner\" #container>\n\t\t<div class=\"tab\" \n\t\t*ngFor=\"let tab of tabs; let i = index;\"\n\t\t(mousedown)=\"onMouseDown(tab, $event)\"\n\t\t[class.selected]=\"selectedTab == tab\" \n\t\t[class.flashing]=\"tab.flashing\"\n\t\t[ngStyle]=\"{ \n\t\t\ttransform: 'translateX(' + tab.offsetX + 'px)',\n\t\t\ttransition: (tab != draggingTab && !resizing) ? 'transform 300ms ease' : null,\n\t\t\twidth: tabWidth + 'px'\n\t\t}\">\n\t\t\t<div class=\"tab-inner\" [ngStyle]=\"{ width: tabWidth + 'px' }\">\n\t\t\t\t<span>{{ contactService.getFriendName(tab.conversation.withId) }}</span>\n\t\t\t\t<div class=\"tab-close\"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<img src=\"{{ sidebars.options.visible ? 'assets/options.svg' : 'assets/options-hidden.svg' }}\" \n\tclass=\"panel-button right\"\n\t(click)=\"onToggleOptions()\">\n</div>"

/***/ }),

/***/ "./src/app/main-chat-tabs/main-chat-tabs.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .container {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  height: 40px;\n  background-color: #444;\n  font-size: 0; }\n  :host .container .panel-button {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -webkit-touch-callout: none;\n    -ms-text-size-adjust: none;\n    -webkit-text-size-adjust: none;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    -webkit-user-drag: none;\n    -khtml-user-drag: none;\n    -moz-user-drag: none;\n    -o-user-drag: none;\n    user-drag: none;\n    position: relative;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    cursor: pointer;\n    display: inline-block;\n    width: 25px;\n    margin: 0 8px; }\n  :host .container .container-inner {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: inline-block;\n    vertical-align: top; }\n  :host .container .container-inner .tab {\n      display: -webkit-inline-box;\n      display: -ms-inline-flexbox;\n      display: inline-flex;\n      position: absolute;\n      vertical-align: top;\n      font-size: 0; }\n  :host .container .container-inner .tab .tab-inner {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-flow: row nowrap;\n                flex-flow: row nowrap;\n        height: 40px;\n        line-height: 40px;\n        padding: 0 10px 0 12px;\n        background-color: transparent;\n        -webkit-transition: background-color 250ms ease;\n        transition: background-color 250ms ease;\n        overflow: hidden; }\n  :host .container .container-inner .tab .tab-inner span {\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n          -webkit-touch-callout: none;\n          -ms-text-size-adjust: none;\n          -webkit-text-size-adjust: none;\n          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n          -webkit-user-drag: none;\n          -khtml-user-drag: none;\n          -moz-user-drag: none;\n          -o-user-drag: none;\n          user-drag: none;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          text-align: center;\n          -webkit-box-flex: 1;\n              -ms-flex: 1;\n                  flex: 1;\n          font-size: 14px;\n          color: rgba(221, 221, 221, 0.6);\n          -webkit-transition: color 250ms ease;\n          transition: color 250ms ease; }\n  :host .container .container-inner .tab .tab-inner span:before {\n            content: \"@\";\n            margin-right: 2px;\n            opacity: 0.5; }\n  :host .container .container-inner .tab .tab-inner .tab-close {\n          position: relative;\n          top: 50%;\n          -webkit-transform: translateY(-50%);\n                  transform: translateY(-50%);\n          cursor: pointer;\n          display: inline-block;\n          width: 10px;\n          height: 10px;\n          border-radius: 50%;\n          margin-left: 12px;\n          -webkit-transition: background-color 250ms ease;\n          transition: background-color 250ms ease;\n          background-color: #444; }\n  :host .container .container-inner .tab .tab-inner .tab-close:hover {\n            background-color: #e04848; }\n  :host .container .container-inner .tab:hover:not(.selected) .tab-inner {\n        background-color: #5e5d5d; }\n  :host .container .container-inner .tab:hover:not(.selected) .tab-inner span {\n          color: #DDD; }\n  :host .container .container-inner .tab.selected {\n        z-index: 2 !important; }\n  :host .container .container-inner .tab.selected .tab-inner {\n          background-color: #262626;\n          -webkit-transition: unset !important;\n          transition: unset !important; }\n  :host .container .container-inner .tab.selected .tab-inner span {\n            color: #DDD;\n            -webkit-transition: unset !important;\n            transition: unset !important; }\n  :host .container .container-inner .tab.flashing .tab-inner {\n        -webkit-animation: \"flash\" 4s ease 0s infinite;\n                animation: \"flash\" 4s ease 0s infinite; }\n  @-webkit-keyframes flash {\n  0% {\n    background-color: #5e5d5d; }\n  25%, 100% {\n    background-color: transparent; } }\n  @keyframes flash {\n  0% {\n    background-color: #5e5d5d; }\n  25%, 100% {\n    background-color: transparent; } }\n"

/***/ }),

/***/ "./src/app/main-chat-tabs/main-chat-tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainChatTabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("./src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_service__ = __webpack_require__("./src/app/contact.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainChatTabsComponent = /** @class */ (function () {
    function MainChatTabsComponent(chatService, contactService) {
        this.chatService = chatService;
        this.contactService = contactService;
        this.toggleContacts = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.toggleOptions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.tabClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.tabs = [];
        this.tabWidth = 180;
        this.resizing = false;
        this.dragging = false;
    }
    MainChatTabsComponent.prototype.onToggleContacts = function () {
        this.toggleContacts.emit(null);
    };
    MainChatTabsComponent.prototype.onToggleOptions = function () {
        this.toggleOptions.emit(null);
    };
    Object.defineProperty(MainChatTabsComponent.prototype, "container", {
        get: function () { return this.containerRef.nativeElement; },
        enumerable: true,
        configurable: true
    });
    MainChatTabsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listenForResize();
        this.chatService.onNewConversation
            .subscribe(function (conversation) {
            _this.addTab(conversation);
        });
    };
    // Interface stuff
    MainChatTabsComponent.prototype.addTab = function (conversation) {
        var tab = {
            conversation: conversation,
            flashing: false,
            offsetX: this.tabWidth * this.tabs.length,
            order: this.tabs.length
        };
        if (this.tabs.length == 0) {
            this.selectedTab = tab;
            this.tabClicked.emit(conversation);
        }
        this.tabs.push(tab);
        setTimeout(this.resizeTabs);
    };
    MainChatTabsComponent.prototype.resizeTabs = function () {
        var _this = this;
        if (this.container) {
            this.resizing = true;
            var tabWidth = this.container.clientWidth / this.tabs.length;
            this.tabWidth = Math.min(tabWidth, 180);
            this.fixTabPositions();
            setTimeout(function () {
                _this.resizing = false;
            });
        }
    };
    MainChatTabsComponent.prototype.listenForResize = function () {
        if (this.sidebars.contacts.animating ||
            this.sidebars.options.animating) {
            this.resizeTabs();
        }
        requestAnimationFrame(this.listenForResize.bind(this));
    };
    MainChatTabsComponent.prototype.onWindowResize = function (e) {
        this.resizeTabs();
    };
    MainChatTabsComponent.prototype.onMouseDown = function (tab, e) {
        this.dragging = true;
        this.draggingTab = tab;
        this.dragStartX = e.screenX - tab.offsetX;
        this.selectedTab = tab;
        this.tabClicked.emit(tab.conversation);
    };
    MainChatTabsComponent.prototype.onMouseUp = function (e) {
        var _this = this;
        if (!this.dragging)
            return;
        var tab = this.tabs.find(function (tab) { return tab.order == _this.draggingTab.order; });
        var offsetX = 0;
        var _loop_1 = function (i) {
            var tab2 = this_1.tabs.find(function (tab2) { return tab2.order == i; });
            offsetX += this_1.tabWidth;
        };
        var this_1 = this;
        // Find the closest open spot
        for (var i = 0; i < tab.order; i++) {
            _loop_1(i);
        }
        this.dragging = false;
        this.draggingTab.offsetX = offsetX;
        this.draggingTab = null;
    };
    MainChatTabsComponent.prototype.onMouseMove = function (e) {
        if (this.dragging) {
            // Move the dragged tab
            var difference = e.screenX - this.dragStartX;
            var containerWidth = this.container.clientWidth - this.tabWidth;
            this.draggingTab.offsetX = Math.min(containerWidth, Math.max(0, difference));
            this.fixTabPositions();
        }
    };
    MainChatTabsComponent.prototype.fixTabPositions = function () {
        var _this = this;
        // Copy the array
        var tabs = Object.assign([], this.tabs);
        // Sort the new array by order
        tabs.sort(function (a, b) {
            return a.order - b.order;
        });
        // Sort by position
        tabs.sort(function (a, b) {
            var aLeft = a.offsetX;
            var aWidth = _this.tabWidth;
            var aMiddle = aLeft + aWidth / 2;
            var aRight = aLeft + aWidth;
            var bLeft = b.offsetX;
            var bWidth = _this.tabWidth;
            var bMiddle = bLeft + bWidth / 2;
            if (aMiddle > bLeft)
                return 1;
            if (aRight < bMiddle)
                return -1;
            return 0;
        });
        // Copy the indices of sorted array into tab.order
        this.tabs.forEach(function (tab) {
            tab.order = tabs.indexOf(tab);
        });
        var _loop_2 = function (i) {
            var tab = this_2.tabs.find(function (tab) { return tab.order == i; });
            if (tab != this_2.draggingTab) {
                tab.offsetX = tab.order * this_2.tabWidth;
            }
        };
        var this_2 = this;
        // Set their positions based on their order
        for (var i = 0; i < this.tabs.length; i++) {
            _loop_2(i);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MainChatTabsComponent.prototype, "sidebars", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], MainChatTabsComponent.prototype, "toggleContacts", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], MainChatTabsComponent.prototype, "toggleOptions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], MainChatTabsComponent.prototype, "tabClicked", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("container"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MainChatTabsComponent.prototype, "containerRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MainChatTabsComponent.prototype, "onWindowResize", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])("document:mouseup", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MainChatTabsComponent.prototype, "onMouseUp", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])("document:mousemove", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MainChatTabsComponent.prototype, "onMouseMove", null);
    MainChatTabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-chat-tabs',
            template: __webpack_require__("./src/app/main-chat-tabs/main-chat-tabs.component.html"),
            styles: [__webpack_require__("./src/app/main-chat-tabs/main-chat-tabs.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_2__contact_service__["a" /* ContactService */]])
    ], MainChatTabsComponent);
    return MainChatTabsComponent;
}());



/***/ }),

/***/ "./src/app/main-chat/main-chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"curtain\"\n[class.visible]=\"sidebars.contacts.visible || sidebars.options.visible\"\n[class.animated]=\"sidebars.contacts.animating || sidebars.options.animating\"\n[ngStyle]=\"{\n\topacity: sidebars.contacts.visible ? (sidebars.contacts.progress) :\n\t\t\t(sidebars.options.visible ? sidebars.options.progress : '')\n}\"\n(click)=\"onHideSidebars()\"></div>\n\n<div class=\"container\">\n\t<app-main-chat-tabs\n\t[sidebars]=\"sidebars\"\n\t(toggleContacts)=\"onToggleContacts()\"\n\t(toggleOptions)=\"onToggleOptions()\"\n\t(tabClicked)=\"onTabClicked($event)\">\n\t</app-main-chat-tabs>\n\n\t<div class=\"content\">\n\t\t<ng-container *ngIf=\"currentConversation\">\n\t\t\t<ng-scrollbar autoHide=\"true\" #scrollbar>\n\t\t\t\t<app-main-chat-message-container\n\t\t\t\t[conversation]=\"currentConversation\">\n\t\t\t\t</app-main-chat-message-container>\n\t\t\t</ng-scrollbar>\n\n\t\t\t<app-main-chat-input\n\t\t\t[conversation]=\"currentConversation\">\n\t\t\t</app-main-chat-input>\n\t\t</ng-container>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/main-chat/main-chat.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .curtain {\n  display: none;\n  will-change: opacity; }\n  @media (max-width: 768px) {\n    :host .curtain {\n      display: initial;\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100vw;\n      height: 100vh;\n      background-color: rgba(0, 0, 0, 0.4);\n      opacity: 0;\n      pointer-events: none;\n      z-index: 31; }\n      :host .curtain.visible {\n        opacity: 1;\n        pointer-events: all; }\n      :host .curtain.animated {\n        -webkit-transition: opacity 400ms ease;\n        transition: opacity 400ms ease; } }\n  :host .container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  width: 100%;\n  height: 100vh;\n  overflow: hidden; }\n  :host .container .content {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    overflow: hidden;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap; }\n"

/***/ }),

/***/ "./src/app/main-chat/main-chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("./src/app/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainChatComponent = /** @class */ (function () {
    function MainChatComponent(chatService) {
        this.chatService = chatService;
        this.toggleSidebar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.hideSidebars = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    MainChatComponent.prototype.onToggleContacts = function () {
        this.toggleSidebar.emit("contacts");
    };
    MainChatComponent.prototype.onToggleOptions = function () {
        this.toggleSidebar.emit("options");
    };
    MainChatComponent.prototype.onTabClicked = function (conversation) {
        this.currentConversation = conversation;
    };
    MainChatComponent.prototype.onHideSidebars = function () {
        this.hideSidebars.emit(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MainChatComponent.prototype, "sidebars", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], MainChatComponent.prototype, "toggleSidebar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], MainChatComponent.prototype, "hideSidebars", void 0);
    MainChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-chat',
            template: __webpack_require__("./src/app/main-chat/main-chat.component.html"),
            styles: [__webpack_require__("./src/app/main-chat/main-chat.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]])
    ], MainChatComponent);
    return MainChatComponent;
}());



/***/ }),

/***/ "./src/app/main-contacts-home-you/main-contacts-home-you.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<img src=\"assets/contacts.svg\">\n\n\t<div>\n\t\t<div class=\"name-and-status\">\n\t\t\t<p class=\"name\">{{ localUserService.name }}</p>\n\n\t\t\t<app-main-contacts-status status=\"online\" selectable=\"true\"></app-main-contacts-status>\t\t\t\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/main-contacts-home-you/main-contacts-home-you.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  padding: 0 16px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin-bottom: 32px;\n  width: 100%; }\n  :host .container img {\n    min-width: 32px;\n    height: 64px;\n    margin-right: 16px; }\n  :host .container > div {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  :host .container > div .name-and-status {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row wrap;\n              flex-flow: row wrap;\n      height: 23px; }\n  :host .container > div .name-and-status .name {\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1;\n        width: 0;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        font-size: 16px; }\n  :host .container > div .name-and-status .name:before {\n          content: \"@\";\n          margin-right: 2px;\n          opacity: 0.5; }\n"

/***/ }),

/***/ "./src/app/main-contacts-home-you/main-contacts-home-you.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContactsHomeYouComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_user_service__ = __webpack_require__("./src/app/local-user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainContactsHomeYouComponent = /** @class */ (function () {
    function MainContactsHomeYouComponent(localUserService) {
        this.localUserService = localUserService;
    }
    MainContactsHomeYouComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-contacts-home-you',
            template: __webpack_require__("./src/app/main-contacts-home-you/main-contacts-home-you.component.html"),
            styles: [__webpack_require__("./src/app/main-contacts-home-you/main-contacts-home-you.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__local_user_service__["a" /* LocalUserService */]])
    ], MainContactsHomeYouComponent);
    return MainContactsHomeYouComponent;
}());



/***/ }),

/***/ "./src/app/main-contacts-home/main-contacts-home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main-contacts-home-you></app-main-contacts-home-you>\n\n<app-main-contacts-list\n[contactList]=\"contactList\"\n[sections]=\"{\n\tyou: true,\n\trequests: true,\n\tpending: true,\n\tfriends: true,\n\tothers: false\n}\">\n</app-main-contacts-list>"

/***/ }),

/***/ "./src/app/main-contacts-home/main-contacts-home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-contacts-home/main-contacts-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContactsHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__("./src/app/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_user_service__ = __webpack_require__("./src/app/local-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_service__ = __webpack_require__("./src/app/contact.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainContactsHomeComponent = /** @class */ (function () {
    function MainContactsHomeComponent(socketService, localUserService, contactService) {
        this.socketService = socketService;
        this.localUserService = localUserService;
        this.contactService = contactService;
        this.contactList = {
            contacts: []
        };
    }
    MainContactsHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var observable = this.socketService
            .getContactList(this.localUserService.authCreds());
        var subscription = observable
            .subscribe(function (contactList) {
            subscription.unsubscribe();
            _this.contactList = contactList;
            _this.contactService.saveFriendNames(contactList);
        });
    };
    MainContactsHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-contacts-home',
            template: __webpack_require__("./src/app/main-contacts-home/main-contacts-home.component.html"),
            styles: [__webpack_require__("./src/app/main-contacts-home/main-contacts-home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_2__local_user_service__["a" /* LocalUserService */],
            __WEBPACK_IMPORTED_MODULE_3__contact_service__["a" /* ContactService */]])
    ], MainContactsHomeComponent);
    return MainContactsHomeComponent;
}());



/***/ }),

/***/ "./src/app/main-contacts-list-section/main-contacts-list-section.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n[class.animated]=\"animated\"\n[ngStyle]=\"{\n\theight: (hidden && animated) ? '0px' : (20 + 16 + (48 * contacts.length) + 32) + 'px'\n}\">\n\t<div class=\"banner\" [ngStyle]=\"{\n\t\topacity: (hidden && animated) ? 0 : 1\n\t}\">\n\t\t{{ section }}\n\t</div>\n\n\t<div class=\"contents\">\n\t\t<app-main-contacts-user\n\t\t*ngFor=\"let contact of contacts; index as i\"\n\t\t[animated]=\"animated\"\n\t\t[contact]=\"contact\"\n\t\t[hideContact]=\"hideContact\"\n\t\t[section]=\"section\"\n\t\t[index]=\"i\">\n\t\t</app-main-contacts-user>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/main-contacts-list-section/main-contacts-list-section.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n  :host .container {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -webkit-touch-callout: none;\n    -ms-text-size-adjust: none;\n    -webkit-text-size-adjust: none;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    -webkit-user-drag: none;\n    -khtml-user-drag: none;\n    -moz-user-drag: none;\n    -o-user-drag: none;\n    user-drag: none;\n    -webkit-transition: height 250ms ease;\n    transition: height 250ms ease;\n    overflow: hidden;\n    position: relative; }\n  :host .container.animated .banner {\n      -webkit-transition: all 250ms ease;\n      transition: all 250ms ease; }\n  :host .container .banner {\n      display: block;\n      height: 20px;\n      line-height: 20px;\n      width: 100%;\n      padding-left: 32px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      color: #DDD;\n      font-size: 18px;\n      text-transform: capitalize; }\n"

/***/ }),

/***/ "./src/app/main-contacts-list-section/main-contacts-list-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContactsListSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainContactsListSectionComponent = /** @class */ (function () {
    function MainContactsListSectionComponent() {
        this.hidden = true;
    }
    Object.defineProperty(MainContactsListSectionComponent.prototype, "animationDelay", {
        get: function () {
            return this.animated ? 75 : 0;
        },
        enumerable: true,
        configurable: true
    });
    MainContactsListSectionComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.hidden = false;
        }, this.animationDelay);
        this.hideContactSubscription =
            this.hideContact.subscribe(function (id) {
                if (_this.contacts.length == 1 &&
                    _this.contacts[0].id == id) {
                    _this.hidden = true;
                }
            });
    };
    MainContactsListSectionComponent.prototype.ngOnDestroy = function () {
        this.hideContactSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], MainContactsListSectionComponent.prototype, "animated", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MainContactsListSectionComponent.prototype, "section", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], MainContactsListSectionComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], MainContactsListSectionComponent.prototype, "contacts", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], MainContactsListSectionComponent.prototype, "hideContact", void 0);
    MainContactsListSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-contacts-list-section',
            template: __webpack_require__("./src/app/main-contacts-list-section/main-contacts-list-section.component.html"),
            styles: [__webpack_require__("./src/app/main-contacts-list-section/main-contacts-list-section.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainContactsListSectionComponent);
    return MainContactsListSectionComponent;
}());



/***/ }),

/***/ "./src/app/main-contacts-list/main-contacts-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\" *ngIf=\"sections.you\">\n\t<app-main-contacts-list-section\n\t*ngIf=\"contacts.you.length != 0\"\n\tsection=\"you\"\n\t[contacts]=\"contacts.you\"\n\t[hideContact]=\"hideContact\"\n\t[animated]=\"animated.you\"\n\tindex=\"0\">\n\t</app-main-contacts-list-section>\n</div>\n\n<div class=\"section\" *ngIf=\"sections.requests\">\n\t<app-main-contacts-list-section\n\t*ngIf=\"contacts.requests.length != 0\"\n\tsection=\"requests\"\n\t[contacts]=\"contacts.requests\"\n\t[hideContact]=\"hideContact\"\n\t[animated]=\"animated.requests\"\n\t[index]=\"contacts.you.length\">\n\t</app-main-contacts-list-section>\n</div>\n\n<div class=\"section\" *ngIf=\"sections.pending\">\n\t<app-main-contacts-list-section\n\t*ngIf=\"contacts.pending.length != 0\"\n\tsection=\"pending\"\n\t[contacts]=\"contacts.pending\"\n\t[hideContact]=\"hideContact\"\n\t[animated]=\"animated.pending\"\n\t[index]=\"contacts.you.length +\n\tcontacts.requests.length\">\n\t</app-main-contacts-list-section>\n</div>\n\n<div class=\"section\" *ngIf=\"sections.friends\">\n\t<app-main-contacts-list-section\n\t*ngIf=\"contacts.friends.length != 0\"\n\tsection=\"friends\"\n\t[contacts]=\"contacts.friends\"\n\t[hideContact]=\"hideContact\"\n\t[animated]=\"animated.friends\"\t\n\t[index]=\"contacts.you.length +\n\tcontacts.requests.length + \n\tcontacts.pending.length\">\n\t</app-main-contacts-list-section>\n</div>\n\n<div class=\"section\" *ngIf=\"sections.others\">\n\t<app-main-contacts-list-section\n\t*ngIf=\"contacts.others.length != 0\"\n\tsection=\"others\"\n\t[contacts]=\"contacts.others\"\n\t[hideContact]=\"hideContact\"\n\t[animated]=\"animated.others\"\t\n\t[index]=\"contacts.you.length +\n\tcontacts.requests.length + \n\tcontacts.pending.length +\n\tcontacts.friends.length\">\n\t</app-main-contacts-list-section>\n</div>"

/***/ }),

/***/ "./src/app/main-contacts-list/main-contacts-list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-contacts-list/main-contacts-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContactsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_service__ = __webpack_require__("./src/app/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__socket_service__ = __webpack_require__("./src/app/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainContactsListComponent = /** @class */ (function () {
    function MainContactsListComponent(contactService, socketService) {
        this.contactService = contactService;
        this.socketService = socketService;
        // $user-container-animation-duration in
        // main-contacts-user.component.scss
        this.animationDuration = 250;
        this.contacts = {};
        this.allContacts = [];
        this.hideContact = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.animated = {
            you: true,
            requests: true,
            pending: true,
            friends: true,
            others: true
        };
        this.sections = {
            you: false,
            requests: false,
            pending: false,
            friends: false,
            others: false // Strangers
        };
        this.sectionOrder = ["you", "requests", "pending", "friends", "others"];
    }
    Object.defineProperty(MainContactsListComponent.prototype, "contactList", {
        set: function (value) {
            var _this = this;
            var _loop_1 = function (section) {
                if (this_1.sections[section]) {
                    this_1.contacts[section] = value.contacts.filter(function (contact) {
                        return _this.contactService.in(contact, section);
                    }) || [];
                }
                else {
                    this_1.contacts[section] = [];
                }
            };
            var this_1 = this;
            for (var section in this.sections) {
                _loop_1(section);
            }
            this.allContacts = value.contacts;
        },
        enumerable: true,
        configurable: true
    });
    MainContactsListComponent.prototype.getContactById = function (id) {
        return this.allContacts.find(function (contact) {
            return contact && contact.id == id;
        });
    };
    MainContactsListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var onChangeSection = this.contactService.onChangeSection
            .subscribe(function (data) {
            _this.onChangeSection(data);
        });
        var onFriendAdded = this.socketService.onFriendAdded()
            .subscribe(function (statelessContact) {
            var contact = _this.getContactById(statelessContact.id) || statelessContact;
            _this.contactService.changeSection(contact, "requests");
        });
        var onFriendRemoved = this.socketService.onFriendRemoved()
            .subscribe(function (statelessContact) {
            var contact = _this.getContactById(statelessContact.id) || statelessContact;
            _this.contactService.changeSection(contact, "others");
        });
        var onInvitationAccepted = this.socketService.onInvitationAccepted()
            .subscribe(function (statelessContact) {
            var contact = _this.getContactById(statelessContact.id) || statelessContact;
            _this.contactService.changeSection(contact, "friends");
        });
        var onInvitationRejected = this.socketService.onInvitationRejected()
            .subscribe(function (statelessContact) {
            var contact = _this.getContactById(statelessContact.id) || statelessContact;
            _this.contactService.changeSection(contact, "others");
        });
        var onStatusChanged = this.socketService.onStatusChanged()
            .subscribe(function (statusChange) {
            var contact = _this.getContactById(statusChange.contact.id);
            if (!contact)
                return;
            contact.status = statusChange.status;
        });
        this.subscriptions = [
            onChangeSection,
            onFriendAdded,
            onFriendRemoved,
            onInvitationAccepted,
            onInvitationRejected
        ];
    };
    MainContactsListComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    MainContactsListComponent.prototype.suppressAnimation = function (suppressSections) {
        var _this = this;
        suppressSections.forEach(function (section) { return _this.animated[section] = false; });
        setTimeout(function () {
            suppressSections.forEach(function (section) { return _this.animated[section] = true; });
        });
    };
    MainContactsListComponent.prototype.sectionsAdjacent = function (a, b) {
        var index = this.sectionOrder.indexOf(a);
        if (index == -1)
            return false;
        var adjacentLeft = (function checkLeft() {
            var i = index - 1;
            while (this.sectionOrder[i]) {
                if (this.sectionOrder[i] == b)
                    return true;
                if (this.contacts[this.sectionOrder[i]].length != 0)
                    return false;
                i--;
            }
            return false;
        }.bind(this))();
        if (adjacentLeft)
            return true;
        return (function checkRight() {
            var i = index + 1;
            while (this.sectionOrder[i]) {
                if (this.sectionOrder[i] == b)
                    return true;
                if (this.contacts[this.sectionOrder[i]].length != 0)
                    return false;
                i++;
            }
            return false;
        }.bind(this))();
    };
    MainContactsListComponent.prototype.onChangeSection = function (sectionChange) {
        var _this = this;
        this.contacts[sectionChange.to].unshift(sectionChange.contact);
        var contactInAllContacts = this.allContacts
            .find(function (contact) {
            return contact.id == sectionChange.contact.id;
        });
        if (!contactInAllContacts) {
            this.allContacts.unshift(sectionChange.contact);
        }
        if (sectionChange.from) {
            var contact = this.contacts[sectionChange.from]
                .find(function (contact) {
                return contact && contact.id == sectionChange.contact.id;
            });
            if (contact) {
                var index_1 = this.contacts[sectionChange.from].indexOf(contact);
                if (index_1 != -1) {
                    this.hideContact.next(contact.id);
                    if (this.allContacts.length == 1) {
                        var adjacent = this.sectionsAdjacent(sectionChange.from, sectionChange.to);
                        if (adjacent) {
                            this.suppressAnimation([sectionChange.from, sectionChange.to]);
                        }
                    }
                    if (this.animated[sectionChange.from]) {
                        setTimeout(function () {
                            _this.contacts[sectionChange.from].splice(index_1, 1);
                        }, this.animationDuration);
                    }
                    else {
                        this.contacts[sectionChange.from].splice(index_1, 1);
                    }
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MainContactsListComponent.prototype, "sections", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MainContactsListComponent.prototype, "contactList", null);
    MainContactsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-contacts-list',
            template: __webpack_require__("./src/app/main-contacts-list/main-contacts-list.component.html"),
            styles: [__webpack_require__("./src/app/main-contacts-list/main-contacts-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__contact_service__["a" /* ContactService */],
            __WEBPACK_IMPORTED_MODULE_2__socket_service__["a" /* SocketService */]])
    ], MainContactsListComponent);
    return MainContactsListComponent;
}());



/***/ }),

/***/ "./src/app/main-contacts-search/main-contacts-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"searchbar\">\n\t\t<input type=\"text\"\n\t\tplaceholder=\"Search\"\n\t\t[(ngModel)]=\"queryText\"\n\t\t(ngModelChange)=\"onNgModelChange()\">\n\t\t\n\t\t<img src=\"assets/search.svg\">\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/main-contacts-search/main-contacts-search.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  margin-bottom: 16px; }\n  :host .container {\n    width: 100%;\n    padding: 16px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n  :host .container .searchbar {\n      width: 100%;\n      height: 28px;\n      font-size: 0; }\n  :host .container .searchbar img {\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        -webkit-touch-callout: none;\n        -ms-text-size-adjust: none;\n        -webkit-text-size-adjust: none;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-user-drag: none;\n        -khtml-user-drag: none;\n        -moz-user-drag: none;\n        -o-user-drag: none;\n        user-drag: none;\n        position: relative;\n        left: -20px;\n        width: 12px;\n        opacity: 0.3; }\n  :host .container .searchbar input[type=text] {\n        width: 100%;\n        height: 100%;\n        padding: 0 26px 0 8px;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        background-color: #262626;\n        color: #DDD;\n        font-size: 14px;\n        border-radius: 6px;\n        border: 0;\n        outline: 0; }\n  :host .container .searchbar input[type=text]:placeholder-shown {\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n          -webkit-touch-callout: none;\n          -ms-text-size-adjust: none;\n          -webkit-text-size-adjust: none;\n          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n          -webkit-user-drag: none;\n          -khtml-user-drag: none;\n          -moz-user-drag: none;\n          -o-user-drag: none;\n          user-drag: none; }\n"

/***/ }),

/***/ "./src/app/main-contacts-search/main-contacts-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContactsSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__("./src/app/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local_user_service__ = __webpack_require__("./src/app/local-user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainContactsSearchComponent = /** @class */ (function () {
    function MainContactsSearchComponent(socketService, localUserService) {
        this.socketService = socketService;
        this.localUserService = localUserService;
        this.setSearching = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.displaySearchResults = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.searchDelay = 350;
    }
    MainContactsSearchComponent.prototype.ngOnInit = function () {
    };
    MainContactsSearchComponent.prototype.onNgModelChange = function () {
        var _this = this;
        var searching = this.queryText.length > 0;
        this.setSearching.emit(searching);
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(function () {
            _this.search({
                authCreds: _this.localUserService.authCreds(),
                text: _this.queryText
            });
        }, this.searchDelay);
    };
    MainContactsSearchComponent.prototype.search = function (query) {
        var _this = this;
        if (this.searchSubscription) {
            this.searchSubscription.unsubscribe();
        }
        var observable = this.socketService.search(query);
        this.searchSubscription = observable.subscribe(function (data) {
            _this.displaySearchResults.emit(data);
            _this.searchSubscription.unsubscribe();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], MainContactsSearchComponent.prototype, "setSearching", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], MainContactsSearchComponent.prototype, "displaySearchResults", void 0);
    MainContactsSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-contacts-search',
            template: __webpack_require__("./src/app/main-contacts-search/main-contacts-search.component.html"),
            styles: [__webpack_require__("./src/app/main-contacts-search/main-contacts-search.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_2__local_user_service__["a" /* LocalUserService */]])
    ], MainContactsSearchComponent);
    return MainContactsSearchComponent;
}());



/***/ }),

/***/ "./src/app/main-contacts-searchresults/main-contacts-searchresults.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"noresults\" *ngIf=\"!waiting && noResults\">No results :(</p>\n\n<div *ngIf=\"!waiting && !noResults\">\n\t<app-main-contacts-list\n\t[contactList]=\"searchResults\"\n\t[sections]=\"{\n\tyou: true,\n\trequests: true,\n\tpending: true,\n\tfriends: true,\n\tothers: true\n}\">\n\t</app-main-contacts-list>\n</div>\n\n<div class=\"spinner\" *ngIf=\"waiting\">\n\t<img src=\"assets/loading.svg\">\n</div>"

/***/ }),

/***/ "./src/app/main-contacts-searchresults/main-contacts-searchresults.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .noresults {\n  text-align: center;\n  font-size: 16px; }\n\n:host .spinner {\n  width: 100%;\n  text-align: center; }\n\n:host .spinner img {\n    width: 42px; }\n"

/***/ }),

/***/ "./src/app/main-contacts-searchresults/main-contacts-searchresults.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContactsSearchresultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainContactsSearchresultsComponent = /** @class */ (function () {
    function MainContactsSearchresultsComponent() {
    }
    Object.defineProperty(MainContactsSearchresultsComponent.prototype, "noResults", {
        get: function () {
            return !this.searchResults.contacts || this.searchResults.contacts.length == 0;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], MainContactsSearchresultsComponent.prototype, "waiting", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MainContactsSearchresultsComponent.prototype, "searchResults", void 0);
    MainContactsSearchresultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-contacts-searchresults',
            template: __webpack_require__("./src/app/main-contacts-searchresults/main-contacts-searchresults.component.html"),
            styles: [__webpack_require__("./src/app/main-contacts-searchresults/main-contacts-searchresults.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainContactsSearchresultsComponent);
    return MainContactsSearchresultsComponent;
}());



/***/ }),

/***/ "./src/app/main-contacts-status/main-contacts-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"selector\"\n*ngIf=\"selectable && selectorOpen\"\n[ngStyle]=\"{ top: -20 * statusOptions.indexOf(status) + 'px' }\"\n(mouseleave)=\"closeSelector()\">\n\t<div class=\"status\"\n\t*ngFor=\"let statusOption of statusOptions\"\n\t(click)=\"selectStatus(statusOption)\">\n\t\t<div class=\"status-inner\" [ngClass]=\"statusOption\">\n\t\t\t<span class=\"status-text\">{{ statusOption }}</span>\n\t\t\t<div class=\"status-blip\"></div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"status\"\n*ngIf=\"status && status != 'offline'\"\n[class.disabled]=\"selectorOpen\"\n[class.selectable]=\"selectable\"\n(click)=\"openSelector()\">\n\t<div class=\"status-inner\" [ngClass]=\"status\">\n\t\t<span class=\"status-text\">{{ status }}</span>\n\t\t<div class=\"status-blip\"></div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/main-contacts-status/main-contacts-status.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .selector {\n  cursor: pointer;\n  position: relative;\n  float: right;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  border-radius: 4px;\n  font-size: 0;\n  overflow: hidden;\n  background-color: #333;\n  -webkit-box-shadow: 0 0 6px rgba(0, 0, 0, 0.6);\n          box-shadow: 0 0 6px rgba(0, 0, 0, 0.6); }\n  :host .selector .status {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -webkit-touch-callout: none;\n    -ms-text-size-adjust: none;\n    -webkit-text-size-adjust: none;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    -webkit-user-drag: none;\n    -khtml-user-drag: none;\n    -moz-user-drag: none;\n    -o-user-drag: none;\n    user-drag: none;\n    height: 20px; }\n  :host .selector .status:hover {\n      background-color: rgba(68, 68, 68, 0.75); }\n  :host > .status {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -ms-text-size-adjust: none;\n  -webkit-text-size-adjust: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-drag: none;\n  -khtml-user-drag: none;\n  -moz-user-drag: none;\n  -o-user-drag: none;\n  user-drag: none;\n  height: 20px;\n  border-radius: 4px;\n  font-size: 0; }\n  :host > .status.selectable {\n    cursor: pointer; }\n  :host > .status.selectable:hover {\n      background-color: rgba(68, 68, 68, 0.75); }\n  :host > .status.disabled {\n    visibility: hidden;\n    pointer-events: none; }\n  :host .selector > .status .status-inner,\n:host > .status .status-inner {\n  position: relative;\n  left: 100%;\n  padding: 0 5px;\n  -webkit-transform: translateX(calc(-100%));\n          transform: translateX(calc(-100%));\n  display: inline-block;\n  text-transform: capitalize; }\n  :host .selector > .status .status-inner .status-text,\n  :host > .status .status-inner .status-text {\n    position: relative;\n    top: 1px;\n    display: inline-block;\n    font-size: 12px;\n    margin-right: 4px; }\n  :host .selector > .status .status-inner .status-blip,\n  :host > .status .status-inner .status-blip {\n    display: inline-block;\n    width: 6px;\n    height: 6px;\n    border-radius: 50%; }\n  :host .selector > .status .status-inner.online .status-text,\n  :host > .status .status-inner.online .status-text {\n    color: #65D588; }\n  :host .selector > .status .status-inner.online .status-blip,\n  :host > .status .status-inner.online .status-blip {\n    background-color: #65D588; }\n  :host .selector > .status .status-inner.away .status-text,\n  :host > .status .status-inner.away .status-text {\n    color: #d6d144; }\n  :host .selector > .status .status-inner.away .status-blip,\n  :host > .status .status-inner.away .status-blip {\n    background-color: #d6d144; }\n  :host .selector > .status .status-inner.busy .status-text,\n  :host > .status .status-inner.busy .status-text {\n    color: #d64444; }\n  :host .selector > .status .status-inner.busy .status-blip,\n  :host > .status .status-inner.busy .status-blip {\n    background-color: #d64444; }\n"

/***/ }),

/***/ "./src/app/main-contacts-status/main-contacts-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContactsStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__("./src/app/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainContactsStatusComponent = /** @class */ (function () {
    function MainContactsStatusComponent(socketService) {
        this.socketService = socketService;
        this.statusOptions = ["online", "away", "busy"];
        this.selectorOpen = false;
    }
    MainContactsStatusComponent.prototype.ngOnInit = function () {
    };
    MainContactsStatusComponent.prototype.openSelector = function () {
        // Don't open selector if not selectable
        this.selectorOpen = this.selectable;
    };
    MainContactsStatusComponent.prototype.closeSelector = function () {
        this.selectorOpen = false;
    };
    MainContactsStatusComponent.prototype.selectStatus = function (statusOption) {
        this.status = statusOption;
        this.closeSelector();
        this.socketService.changeStatus(statusOption);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], MainContactsStatusComponent.prototype, "selectable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MainContactsStatusComponent.prototype, "status", void 0);
    MainContactsStatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-contacts-status',
            template: __webpack_require__("./src/app/main-contacts-status/main-contacts-status.component.html"),
            styles: [__webpack_require__("./src/app/main-contacts-status/main-contacts-status.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */]])
    ], MainContactsStatusComponent);
    return MainContactsStatusComponent;
}());



/***/ }),

/***/ "./src/app/main-contacts-user/main-contacts-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n(dblclick)=\"openNewConversation()\"\n*ngIf=\"contact\"\n[class.animated]=\"animated\"\n[class.clickable]=\"(section == 'friends' && contact.status != 'offline')\"\n[ngStyle]=\"{\n\topacity: (hidden && animated) ? 0 : 1,\n\ttransform: 'translateY(' + ( 16 + ((38 + 10) * index) + ((hidden && animated) ? -18 : 0) ) + 'px)'\n}\">\n\t<img class=\"avatar\" src=\"assets/contacts.svg\">\n\n\t<div>\n\t\t<div class=\"name-and-status\">\n\t\t\t<p class=\"name\">{{ contact.name }}</p>\n\n\t\t\t<app-main-contacts-status\n\t\t\t*ngIf=\"(section == 'you' || section == 'friends')\"\n\t\t\t[status]=\"contact.status || 'offline'\">\n\t\t\t</app-main-contacts-status>\n\n\t\t\t<div class=\"invite\"\n\t\t\t*ngIf=\"(section == 'others' || section == 'pending')\">\n\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 4.233 4.233\"\n\t\t\t\t[class.invited]=\"section == 'pending'\" \n\t\t\t\t(click)=\"toggleInvitation()\">\n\t\t\t\t\t<g fill=\"#65d588\">\n\t\t\t\t\t\t<path d=\"M1.822 3.704h.53V.53h-.53z\" paint-order=\"markers fill stroke\" />\n\t\t\t\t\t\t<path d=\"M.53 1.92l.004.507 3.17-.022-.004-.507z\" paint-order=\"markers fill stroke\" />\n\t\t\t\t\t</g>\n\t\t\t\t</svg>\n\t\t\t</div>\n\n\t\t\t<div class=\"accept-or-reject\"\n\t\t\t*ngIf=\"(section == 'requests')\">\n\t\t\t\t<img class=\"reject\"\n\t\t\t\tsrc=\"assets/invite-reject.svg\"\n\t\t\t\t(click)=\"rejectInvitation()\">\n\n\t\t\t\t<img class=\"accept\"\n\t\t\t\tsrc=\"assets/invite-accept.svg\"\n\t\t\t\t(click)=\"acceptInvitation()\">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/main-contacts-user/main-contacts-user.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .container {\n  position: absolute;\n  width: calc(20vw);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  padding: 5px 16px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: 48px;\n  -webkit-transition: background-color 200ms ease;\n  transition: background-color 200ms ease; }\n  @media (max-width: 1500px) {\n    :host .container {\n      width: calc(300px); } }\n  :host .container.clickable {\n    cursor: pointer; }\n  :host .container.clickable:hover {\n      background-color: #444; }\n  :host .container.animated {\n    -webkit-transition: background-color 200ms ease, opacity 250ms ease, -webkit-transform 250ms ease;\n    transition: background-color 200ms ease, opacity 250ms ease, -webkit-transform 250ms ease;\n    transition: background-color 200ms ease, opacity 250ms ease, transform 250ms ease;\n    transition: background-color 200ms ease, opacity 250ms ease, transform 250ms ease, -webkit-transform 250ms ease; }\n  :host .container .avatar {\n    min-width: 38px;\n    min-height: 38px;\n    margin-right: 16px; }\n  :host .container > div {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  :host .container > div .name-and-status {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row wrap;\n              flex-flow: row wrap;\n      position: relative;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%); }\n  :host .container > div .name-and-status app-main-contacts-status {\n        position: relative;\n        top: 2px; }\n  :host .container > div .name-and-status .name {\n        -webkit-box-flex: 1;\n            -ms-flex-positive: 1;\n                flex-grow: 1;\n        width: 0;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        font-size: 16px; }\n  :host .container > div .name-and-status .name:before {\n          content: \"@\";\n          margin-right: 2px;\n          opacity: 0.5; }\n  :host .container > div .name-and-status .invite,\n      :host .container > div .name-and-status .accept-or-reject {\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        -webkit-touch-callout: none;\n        -ms-text-size-adjust: none;\n        -webkit-text-size-adjust: none;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-user-drag: none;\n        -khtml-user-drag: none;\n        -moz-user-drag: none;\n        -o-user-drag: none;\n        user-drag: none;\n        cursor: default; }\n  :host .container > div .name-and-status .invite svg, :host .container > div .name-and-status .invite img,\n        :host .container > div .name-and-status .accept-or-reject svg,\n        :host .container > div .name-and-status .accept-or-reject img {\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n          -webkit-touch-callout: none;\n          -ms-text-size-adjust: none;\n          -webkit-text-size-adjust: none;\n          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n          -webkit-user-drag: none;\n          -khtml-user-drag: none;\n          -moz-user-drag: none;\n          -o-user-drag: none;\n          user-drag: none;\n          position: relative;\n          top: 50%;\n          -webkit-transform: translateY(-50%);\n                  transform: translateY(-50%);\n          cursor: pointer;\n          width: 16px;\n          opacity: 0.6; }\n  :host .container > div .name-and-status .invite svg:hover, :host .container > div .name-and-status .invite img:hover,\n          :host .container > div .name-and-status .accept-or-reject svg:hover,\n          :host .container > div .name-and-status .accept-or-reject img:hover {\n            opacity: 1; }\n  :host .container > div .name-and-status .invite svg:last-child, :host .container > div .name-and-status .invite img:last-child,\n          :host .container > div .name-and-status .accept-or-reject svg:last-child,\n          :host .container > div .name-and-status .accept-or-reject img:last-child {\n            margin-right: 2px; }\n  :host .container > div .name-and-status .invite svg g {\n        -webkit-transition: all 200ms ease !important;\n        transition: all 200ms ease !important;\n        -webkit-transform-origin: 50% 50% !important;\n                transform-origin: 50% 50% !important; }\n  :host .container > div .name-and-status .invite svg.invited g {\n        fill: #d64444;\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n  :host .container > div .name-and-status .accept-or-reject {\n        font-size: 0; }\n  :host .container > div .name-and-status .accept-or-reject img.reject {\n          position: relative;\n          left: -6px; }\n"

/***/ }),

/***/ "./src/app/main-contacts-user/main-contacts-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContactsUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__("./src/app/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_service__ = __webpack_require__("./src/app/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__local_user_service__ = __webpack_require__("./src/app/local-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_service__ = __webpack_require__("./src/app/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainContactsUserComponent = /** @class */ (function () {
    function MainContactsUserComponent(socketService, contactService, localUserService, chatService) {
        this.socketService = socketService;
        this.contactService = contactService;
        this.localUserService = localUserService;
        this.chatService = chatService;
        this.hidden = true;
    }
    Object.defineProperty(MainContactsUserComponent.prototype, "animationDelay", {
        get: function () {
            return this.animated ? 75 : 0;
        },
        enumerable: true,
        configurable: true
    });
    MainContactsUserComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.hidden = false;
        }, (this.index + 1) * this.animationDelay);
        this.hideContactSubscription =
            this.hideContact.subscribe(function (id) {
                if (_this.contact.id == id) {
                    _this.hidden = true;
                }
            });
    };
    MainContactsUserComponent.prototype.ngOnDestroy = function () {
        this.hideContactSubscription.unsubscribe();
    };
    MainContactsUserComponent.prototype.toggleInvitation = function () {
        var _this = this;
        if (this.hidden)
            return;
        setTimeout(function () {
            if (_this.contactService.in(_this.contact, "others")) {
                _this.contactService.addFriend(_this.contact);
            }
            else if (_this.contactService.in(_this.contact, "pending")) {
                _this.contactService.removeFriend(_this.contact);
            }
        }, this.animationDelay);
    };
    MainContactsUserComponent.prototype.acceptInvitation = function () {
        if (this.hidden)
            return;
        this.contactService.acceptInvitation(this.contact);
    };
    MainContactsUserComponent.prototype.rejectInvitation = function () {
        if (this.hidden)
            return;
        this.contactService.rejectInvitation(this.contact);
    };
    MainContactsUserComponent.prototype.openNewConversation = function () {
        if (this.hidden)
            return;
        if (this.contact.status == "offline")
            return;
        this.chatService.openNewConversation(this.contact.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MainContactsUserComponent.prototype, "contact", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], MainContactsUserComponent.prototype, "animated", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], MainContactsUserComponent.prototype, "hideContact", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MainContactsUserComponent.prototype, "section", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], MainContactsUserComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], MainContactsUserComponent.prototype, "showBanner", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MainContactsUserComponent.prototype, "bannerText", void 0);
    MainContactsUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-contacts-user',
            template: __webpack_require__("./src/app/main-contacts-user/main-contacts-user.component.html"),
            styles: [__webpack_require__("./src/app/main-contacts-user/main-contacts-user.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_2__contact_service__["a" /* ContactService */],
            __WEBPACK_IMPORTED_MODULE_3__local_user_service__["a" /* LocalUserService */],
            __WEBPACK_IMPORTED_MODULE_4__chat_service__["a" /* ChatService */]])
    ], MainContactsUserComponent);
    return MainContactsUserComponent;
}());



/***/ }),

/***/ "./src/app/main-contacts/main-contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [ngStyle]=\"{\n\tboxShadow: shadowOpacity ? ('0 0 20px 0px rgba(0, 0, 0, ' + shadowOpacity + ')') : ''\n}\">\n\t<div class=\"container-inner\" #container>\n\t\t<div class=\"topbar\" *ngIf=\"!screenSizeService.mobile\" #topbar>\n\t\t\t<h1>Contacts</h1>\n\t\t</div>\n\n\t\t<ng-scrollbar #scrollbar\n\t\tautoHide=\"true\"\n\t\t[trackY]=\"scroll\"\n\t\t(scrollState)=\"onScrollState($event)\">\n\t\t\t<div class=\"content\" #content (mouseenter)=\"onMouseEnter()\">\n\t\t\t\t<app-main-contacts-search\n\t\t\t\t(setSearching)=\"onSetSearching($event)\"\n\t\t\t\t(displaySearchResults)=\"onDisplaySearchResults($event)\">\n\t\t\t\t</app-main-contacts-search>\n\n\t\t\t\t<div class=\"content-view\">\n\t\t\t\t\t<app-main-contacts-home\n\t\t\t\t\t[hidden]=\"searching\">\n\t\t\t\t\t</app-main-contacts-home>\n\n\t\t\t\t\t<app-main-contacts-searchresults\n\t\t\t\t\t*ngIf=\"searching\"\n\t\t\t\t\t[waiting]=\"waiting\"\n\t\t\t\t\t[searchResults]=\"searchResults\">\n\t\t\t\t\t</app-main-contacts-searchresults>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-scrollbar>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/main-contacts/main-contacts.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .container {\n  width: 20vw;\n  min-width: 300px;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  float: right;\n  white-space: nowrap; }\n  :host .container .container-inner {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n    height: 100%;\n    background-color: #333;\n    overflow: hidden; }\n  :host .container .container-inner .topbar {\n      width: 100%;\n      height: 40px;\n      background-color: #444;\n      font-size: 0;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n      -webkit-touch-callout: none;\n      -ms-text-size-adjust: none;\n      -webkit-text-size-adjust: none;\n      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n      -webkit-user-drag: none;\n      -khtml-user-drag: none;\n      -moz-user-drag: none;\n      -o-user-drag: none;\n      user-drag: none;\n      text-align: center; }\n  :host .container .container-inner .topbar h1 {\n        display: inline-block;\n        font-size: 16px;\n        line-height: 40px; }\n  :host .container .container-inner .content {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: column nowrap;\n              flex-flow: column nowrap; }\n  :host .container .container-inner .content .content-view {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box; }\n"

/***/ }),

/***/ "./src/app/main-contacts/main-contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_scrollbar__ = __webpack_require__("./node_modules/ngx-scrollbar/esm5/ngx-scrollbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__screen_size_service__ = __webpack_require__("./src/app/screen-size.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainContactsComponent = /** @class */ (function () {
    function MainContactsComponent(screenSizeService) {
        this.screenSizeService = screenSizeService;
        this.cancelDrag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.searching = false;
        this.scroll = false;
        this.scrollCalculated = false;
    }
    Object.defineProperty(MainContactsComponent.prototype, "container", {
        get: function () { return this.containerRef.nativeElement; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainContactsComponent.prototype, "topbar", {
        get: function () { return this.topbarRef.nativeElement; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainContactsComponent.prototype, "content", {
        get: function () { return this.contentRef.nativeElement; },
        enumerable: true,
        configurable: true
    });
    MainContactsComponent.prototype.onResize = function (event) {
        this.calculateShouldScroll();
    };
    MainContactsComponent.prototype.onMouseEnter = function () {
        if (this.scrollCalculated)
            return;
        this.calculateShouldScroll();
    };
    MainContactsComponent.prototype.calculateShouldScroll = function () {
        var _this = this;
        this.scrollCalculated = true;
        var containerHeight = this.container.clientHeight;
        containerHeight -= this.screenSizeService.mobile ? 0 : this.topbar.clientHeight;
        this.scroll = this.content.clientHeight > containerHeight;
        setTimeout(function () {
            _this.scrollbarRef.update();
        });
    };
    MainContactsComponent.prototype.onSetSearching = function (searching) {
        this.waiting = true;
        this.searching = searching;
        this.searchResults = {
            contacts: []
        };
    };
    MainContactsComponent.prototype.onDisplaySearchResults = function (searchResults) {
        this.searchResults = searchResults;
        this.waiting = false;
    };
    MainContactsComponent.prototype.onScrollState = function (e) {
        if (e)
            this.cancelDrag.emit(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], MainContactsComponent.prototype, "shadowOpacity", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], MainContactsComponent.prototype, "cancelDrag", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("container"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MainContactsComponent.prototype, "containerRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("topbar"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MainContactsComponent.prototype, "topbarRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("content"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MainContactsComponent.prototype, "contentRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("scrollbar"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_scrollbar__["a" /* ScrollbarComponent */])
    ], MainContactsComponent.prototype, "scrollbarRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MainContactsComponent.prototype, "onResize", null);
    MainContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-contacts',
            template: __webpack_require__("./src/app/main-contacts/main-contacts.component.html"),
            styles: [__webpack_require__("./src/app/main-contacts/main-contacts.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__screen_size_service__["a" /* ScreenSizeService */]])
    ], MainContactsComponent);
    return MainContactsComponent;
}());



/***/ }),

/***/ "./src/app/main-entry/main-entry.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" \n[ngStyle]=\"{\n\topacity: loggedIn ? 0 : 1,\n\ttransition: 'opacity ' + animationDuration + 'ms ease'\n}\">\n\t<div class=\"container-animatable\" [class.shaking]=\"shaking\">\n\t\t<h1 class=\"title\" #title\n\t\t[ngStyle]=\"{ \n\t\t\ttransform: 'translate(-50%, calc(-50% - ' + (titleCentered ? 0 : titleOffsetY) + 'px))',\n\t\t\ttransition: 'transform ' + animationDuration + 'ms ease'\n\t\t}\">\n\t\t\tgamma\n\t\t</h1>\n\n\t\t<div class=\"container-inner\" #container\n\t\t[ngStyle]=\"{\n\t\t\topacity: contentVisible ? 1 : 0,\n\t\t\ttransition: 'opacity ' + animationDuration + 'ms ease'\n\t\t}\">\n\t\t\t<div class=\"form\"\n\t\t\t*ngIf=\"!registering\" \n\t\t\t[formGroup]=\"loginForm\"\n\t\t\t[class.allTouched]=\"loginFormAllTouched\">\n\t\t\t\t<input type=\"text\"\n\t\t\t\tformControlName=\"name\"\n\t\t\t\tplaceholder=\"Username\" \n\t\t\t\t(keyup.enter)=\"focusNext($event)\">\n\n\t\t\t\t<input type=\"password\"\n\t\t\t\tformControlName=\"password\"\t\t\n\t\t\t\tplaceholder=\"Password\"\n\t\t\t\t(keyup.enter)=\"logIn()\">\n\n\t\t\t\t<div class=\"form-footer\">\n\t\t\t\t\t<div class=\"switch-forms\" [ngStyle]=\"{ opacity: waiting ? 0 : 1 }\">\n\t\t\t\t\t\t<a (click)=\"onClickRegister()\">Register an account</a>\n\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t<img class=\"loading\"\n\t\t\t\t\tsrc=\"{{ !showCheckmark ? 'assets/loading.svg' : 'assets/checkmark.svg' }}\"\n\t\t\t\t\t[ngStyle]=\"{ opacity: waiting ? 1 : 0 }\">\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"form\" \n\t\t\t*ngIf=\"registering\" \n\t\t\t[formGroup]=\"registerForm\"\n\t\t\t[class.allTouched]=\"registerFormAllTouched\">\n\t\t\t\t<input type=\"text\"\n\t\t\t\tformControlName=\"name\"\t\t\n\t\t\t\tplaceholder=\"Username\"\n\t\t\t\t(keyup.enter)=\"focusNext($event)\">\n\t\t\t\t\n\t\t\t\t<input type=\"text\"\n\t\t\t\tformControlName=\"email\"\t\t\n\t\t\t\tplaceholder=\"Email address\"\n\t\t\t\t(keyup.enter)=\"focusNext($event);\">\n\t\t\t\t\n\t\t\t\t<input type=\"password\"\n\t\t\t\tformControlName=\"password\"\t\t\n\t\t\t\tplaceholder=\"Password\"\n\t\t\t\t(keyup.enter)=\"focusNext($event)\"\n\t\t\t\t(keyup)=\"onPasswordKeypress()\">\n\t\t\t\t\n\t\t\t\t<input type=\"password\"\n\t\t\t\tformControlName=\"confirmPassword\"\t\t\n\t\t\t\tplaceholder=\"Confirm Password\"\n\t\t\t\t(keyup.enter)=\"register()\">\n\n\t\t\t\t<div class=\"form-footer\">\n\t\t\t\t\t<div class=\"switch-forms\"\n\t\t\t\t\t[ngStyle]=\"{\n\t\t\t\t\t\topacity: (waiting || registerErrors) ? 0 : 1,\n\t\t\t\t\t\tpointerEvents: (waiting || registerErrors) ? 'none' : 'initial'\n\t\t\t\t\t}\">\n\t\t\t\t\t\t<a (click)=\"onClickLogIn()\">Back to log in</a>\n\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t<div class=\"form-errors\"\n\t\t\t\t\t[ngStyle]=\"{ opacity: (registerErrors && !waiting) ? 1 : 0 }\">\n\t\t\t\t\t\t<ng-container *ngFor=\"let error of registerErrors;\">\n\t\t\t\t\t\t\t<span>{{ error.text }}</span> <br>\n\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t<a (click)=\"onClickLogIn()\">Back to log in</a>\n\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t<img class=\"loading\"\n\t\t\t\t\tsrc=\"{{ !showCheckmark ? 'assets/loading.svg' : 'assets/checkmark.svg' }}\"\n\t\t\t\t\t[ngStyle]=\"{ opacity: waiting? 1 : 0 }\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/main-entry/main-entry.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .container {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 9999;\n  display: block;\n  width: 100vw;\n  height: 100vh;\n  background-color: #333; }\n  :host .container .container-animatable {\n    width: 100vw;\n    height: 100vh; }\n  :host .container .container-animatable.shaking {\n      -webkit-animation: \"shake\" 500ms ease-out;\n              animation: \"shake\" 500ms ease-out; }\n  @-webkit-keyframes shake {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  25% {\n    -webkit-transform: translateX(32px);\n            transform: translateX(32px); }\n  50% {\n    -webkit-transform: translateX(-32px);\n            transform: translateX(-32px); }\n  75% {\n    -webkit-transform: translateX(32px);\n            transform: translateX(32px); }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n  @keyframes shake {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  25% {\n    -webkit-transform: translateX(32px);\n            transform: translateX(32px); }\n  50% {\n    -webkit-transform: translateX(-32px);\n            transform: translateX(-32px); }\n  75% {\n    -webkit-transform: translateX(32px);\n            transform: translateX(32px); }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n  :host .container .container-animatable .title {\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n      -webkit-touch-callout: none;\n      -ms-text-size-adjust: none;\n      -webkit-text-size-adjust: none;\n      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n      -webkit-user-drag: none;\n      -khtml-user-drag: none;\n      -moz-user-drag: none;\n      -o-user-drag: none;\n      user-drag: none;\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      z-index: 10000;\n      color: #65D588; }\n  :host .container .container-animatable .container-inner {\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      text-align: center; }\n  :host .container .container-animatable .container-inner .form {\n        width: 0;\n        white-space: nowrap; }\n  :host .container .container-animatable .container-inner .form * {\n          -webkit-transform: translateX(-50%);\n                  transform: translateX(-50%); }\n  :host .container .container-animatable .container-inner .form .switch-forms a {\n          cursor: pointer;\n          position: absolute;\n          display: inline-block;\n          font-size: 14px;\n          color: #DDD !important;\n          opacity: 0.5;\n          text-decoration: none;\n          -webkit-transition: opacity 250ms ease;\n          transition: opacity 250ms ease; }\n  :host .container .container-animatable .container-inner .form .switch-forms a:hover {\n            opacity: 1; }\n  :host .container .container-animatable .container-inner .form .form-errors {\n          pointer-events: none;\n          position: absolute;\n          font-size: 14px;\n          color: #d64444;\n          -webkit-transition: opacity 250ms ease;\n          transition: opacity 250ms ease; }\n  :host .container .container-animatable .container-inner .form .form-errors a {\n            pointer-events: all;\n            position: relative;\n            top: 8px;\n            cursor: pointer;\n            font-size: 14px;\n            color: #DDD !important;\n            opacity: 0.5;\n            text-decoration: none;\n            -webkit-transition: opacity 250ms ease;\n            transition: opacity 250ms ease; }\n  :host .container .container-animatable .container-inner .form .form-errors a:hover {\n              opacity: 1; }\n  :host .container .container-animatable .container-inner .form .loading {\n          pointer-events: none;\n          display: block;\n          position: absolute;\n          height: 42px;\n          -webkit-transform: translate(-50%, -10px);\n                  transform: translate(-50%, -10px);\n          -webkit-transition: opacity 250ms ease;\n          transition: opacity 250ms ease; }\n  :host .container .container-animatable .container-inner .form input {\n          display: block;\n          width: 210px;\n          height: 38px;\n          line-height: 38px;\n          padding: 0 8px;\n          margin-bottom: 10px;\n          font-size: 18px;\n          border-radius: 16px;\n          background-color: #262626;\n          color: #DDD;\n          text-align: center;\n          -webkit-transition: width 250ms ease, border 350ms ease;\n          transition: width 250ms ease, border 350ms ease;\n          border: 1px solid transparent;\n          outline: 0; }\n  :host .container .container-animatable .container-inner .form input:last-of-type {\n            margin-bottom: 20px !important; }\n  :host .container .container-animatable .container-inner .form input:hover {\n            width: 225px; }\n  :host .container .container-animatable .container-inner .form input.ng-touched.ng-invalid {\n            border: 1px solid #d64444; }\n  :host .container .container-animatable .container-inner .form.allTouched input[type=text].ng-invalid,\n        :host .container .container-animatable .container-inner .form.allTouched input[type=password].ng-invalid {\n          border: 1px solid #d64444; }\n"

/***/ }),

/***/ "./src/app/main-entry/main-entry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainEntryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_other_validator__ = __webpack_require__("./src/app/main-entry/match-other-validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__socket_service__ = __webpack_require__("./src/app/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__local_user_service__ = __webpack_require__("./src/app/local-user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainEntryComponent = /** @class */ (function () {
    function MainEntryComponent(formBuilder, socketService, localUserService) {
        this.formBuilder = formBuilder;
        this.socketService = socketService;
        this.localUserService = localUserService;
        this.logInComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.animationDuration = 750;
        this.animating = true;
        this.titlePaddingBottom = 24;
        this.titleOffsetY = 0;
        this.titleCentered = true;
        this.contentVisible = false;
        this.registering = false;
        this.loginFormAllTouched = false;
        this.registerFormAllTouched = false;
        this.waiting = false;
        this.shaking = false;
        this.shakeDuration = 500; // Represents $shake-duration
        this.showCheckmark = false;
        this.loggedIn = false;
        this.createForms();
    }
    Object.defineProperty(MainEntryComponent.prototype, "title", {
        get: function () { return this.titleRef.nativeElement; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainEntryComponent.prototype, "container", {
        get: function () { return this.containerRef.nativeElement; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainEntryComponent.prototype, "suppressActions", {
        get: function () {
            return this.animating || this.waiting || this.shaking;
        },
        enumerable: true,
        configurable: true
    });
    MainEntryComponent.prototype.createForms = function () {
        var nameRegex = /^([a-zA-Z0-9\-_])*$/;
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.loginForm = this.formBuilder.group({
            name: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            password: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
        this.registerForm = this.formBuilder.group({
            name: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern(nameRegex)])],
            email: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern(emailRegex)])],
            password: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(8)])],
            confirmPassword: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, Object(__WEBPACK_IMPORTED_MODULE_2__match_other_validator__["a" /* matchOtherValidator */])("password")])]
        });
    };
    MainEntryComponent.prototype.calculateTitleOffset = function () {
        this.titleOffsetY = this.container.clientHeight / 2 +
            this.title.clientHeight / 2 +
            this.titlePaddingBottom;
    };
    MainEntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.calculateTitleOffset();
            _this.titleCentered = false; // Move title to top of form
            setTimeout(function () {
                _this.contentVisible = true; // Fade in form
                _this.animating = false; // Done animating
            }, _this.animationDuration);
        }, this.animationDuration);
    };
    MainEntryComponent.prototype.onClickRegister = function () {
        this.switchForm(true);
    };
    MainEntryComponent.prototype.onClickLogIn = function () {
        this.switchForm(false);
    };
    MainEntryComponent.prototype.onPasswordKeypress = function () {
        var _this = this;
        setTimeout(function () {
            _this.registerForm.get("confirmPassword")
                .updateValueAndValidity();
        }, 100);
    };
    MainEntryComponent.prototype.focusNext = function (e) {
        var element = event.srcElement.nextElementSibling;
        if (element)
            element.focus();
    };
    MainEntryComponent.prototype.shake = function () {
        var _this = this;
        this.shaking = true;
        setTimeout(function () {
            _this.shaking = false;
        }, this.shakeDuration);
    };
    MainEntryComponent.prototype.logIn = function () {
        var _this = this;
        if (this.suppressActions)
            return;
        this.loginFormAllTouched = true;
        if (this.loginForm.invalid)
            return;
        this.waiting = true;
        setTimeout(function () {
            var loginCreds = _this.loginForm.value;
            var observable = _this.socketService.logIn(loginCreds);
            var subscription = observable.subscribe(function (data) {
                _this.showCheckmark = data.success;
                subscription.unsubscribe();
                if (data.success) {
                    _this.finishLogIn(data);
                }
                else {
                    _this.waiting = false;
                    _this.loginFormAllTouched = false;
                    _this.loginForm.get("password").reset();
                    _this.loginForm.get("password").markAsUntouched();
                    _this.shake();
                }
            });
        }, this.animationDuration);
    };
    MainEntryComponent.prototype.register = function () {
        var _this = this;
        if (this.suppressActions)
            return;
        this.registerFormAllTouched = true;
        if (this.registerForm.invalid)
            return;
        this.waiting = true;
        setTimeout(function () {
            var registerCreds = _this.registerForm.value;
            var observable = _this.socketService.register(registerCreds);
            var subscription = observable.subscribe(function (data) {
                _this.showCheckmark = data.success;
                subscription.unsubscribe();
                if (data.success) {
                    _this.finishLogIn(data);
                }
                else {
                    _this.waiting = false;
                    _this.registerFormAllTouched = false;
                    _this.registerErrors = data.errors;
                    data.errors.forEach(function (error) {
                        console.log(error);
                        var field = _this.registerForm.get(error.field);
                        var fieldError = {};
                        fieldError[error.field] = error.text;
                        field.setErrors(fieldError);
                    });
                    _this.registerForm.get("password").reset();
                    _this.registerForm.get("password").markAsUntouched();
                    _this.registerForm.get("confirmPassword").reset();
                    _this.registerForm.get("confirmPassword").markAsUntouched();
                    _this.shake();
                }
            });
        }, this.animationDuration);
    };
    MainEntryComponent.prototype.finishLogIn = function (data) {
        var _this = this;
        setTimeout(function () {
            _this.localUserService.setLocalUser(data.user);
            _this.loggedIn = true;
            setTimeout(function () {
                _this.logInComplete.emit(null);
            }, _this.animationDuration);
        }, this.animationDuration);
    };
    MainEntryComponent.prototype.switchForm = function (registering) {
        var _this = this;
        if (this.suppressActions)
            return;
        this.animating = true;
        this.contentVisible = false; // Fade out form
        setTimeout(function () {
            _this.titleCentered = true; // Re-center title
            setTimeout(function () {
                _this.registerErrors = null;
                _this.registering = registering; // Display correct form
                if (registering) {
                    _this.registerForm.reset();
                    _this.registerFormAllTouched = false;
                }
                else {
                    _this.loginForm.reset();
                    _this.loginFormAllTouched = false;
                }
                setTimeout(function () {
                    _this.calculateTitleOffset();
                    _this.titleCentered = false;
                    setTimeout(function () {
                        _this.contentVisible = true; // Fade in form
                        _this.animating = false;
                    }, _this.animationDuration);
                }, _this.animationDuration);
            }, _this.animationDuration);
        }, this.animationDuration);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("title"),
        __metadata("design:type", Object)
    ], MainEntryComponent.prototype, "titleRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("container"),
        __metadata("design:type", Object)
    ], MainEntryComponent.prototype, "containerRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], MainEntryComponent.prototype, "logInComplete", void 0);
    MainEntryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-entry',
            template: __webpack_require__("./src/app/main-entry/main-entry.component.html"),
            styles: [__webpack_require__("./src/app/main-entry/main-entry.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_4__local_user_service__["a" /* LocalUserService */]])
    ], MainEntryComponent);
    return MainEntryComponent;
}());



/***/ }),

/***/ "./src/app/main-entry/match-other-validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = matchOtherValidator;
function matchOtherValidator(otherControlName) {
    return function (control) {
        try {
            var match = control.value == control.parent.get(otherControlName).value;
            return match ? null : { "matchOtherValidator": { value: control.value } };
        }
        catch (_a) {
            return { "matchOtherValidator": { value: control.value } };
        }
    };
}


/***/ }),

/***/ "./src/app/main-options/main-options.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [ngStyle]=\"{\n\tboxShadow: shadowOpacity ? ('0 0 20px 0px rgba(0, 0, 0, ' + shadowOpacity + ')') : ''\n}\">\n\t<div class=\"container-inner\">\n\t\t<div class=\"topbar\">\n\t\t\t<h1>Options</h1>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/main-options/main-options.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .container {\n  width: 20vw;\n  min-width: 300px;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  white-space: nowrap; }\n  :host .container .container-inner {\n    height: 100%;\n    background-color: #333;\n    overflow: hidden; }\n  :host .container .container-inner .topbar {\n      width: 100%;\n      height: 40px;\n      background-color: #444;\n      font-size: 0;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n      -webkit-touch-callout: none;\n      -ms-text-size-adjust: none;\n      -webkit-text-size-adjust: none;\n      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n      -webkit-user-drag: none;\n      -khtml-user-drag: none;\n      -moz-user-drag: none;\n      -o-user-drag: none;\n      user-drag: none;\n      text-align: center; }\n  :host .container .container-inner .topbar h1 {\n        display: inline-block;\n        font-size: 16px;\n        line-height: 40px; }\n"

/***/ }),

/***/ "./src/app/main-options/main-options.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainOptionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainOptionsComponent = /** @class */ (function () {
    function MainOptionsComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], MainOptionsComponent.prototype, "shadowOpacity", void 0);
    MainOptionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-options',
            template: __webpack_require__("./src/app/main-options/main-options.component.html"),
            styles: [__webpack_require__("./src/app/main-options/main-options.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainOptionsComponent);
    return MainOptionsComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main-entry *ngIf=\"!loggedIn\"\n(setLocalUser)=\"onSetLocalUser($event)\"\n(logInComplete)=\"onLogInComplete($event)\"\n></app-main-entry>\n\n<app-main-contacts\n*ngIf=\"localUserService.valid\"\n(cancelDrag)=\"onCancelDrag()\"\n[shadowOpacity]=\"mobile ? sidebars.contacts.progress : 0.5\"\n[class.animating]=\"!mobile && sidebars.contacts.animating\"\n[class.visible]=\"!mobile && sidebars.contacts.visible\"\n[class.hidden]=\"!mobile && !sidebars.contacts.visible\"\n[ngStyle]=\"{\n\twidth: mobile ? 0 : '',\n\ttransform: mobile ? 'translateX(' + (sidebars.minWidth * sidebars.contacts.progress) + 'px)' : '',\n\ttransition: (mobile && sidebars.contacts.animating) ? ('transform ' + sidebars.contacts.animationDuration + 'ms ease') : ''\n}\">\n</app-main-contacts>\n\n<app-main-chat \n(toggleSidebar)=\"onToggleSidebar($event)\"\n(hideSidebars)=\"hideSidebar('contacts', true); hideSidebar('options', true);\"\n[sidebars]=\"sidebars\">\n</app-main-chat>\n\n<app-main-options\n[shadowOpacity]=\"mobile ? sidebars.options.progress : 0.5\"\n[class.animating]=\"!mobile && sidebars.options.animating\"\n[class.visible]=\"!mobile && sidebars.options.visible\"\n[class.hidden]=\"!mobile && !sidebars.options.visible\"\n[ngStyle]=\"{\n\twidth: mobile ? 0 : '',\n\ttransform: mobile ? 'translateX(-' + (sidebars.minWidth * sidebars.options.progress) + 'px)' : '',\n\ttransition: (mobile && sidebars.options.animating) ? ('transform ' + sidebars.options.animationDuration + 'ms ease') : ''\n}\">\n</app-main-options>\n"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100vw;\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  background-color: #262626; }\n  :host app-main-chat {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  :host app-main-contacts,\n  :host app-main-options {\n    width: 20vw; }\n  @media (max-width: 1500px) {\n      :host app-main-contacts,\n      :host app-main-options {\n        width: 300px; } }\n  :host .animating {\n    -webkit-transition: width 400ms ease;\n    transition: width 400ms ease; }\n  :host .visible {\n    width: 20vw; }\n  @media (max-width: 1500px) {\n      :host .visible {\n        width: 300px; } }\n  :host .hidden {\n    width: 0; }\n  @media (max-width: 768px) {\n    :host {\n      display: block; }\n      :host app-main-contacts,\n      :host app-main-options {\n        position: absolute;\n        height: 100vh;\n        z-index: 32; }\n      :host app-main-contacts {\n        left: 0;\n        top: 0; }\n      :host app-main-options {\n        right: 0;\n        top: 0; }\n      :host app-main-chat {\n        width: 100vw; } }\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_user_service__ = __webpack_require__("./src/app/local-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__screen_size_service__ = __webpack_require__("./src/app/screen-size.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = /** @class */ (function () {
    function MainComponent(localUserService, screenSizeService) {
        this.localUserService = localUserService;
        this.screenSizeService = screenSizeService;
        this.loggedIn = false;
        this.mobile = (window.innerWidth <= 768);
        this.sidebars = {
            // animationDuration must match
            // $sidebar-animation-duration in global.scss
            animationDuration: 400,
            minWidth: 300,
            dragLock: false,
            contacts: {
                visible: (!this.mobile),
                animating: false,
                animationDuration: 400,
                progress: (this.mobile ? 0 : 1),
                dragging: false,
                draggingOut: false,
                dragStartX: 0
            },
            options: {
                visible: false,
                animating: false,
                animationDuration: 400,
                progress: 0,
                dragging: false,
                draggingOut: false,
                dragStartX: 0
            }
        };
    }
    MainComponent.prototype.onLogInComplete = function () {
        this.loggedIn = true;
    };
    MainComponent.prototype.animateSidebar = function (sidebar, duration) {
        var _this = this;
        this.sidebars[sidebar].animating = true;
        this.sidebars[sidebar].animationDuration =
            duration || this.sidebars.animationDuration;
        setTimeout(function () {
            _this.sidebars[sidebar].animating = false;
        }, this.sidebars[sidebar].animationDuration);
    };
    MainComponent.prototype.hideSidebar = function (sidebar, animate) {
        this.sidebars[sidebar].visible = false;
        this.sidebars[sidebar].progress = 0;
        if (animate) {
            this.animateSidebar(sidebar);
        }
    };
    MainComponent.prototype.showSidebar = function (sidebar, animate) {
        this.sidebars[sidebar].visible = true;
        this.sidebars[sidebar].progress = 1;
        if (animate) {
            this.animateSidebar(sidebar);
        }
        if (this.mobile) {
            var otherSidebar = (sidebar == "contacts" ? "options" : "contacts");
            if (this.sidebars[otherSidebar].visible) {
                this.hideSidebar(otherSidebar);
            }
        }
    };
    MainComponent.prototype.onToggleSidebar = function (sidebar) {
        if (this.sidebars[sidebar].animating)
            return;
        if (this.sidebars[sidebar].visible) {
            this.hideSidebar(sidebar, true);
        }
        else {
            this.showSidebar(sidebar, true);
        }
    };
    MainComponent.prototype.onResize = function () {
        this.screenSizeService.resize(window.innerWidth);
        if (!this.mobile && this.screenSizeService.mobile) {
            this.hideSidebar("contacts");
            this.hideSidebar("options");
        }
        this.mobile = this.screenSizeService.mobile;
    };
    MainComponent.prototype.onTouchMove = function (e) {
        var _this = this;
        if (!this.mobile || this.sidebars.dragLock)
            return;
        var touch = e.touches.item(0);
        if (!touch)
            return;
        if (this.sidebars.contacts.visible) {
            if (this.sidebars.contacts.dragging) {
                var progress = this.sidebars.contacts.dragStartX;
                progress -= touch.pageX;
                progress /= this.sidebars.minWidth;
                progress = Math.min(Math.max(progress, 0), 1);
                progress = 1 - progress;
                this.sidebars.contacts.progress = progress;
            }
            else if (touch.pageX <= this.sidebars.minWidth) {
                this.sidebars.contacts.dragging = true;
                this.sidebars.contacts.draggingOut = false;
                this.sidebars.contacts.dragStartX = touch.pageX;
            }
        }
        else if (this.sidebars.options.visible) {
            if (this.sidebars.options.dragging) {
                var progress = touch.pageX;
                progress -= this.sidebars.options.dragStartX;
                progress /= this.sidebars.minWidth;
                progress = Math.min(Math.max(progress, 0), 1);
                progress = 1 - progress;
                this.sidebars.options.progress = progress;
            }
            else if (touch.pageX >= (window.innerWidth - this.sidebars.minWidth)) {
                this.sidebars.options.dragging = true;
                this.sidebars.options.draggingOut = false;
                this.sidebars.options.dragStartX = touch.pageX;
            }
        }
        else {
            var handleWidth = 64;
            var startDrag = function (sidebar) {
                var dragStartX = (sidebar == "contacts") ?
                    _this.sidebars.minWidth : window.innerWidth - _this.sidebars.minWidth;
                _this.sidebars[sidebar].visible = true;
                _this.sidebars[sidebar].dragging = true;
                _this.sidebars[sidebar].draggingOut = true;
                _this.sidebars[sidebar].dragStartX = dragStartX;
                _this.sidebars[sidebar].progress = 0;
            };
            if (touch.pageX <= handleWidth) {
                startDrag('contacts');
            }
            else if (touch.pageX >= window.innerWidth - handleWidth) {
                startDrag('options');
            }
        }
    };
    MainComponent.prototype.onTouchEnd = function (e) {
        var sidebar;
        if (this.sidebars.contacts.dragging) {
            sidebar = "contacts";
        }
        else if (this.sidebars.options.dragging) {
            sidebar = "options";
        }
        if (sidebar) {
            this.sidebars[sidebar].dragging = false;
            var threshold = this.sidebars[sidebar].draggingOut ? 0.25 : 0.75;
            if (this.sidebars[sidebar].progress < threshold) {
                this.animateSidebar(sidebar, this.sidebars[sidebar].progress * this.sidebars.animationDuration);
                this.sidebars[sidebar].visible = false;
                this.sidebars[sidebar].progress = 0;
            }
            else {
                this.animateSidebar(sidebar, (1 - this.sidebars[sidebar].progress) * this.sidebars.animationDuration);
                this.sidebars[sidebar].visible = true;
                this.sidebars[sidebar].progress = 1;
            }
        }
        this.sidebars.dragLock = false;
    };
    MainComponent.prototype.onCancelDrag = function () {
        this.sidebars.dragLock = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MainComponent.prototype, "onResize", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])("touchmove", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MainComponent.prototype, "onTouchMove", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])("touchend", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MainComponent.prototype, "onTouchEnd", null);
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("./src/app/main/main.component.html"),
            styles: [__webpack_require__("./src/app/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__local_user_service__["a" /* LocalUserService */],
            __WEBPACK_IMPORTED_MODULE_2__screen_size_service__["a" /* ScreenSizeService */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/screen-size.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScreenSizeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScreenSizeService = /** @class */ (function () {
    function ScreenSizeService() {
    }
    Object.defineProperty(ScreenSizeService.prototype, "mobile", {
        get: function () {
            return this.screenWidth <= 768;
        },
        enumerable: true,
        configurable: true
    });
    ScreenSizeService.prototype.resize = function (width) {
        this.screenWidth = width;
    };
    ScreenSizeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ScreenSizeService);
    return ScreenSizeService;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__local_user_service__ = __webpack_require__("./src/app/local-user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocketService = /** @class */ (function () {
    function SocketService(localUserService) {
        this.localUserService = localUserService;
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__({ transports: ["websocket"] });
    }
    SocketService.prototype.sendPing = function () {
        this.socket.emit("ping", { data: 1 });
    };
    SocketService.prototype.logIn = function (creds) {
        var _this = this;
        this.socket.emit("login request", creds);
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on("login response", function (data) {
                observer.next(data);
            });
        });
    };
    SocketService.prototype.register = function (creds) {
        var _this = this;
        this.socket.emit("register request", creds);
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on("register response", function (data) {
                observer.next(data);
            });
        });
    };
    SocketService.prototype.getContactList = function (authCreds) {
        var _this = this;
        this.socket.emit("contacts request", authCreds);
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on("contacts response", function (data) {
                observer.next(data);
            });
        });
    };
    SocketService.prototype.search = function (query) {
        var _this = this;
        this.socket.emit("search request", query);
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on("search response", function (data) {
                observer.next(data);
            });
        });
    };
    SocketService.prototype.addFriend = function (invite) {
        this.socket.emit("friend add", invite);
    };
    SocketService.prototype.removeFriend = function (invite) {
        this.socket.emit("friend remove", invite);
    };
    SocketService.prototype.acceptInvitation = function (invite) {
        this.socket.emit("friend invite accept", invite);
    };
    SocketService.prototype.rejectInvitation = function (invite) {
        this.socket.emit("friend invite reject", invite);
    };
    SocketService.prototype.changeStatus = function (status) {
        this.socket.emit("status", {
            authCreds: this.localUserService.authCreds(),
            status: status
        });
    };
    SocketService.prototype.onFriendAdded = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on("dispatch friend added", function (data) {
                observer.next(data);
            });
        });
    };
    SocketService.prototype.onFriendRemoved = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on("dispatch friend removed", function (data) {
                observer.next(data);
            });
        });
    };
    SocketService.prototype.onInvitationAccepted = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on("dispatch friend accepted", function (data) {
                observer.next(data);
            });
        });
    };
    SocketService.prototype.onInvitationRejected = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on("dispatch friend rejected", function (data) {
                observer.next(data);
            });
        });
    };
    SocketService.prototype.onStatusChanged = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on("dispatch status", function (data) {
                observer.next(data);
            });
        });
    };
    SocketService.prototype.onMessageReceived = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on("dispatch message", function (data) {
                observer.next(data);
            });
        });
    };
    SocketService.prototype.sendMessage = function (message) {
        this.socket.emit("message", message);
    };
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__local_user_service__["a" /* LocalUserService */]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map