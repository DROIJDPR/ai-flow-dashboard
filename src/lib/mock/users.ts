import type { User } from '$lib/types/user';

export const users: User[] = [
	{
		id: '1',
		name: 'John Doe',
		email: 'john@aiflow.com',
		role: 'Admin',
		status: 'Active'
	},
	{
		id: '2',
		name: 'Sarah Smith',
		email: 'sarah@aiflow.com',
		role: 'Manager',
		status: 'Pending'
	},
	{
		id: '3',
		name: 'Mike Brown',
		email: 'mike@aiflow.com',
		role: 'User',
		status: 'Offline'
	},
	{
		id: '4',
		name: 'Emma Wilson',
		email: 'emma@aiflow.com',
		role: 'User',
		status: 'Active'
	}
];