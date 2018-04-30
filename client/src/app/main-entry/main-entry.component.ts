import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { matchOtherValidator } from './match-other-validator';
import { SocketService } from '../socket.service';
import { LogInCreds, LogInResponse } from '../../../../gamma/account/types';

@Component({
	selector: 'app-main-entry',
	templateUrl: './main-entry.component.html',
	styleUrls: ['./main-entry.component.scss']
})
export class MainEntryComponent implements OnInit {
	constructor(private _formBuilder: FormBuilder,
				private socketService: SocketService) {

		this.createForms();
	}

	@ViewChild("title") titleRef;
	public get title(): HTMLHeadingElement { return this.titleRef.nativeElement; }

	@ViewChild("container") containerRef;
	public get container(): HTMLHeadingElement { return this.containerRef.nativeElement; }

	@Output() logInComplete: EventEmitter<string> = new EventEmitter<string>();
	
	private animationDuration: number = 750;
	private animating: boolean = true;
	private titlePaddingBottom: number = 24;
	public titleOffsetY: number = 0;
	public titleCentered: boolean = true;
	public contentVisible: boolean = false;
	public registering: boolean = false;

	public loginForm: FormGroup;
	public registerForm: FormGroup;
	public loginFormAllTouched: boolean = false;
	public registerFormAllTouched: boolean = false;

	public waiting: boolean = false;
	public shaking: boolean = false;
	public shakeDuration: number = 500; // Represents $shake-duration
	public loggedIn: boolean = false;

	private get suppressActions() {
		return this.animating || this.waiting || this.shaking;
	}

	createForms(): void {
		let emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		this.loginForm = this._formBuilder.group({
			name: ["", Validators.required],
			password: ["", Validators.required]
		});

		this.registerForm = this._formBuilder.group({
			name: ["", Validators.required],
			email: ["", Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
			password: ["", Validators.required],
			confirmPassword: ["", Validators.required, matchOtherValidator("password")],
		});
	}

	calculateTitleOffset(): void {
		this.titleOffsetY = this.container.clientHeight / 2 +
			this.title.clientHeight / 2 +
			this.titlePaddingBottom;
	}

	ngOnInit() {
		setTimeout(() => {
			this.calculateTitleOffset();

			this.titleCentered = false; // Move title to top of form

			setTimeout(() => {
				this.contentVisible = true; // Fade in form
				this.animating = false; // Done animating
				
			}, this.animationDuration);
		}, this.animationDuration);
	}

	onClickRegister() {
		this.switchForm(true);
	}

	onClickLogIn() {
		this.switchForm(false);
	}

	focusNext(e) {
		let element = event.srcElement.nextElementSibling as HTMLElement;

		if (element) element.focus();
	}

	shake() {
		this.shaking = true;

		setTimeout(() => {
			this.shaking = false;
		}, this.shakeDuration);
	}

	logIn() {
		if (this.suppressActions) return;

		this.loginFormAllTouched = true;

		if (this.loginForm.invalid) return;		

		this.waiting = true;

		setTimeout(() => {
			let loginCreds = this.loginForm.value as LogInCreds;
			let observable = this.socketService.logIn(loginCreds);

			let subscription = observable.subscribe((data: LogInResponse) => {
				this.waiting = false;
				this.loggedIn = data.success;

				subscription.unsubscribe();

				if (data.success) {
					setTimeout(() => {
						this.logInComplete.emit(data.authToken);
					}, this.animationDuration);
				} else {
					this.loginForm.get("password").reset();
					this.loginForm.get("password").markAsUntouched();
					this.loginFormAllTouched = false;

					this.shake();
				}
			});			
		}, this.animationDuration);

	}

	register() {
		this.registerFormAllTouched = true;
	}

	switchForm(registering: boolean) {
		if (this.suppressActions) return;

		this.animating = true;
		this.contentVisible = false; // Fade out form

		setTimeout(() => {
			this.titleCentered = true; // Re-center title

			setTimeout(() => {
				this.registering = registering; // Display correct form

				if (registering) {
					this.registerForm.reset();	
					this.registerFormAllTouched = false;			
				} else {
					this.loginForm.reset();
					this.loginFormAllTouched = false;
				}

				setTimeout(() => {
					this.calculateTitleOffset();

					this.titleCentered = false;

					setTimeout(() => {
						this.contentVisible = true; // Fade in form
						this.animating = false;

					}, this.animationDuration);
				}, this.animationDuration);
			}, this.animationDuration);
		}, this.animationDuration);
	}
}
