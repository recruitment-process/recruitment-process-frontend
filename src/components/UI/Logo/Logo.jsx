import './Logo.scss';

import PropTypes from 'prop-types';

import logoPath from '../../../images/logo.svg';

const Logo = ({ marginBottom }) => (
	<img
		style={{ marginBottom: `${marginBottom}` }}
		className="logo"
		src={logoPath}
		alt="логотип"
	/>
);

Logo.propTypes = {
	marginBottom: PropTypes.string.isRequired,
};

export default Logo;
