import { useForm } from 'react-hook-form';

import './TempFormWithInputs.scss';

import InputWithError from '../../components/UI/InputWithError/InputWithError';
import Button from '../../components/UI/Button/Button';

const validationRules = {
	password: {
		required: 'Поле должно быть заполнено',
		minLength: {
			value: 6,
			message: 'Минимальное количество символов: 6',
		},
		maxLength: {
			value: 128,
			message: 'Максимальное количество символов: 128',
		},
	},
	email: {
		required: 'Поле должно быть заполнено',
		validate: (value) =>
			/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) === true ||
			'Необходимо указать e-mail в формате name@domain.zone',
	},
};

const TempFormWithInputs = () => {
	// HOOKS
	const {
		control,
		handleSubmit,
		formState: { isValid },
	} = useForm({ mode: 'all' });

	// HANDLER SUBMIT
	function onSubmit(data) {
		console.log(data);
	}

	return (
		<form
			className="form"
			name="registration"
			id="registration"
			action="#"
			noValidate
			onSubmit={handleSubmit(onSubmit)}
		>
			<InputWithError
				control={control}
				label="Логин"
				inputId="email"
				inputType="email"
				formName="registration"
				placeholder="Введите email"
				isDisabled={false}
				withSpan
				isAutocomplete
				type="email"
				border="radius"
				validationRules={validationRules.email}
			/>
			<InputWithError
				control={control}
				label="Пароль"
				inputId="password"
				inputType="password"
				formName="registration"
				placeholder="Введите пароль"
				isDisabled={false}
				withSpan
				withButton
				type="password"
				border="radius"
				validationRules={validationRules.password}
			/>
			<InputWithError
				control={control}
				label="Поиск"
				inputId="search"
				inputType="search"
				formName="registration"
				placeholder="Введите запрос"
				isDisabled={false}
				isAutocomplete
				type="search"
				border="normal"
			/>
			<InputWithError
				control={control}
				label="Поиск"
				inputId="search-header"
				inputType="search"
				formName="registration"
				placeholder="Введите запрос"
				isDisabled={false}
				isAutocomplete
				isSlim
				type="search-header"
			/>
			<InputWithError
				control={control}
				label="Поиск"
				inputId="text"
				inputType="text"
				formName="registration"
				placeholder="От"
				isDisabled={false}
				isAutocomplete
				isSlim
				type="text"
				border="radius"
			/>
			<Button
				text="Зарегистрироваться"
				disabled={!isValid}
				size="normal"
				type="submit"
			/>
		</form>
	);
};

export default TempFormWithInputs;
