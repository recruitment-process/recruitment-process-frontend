import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import styles from './NavMenuLink.module.scss';

export const NavMenuLink = ({ text, icon, path, marginBottom, color }) => (
	<NavLink
		style={{ marginBottom: `${marginBottom}`, color: `${color}` }}
		to={path}
		className={({ isActive }) =>
			`${styles.link} ${isActive ? styles.active : ''}`
		}
	>
		{icon}
		<p> {text}</p>
	</NavLink>
);

NavMenuLink.propTypes = {
	text: PropTypes.string.isRequired,
	icon: PropTypes.element.isRequired,
	path: PropTypes.string.isRequired,
	marginBottom: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
};
