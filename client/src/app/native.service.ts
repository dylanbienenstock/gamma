export interface NativeService {
	platform: string;
	
	promptServerURL(callback: Function);
}
