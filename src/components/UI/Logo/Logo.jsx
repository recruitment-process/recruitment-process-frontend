import PropTypes from 'prop-types';
import clsx from 'clsx';

import './Logo.scss';

import logoPath from '../../../images/logo.svg';

const Logo = ({ ...props }) => (
  <img
    className={clsx('logo', { [props.addLogoClass]: props.addLogoClass })}
    src={logoPath}
    alt="Meeting ROOM"
  />
);

Logo.propTypes = {
  addLogoClass: PropTypes.string,
};

Logo.defaultProps = {
  addLogoClass: '',
};

export default Logo;
