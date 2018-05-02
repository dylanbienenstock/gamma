export interface LogInCreds {
	name: string;
	password: string;
}

export interface RegisterCreds {
	name: string;
	email: string;
	password: string;
}

export interface LogInResponse {
	success: boolean;
	user?: any;
}

export interface RegisterResponse {
	success: boolean;
	user?: any;
	errors?: RegisterError[];
}

export interface RegisterError {
	field: string;
	text: string;
}