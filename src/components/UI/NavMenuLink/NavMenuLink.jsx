import PropTypes from 'prop-types';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import './NavMenuLink.scss';

export const NavMenuLink = ({ type, text, icon, path }) => (
  <NavLink
    to={path}
    className={({ isActive }) =>
      clsx(
        'nav-menu-link',
        type === 'section' && 'nav-menu-link_type_section',
        isActive && 'nav-menu-link_active'
        // isActive && type === 'section' && 'nav-menu-link_active-section'
      )
    }
  >
    {icon}
    <p>{text}</p>
  </NavLink>
);

NavMenuLink.propTypes = {
  type: PropTypes.oneOf(['section']),
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.element,
};

NavMenuLink.defaultProps = {
  type: null,
  icon: null,
};
