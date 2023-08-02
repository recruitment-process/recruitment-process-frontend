import Header from './Header';

export default {
	title: 'Header',
	component: Header,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
};

export const LoggedIn = {
	args: {
		user: {
			name: 'Ольга Филимонова',
			job: 'HR-менеджер',
		},
	},
};
