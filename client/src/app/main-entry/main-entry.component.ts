import { Component, OnInit, ViewChild, Output, EventEmitter, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { matchOtherValidator } from './match-other-validator';
import { SocketService } from '../socket.service';
import { LogInCreds, LogInResponse, RegisterCreds, RegisterResponse, RegisterError } from '../../../../gamma/account/account.types';
import { LocalUserService } from '../local-user.service';
import { NativeService } from '../native.service';

@Component({
	selector: 'app-main-entry',
	templateUrl: './main-entry.component.html',
	styleUrls: ['./main-entry.component.scss']
})
export class MainEntryComponent implements OnInit {
	constructor(private formBuilder: FormBuilder,
				private socketService: SocketService,
				private localUserService: LocalUserService) {

		this.createForms();
	}

	@ViewChild("title") titleRef;
	public get title(): HTMLHeadingElement { return this.titleRef.nativeElement; }

	@ViewChild("container") containerRef;
	public get container(): HTMLHeadingElement { return this.containerRef.nativeElement; }

	@Output() logInComplete: EventEmitter<any> = new EventEmitter<any>();
	
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
	public registerErrors: RegisterError[];

	public waiting: boolean = false;
	public shaking: boolean = false;
	public shakeDuration: number = 500; // Represents $shake-duration
	public showCheckmark: boolean = false;
	public loggedIn: boolean = false;

	private get suppressActions() {
		return this.animating || this.waiting || this.shaking;
	}

	createForms(): void {
		let nameRegex: RegExp = /^([a-zA-Z0-9\-_])*$/;
		let emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		this.loginForm = this.formBuilder.group({
			name: ["", Validators.required],
			password: ["", Validators.required]
		});

		this.registerForm = this.formBuilder.group({
			name: ["", Validators.compose([Validators.required, Validators.pattern(nameRegex)])],
			email: ["", Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
			password: ["", Validators.compose([Validators.required, Validators.minLength(8)])],
			confirmPassword: ["", Validators.compose([Validators.required, matchOtherValidator("password")])]
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

	onPasswordKeypress() {
		setTimeout(() => {
			this.registerForm.get("confirmPassword")
				.updateValueAndValidity();
		}, 100);
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
				this.showCheckmark = data.success;

				subscription.unsubscribe();

				if (data.success) {
					this.finishLogIn(data);
				} else {
					this.waiting = false;
					this.loginFormAllTouched = false;

					this.loginForm.get("password").reset();
					this.loginForm.get("password").markAsUntouched();
					
					this.shake();
				}
			});			
		}, this.animationDuration);

	}

	register() {
		if (this.suppressActions) return;

		this.registerFormAllTouched = true;

		if (this.registerForm.invalid) return;

		this.waiting = true;

		setTimeout(() => {
			let registerCreds = this.registerForm.value as RegisterCreds;
			let observable = this.socketService.register(registerCreds);

			let subscription = observable.subscribe((data: RegisterResponse) => {
				this.showCheckmark = data.success;

				subscription.unsubscribe();

				if (data.success) {
					this.finishLogIn(data);
				} else {
					this.waiting = false;
					this.registerFormAllTouched = false;
					this.registerErrors = data.errors;

					data.errors.forEach(error => {
						console.log(error);
						let field = this.registerForm.get(error.field);
						let fieldError = {};
						fieldError[error.field] = error.text;

						field.setErrors(fieldError);
					});

					this.registerForm.get("password").reset();
					this.registerForm.get("password").markAsUntouched();
					this.registerForm.get("confirmPassword").reset();
					this.registerForm.get("confirmPassword").markAsUntouched();

					this.shake();
				}
			});
		}, this.animationDuration);
	}

	finishLogIn(data: any) {
		setTimeout(() => {
			this.localUserService.setLocalUser(data.user);
			this.loggedIn = true;

			setTimeout(() => {
				this.logInComplete.emit(null);

			}, this.animationDuration);
		}, this.animationDuration);
	}

	switchForm(registering: boolean) {
		if (this.suppressActions) return;

		this.animating = true;
		this.contentVisible = false; // Fade out form

		setTimeout(() => {
			this.titleCentered = true; // Re-center title

			setTimeout(() => {
				this.registerErrors = null;			
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
