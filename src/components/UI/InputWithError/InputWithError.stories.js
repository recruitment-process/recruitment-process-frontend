import { useForm } from 'react-hook-form';

import InputWithError from './InputWithError';

export default {
	title: 'Input with error',
	component: InputWithError,
	tags: ['autodocs'],
	argTypes: {
		label: {
			description: 'Текст тега label.',
		},
		inputId: {
			description:
				'ID элемента input. Также используется в хуке useController для присвоения атрибута name тега input, и в атрибуте htmlFor тега label.',
		},
		inputType: {
			description: 'Определяет тип тега input.',
		},
		formName: {
			description: 'Определяет к какой форме относится тег input.',
		},
		placeholder: {
			description: 'Текст плэйсхолдера.',
		},
		isDisabled: {
			description: 'Определяет состояние disabled.',
		},
		isAutocomplete: {
			description: 'Определяет включено ли автозаполнение данных.',
		},
		withButton: {
			description: 'Определяет есть ли кнопка для показа пароля в теге input.',
		},
		isSlim: {
			description: 'Определяет стиль отрисовки (короткий\\высокий).',
		},
		validationRules: {
			description: 'Объект с правилами валидации.',
		},
		control: {
			description: 'Объект управляемой формы хука useForm.',
		},
	},
};

const Template = (args) => {
	const { control } = useForm({ mode: 'all' });

	return <InputWithError control={control} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	label: 'Username',
	inputId: 'username',
	inputType: 'text',
	formName: 'loginForm',
	placeholder: 'Enter your username',
	isDisabled: false,
	isAutocomplete: true,
	withButton: false,
	isSlim: false,
	validationRules: {},
};

export const Password = Template.bind({});
Password.args = {
	label: 'Password',
	inputId: 'password',
	inputType: 'password',
	formName: 'loginForm',
	placeholder: 'Enter your password',
	isDisabled: false,
	isAutocomplete: false,
	withButton: true,
	isSlim: false,
	validationRules: {
		required: 'Поле должно быть заполнено',
		minLength: {
			value: 6,
			message: 'Минимальное количество символов: 6',
		},
		maxLength: {
			value: 20,
			message: 'Максимальное количество символов: 20',
		},
	},
};

export const Email = Template.bind({});
Email.args = {
	label: 'Email',
	inputId: 'email',
	inputType: 'text',
	formName: 'signupForm',
	placeholder: 'Enter your email',
	isDisabled: false,
	isAutocomplete: true,
	withButton: false,
	isSlim: false,
	validationRules: {
		required: 'Поле должно быть заполнено',
		validate: (value) => {
			if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
				return 'Необходимо указать e-mail в формате name@domain.zone';
			}
			return '';
		},
	},
};

export const Search = Template.bind({});
Search.args = {
	label: 'Search',
	inputId: 'search',
	inputType: 'search',
	formName: 'searchForm',
	placeholder: 'Поиск',
	isDisabled: false,
	isAutocomplete: true,
	withButton: false,
	isSlim: false,
	validationRules: {},
};

export const FilterSearch = Template.bind({});
FilterSearch.args = {
	label: 'FilterSearch',
	inputId: 'filter-search',
	inputType: 'filter-search',
	formName: 'filterSearchForm',
	placeholder: 'Поиск',
	isDisabled: false,
	isAutocomplete: true,
	withButton: false,
	isSlim: false,
	validationRules: {},
};
