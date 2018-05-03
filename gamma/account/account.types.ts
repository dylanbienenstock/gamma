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

export interface SearchResult {
	id: string;
	name: string;
	isSelf: boolean;
	isFriend: boolean;
}

export interface SearchResponse {
	results?: SearchResult[];
}

export interface FriendInviteResponse {
	success: boolean;
	friendInvite?: FriendInvite;
}

export interface FriendInvite {
	id: string;
	name: string;
}