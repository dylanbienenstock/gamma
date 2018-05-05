export interface UserState {
	id: string;
	name: string;
	friendIds: string[]; // Only confirmed friends
}