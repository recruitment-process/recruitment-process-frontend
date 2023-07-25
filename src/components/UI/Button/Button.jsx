import PropTypes from 'prop-types';

import './Button.scss';

import buttonIcon from '../../../images/button_icon_demo.svg';

const Button = (props) => {
	const { text, disabled, size, isVisibleIcon, type } = props;

	const icon = isVisibleIcon && (
		<img
			src={buttonIcon}
			className="button__pic"
			alt="иконка рядом с текстом"
		/>
	);

	return (
		<button
			disabled={disabled}
			className={size === 'normal' ? 'button' : 'button button_flexible'}
			type={type}
		>
			{icon}
			{text}
		</button>
	);
};

Button.propTypes = {
	text: PropTypes.string,
	disabled: PropTypes.bool,
	size: PropTypes.oneOf(['normal', 'flexible']),
	isVisibleIcon: PropTypes.bool,
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
	text: '',
	disabled: false,
	size: 'normal',
	isVisibleIcon: false,
	type: 'button',
};

export default Button;
