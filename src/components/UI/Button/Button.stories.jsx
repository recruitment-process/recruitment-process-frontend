import Button from './Button';

export default {
	title: 'Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		text: {
			name: 'Название кнопки',
		},
		disabled: {
			name: 'Состояние кнопки',
		},
		size: {
			name: 'Размер кнопки',
		},
		isVisibleIcon: {
			name: 'Наличие иконки',
		},
		type: {
			name: 'Тип кнопки',
		},
	},
};

export const Primary = {
	args: {
		text: 'ДЕМО',
		disabled: false,
		size: 'normal',
		isVisibleIcon: false,
		type: 'button',
	},
};
