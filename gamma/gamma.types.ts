export interface GammaConfig {
	database: string;
}

export interface Message {
	text: string;
	senderId?: string;
	recipientId?: string;
	timestamps?: {
		sent?: number;
		received?: number;
	};

	// Graphics properties
	animated?: boolean;
	animationProgress?: number;
	animationStartTime?: number;
	visible?: boolean;
}