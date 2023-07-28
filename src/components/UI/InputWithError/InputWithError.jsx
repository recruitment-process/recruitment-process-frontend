import { useEffect, useState } from 'react';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './InputWithError.scss';

const InputWithError = ({
	control,
	label,
	inputId,
	inputType,
	formName,
	placeholder,
	isDisabled,
	isAutocomplete,
	withButton,
	isSlim,
	validationRules,
}) => {
	const [isPasswordVisible, setPasswordVisible] = useState(false);
	const [labelText, setLabelText] = useState('');
	const {
		field,
		fieldState: { error },
	} = useController({
		name: inputId,
		control,
		defaultValue: '',
		rules: validationRules,
	});

	const handlePasswordShownClick = () => {
		setPasswordVisible(!isPasswordVisible);
	};

	const handleFocus = () => {
		setLabelText(placeholder);
	};

	const handleBlur = () => {
		if (label) {
			setLabelText(label);
		} else {
			setLabelText('');
		}
	};

	// SETS THE LABEL TEXT IF IT IS PASSED BY A PROP
	useEffect(() => {
		if (label) {
			setLabelText(label);
		}
	}, [label]);

	return (
		<label className="input" htmlFor={inputId}>
			<span className={clsx('input__label')}>{labelText}</span>
			<input
				className={clsx(
					'input__field',
					`input__field_type_${inputId}`,
					{
						input__field_type_error: error?.message,
					},
					{ input__field_style_slim: isSlim }
				)}
				id={inputId}
				type={
					inputType === 'password' && isPasswordVisible ? 'text' : inputType
				}
				form={formName}
				placeholder={placeholder}
				disabled={isDisabled}
				autoComplete={isAutocomplete ? 'on' : 'off'}
				name={field.name}
				onChange={field.onChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
				value={field.value}
			/>
			{withButton && (
				<button
					className={clsx(
						'input__btn',
						{
							input__btn_active: isPasswordVisible,
						},
						{ input__btn_disabled: isDisabled }
					)}
					type="button"
					onClick={handlePasswordShownClick}
					aria-label={isPasswordVisible ? 'Скрыть пароль' : 'Показать пароль'}
				/>
			)}
			<span
				className={clsx('input__caption', {
					input__caption_type_error: error?.message,
				})}
			>
				{error?.message}
			</span>
		</label>
	);
};

InputWithError.propTypes = {
	control: PropTypes.shape({}),
	label: PropTypes.string,
	inputId: PropTypes.string.isRequired,
	inputType: PropTypes.string.isRequired,
	formName: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	isDisabled: PropTypes.bool.isRequired,
	isAutocomplete: PropTypes.bool,
	withButton: PropTypes.bool,
	isSlim: PropTypes.bool,
	validationRules: PropTypes.shape({}),
};

InputWithError.defaultProps = {
	control: {},
	label: '',
	placeholder: '',
	isAutocomplete: false,
	withButton: false,
	isSlim: false,
	validationRules: {},
};

export default InputWithError;
