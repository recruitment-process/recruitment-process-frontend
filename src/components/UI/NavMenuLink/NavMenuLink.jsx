import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import styles from './NavMenuLink.module.scss';

export const NavMenuLink = ({ text, icon, path, className }) => (
	<NavLink
		to={path}
		className={({ isActive }) =>
			`
			${styles.link} 
			${className === 'marginBottom' ? styles.marginBottom : ''} 
			${className === 'color' ? styles.color : ''} 
			${isActive ? styles.active : ''}
			`
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
	className: PropTypes.string.isRequired,
};
