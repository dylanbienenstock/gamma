export interface LogInCreds {
	name: string;
	password: string;
}

export interface RegisterCreds {
	name: string;
	email: string;
	password: string;
}

export interface RegisterResponse {
	success: boolean,
	user?: any,
	errors?: string[]
}