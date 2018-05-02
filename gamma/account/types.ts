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
	authToken?: string;
}

export interface RegisterResponse {
	success: boolean;
	user?: any;
	authToken?: string;
	errors?: RegisterError[];
}

export interface RegisterError {
	field: string;
	text: string;
}