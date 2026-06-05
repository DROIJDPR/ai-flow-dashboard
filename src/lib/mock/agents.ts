import type { Agent } from '$lib/types/agent';

export const agents: Agent[] = [
	{
		id: '1',
		name: 'Support GPT',
		status: 'Running',
		tasks: 1248
	},
	{
		id: '2',
		name: 'Sales Assistant',
		status: 'Idle',
		tasks: 843
	},
	{
		id: '3',
		name: 'Marketing Agent',
		status: 'Offline',
		tasks: 521
	}
];