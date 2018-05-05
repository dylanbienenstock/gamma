export interface UserState {
	id: string;
	name: string;
	loggedIn: boolean;
	friendIds: string[]; // Only confirmed friends
}