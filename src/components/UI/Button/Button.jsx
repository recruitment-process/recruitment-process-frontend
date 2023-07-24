import PropTypes from 'prop-types';

import './Button.scss';

import buttonIcon from '../../../images/button_icon_demo.svg';

const Button = (props) => {
	const { text, disabled, size, isVisibleIcon } = props;

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
			className={size === 'normal' ? 'button' : 'button button_size_small'}
			type="submit"
		>
			{icon}
			{text}
		</button>
	);
};

Button.propTypes = {
	text: PropTypes.string,
	disabled: PropTypes.bool,
	size: PropTypes.oneOf(['normal', 'small']),
	isVisibleIcon: PropTypes.bool,
};

Button.defaultProps = {
	text: '',
	disabled: false,
	size: 'normal',
	isVisibleIcon: false,
};

export default Button;
