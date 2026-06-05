export interface Agent {
	id: string;
	name: string;
	status: 'Running' | 'Idle' | 'Offline';
	tasks: number;
}