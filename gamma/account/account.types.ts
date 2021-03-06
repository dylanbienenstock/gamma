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

export interface AuthResult {
	valid: boolean;
	user?: any;
}

export interface AuthCreds {
	id: string;
	authToken: string;
}

export interface SearchQuery {
	authCreds: AuthCreds;
	text: string;
	limit?: number;
	offset?: number;
}

export interface Contact {
	id: string;
	name: string;
	status?: string;
	isSelf?: boolean; // It's me!
	isFriend?: boolean; // Invited to friends list
	isConfirmed?: boolean; // Accepted invitation
	isRequesting?: boolean; // Sent me an invitation
}

export interface ContactList {
	contacts?: Contact[];
}

export interface FriendInviteRequest {
	authCreds: AuthCreds;
	contact: Contact;
}