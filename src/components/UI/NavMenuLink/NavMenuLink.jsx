import PropTypes from 'prop-types';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import './NavMenuLink.scss';

export const NavMenuLink = ({ text, icon, path, className }) => (
	<NavLink
		to={path}
		className={({ isActive }) =>
			clsx(
				'nav-menu-link',
				isActive && 'nav-menu-link_active',
				className === 'marginBottom' ? 'marginBottom' : '',
				className === 'color' && 'color'
			)
		}
	>
		{icon}
		<p>{text}</p>
	</NavLink>
);

NavMenuLink.propTypes = {
	path: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	icon: PropTypes.element,
	className: PropTypes.string,
};

NavMenuLink.defaultProps = {
	className: null,
	icon: null,
};
