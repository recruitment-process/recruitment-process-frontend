import PropTypes from 'prop-types';
import clsx from 'clsx';

import './Logo.scss';

import logoPathViolet from '../../../images/logo.svg';
import logoPathWhite from '../../../images/logoWhite.svg';

const Logo = ({ color, ...props }) => (
  <img
    className={clsx('logo', { [props.addLogoClass]: props.addLogoClass })}
    src={color === 'violet' ? logoPathViolet : logoPathWhite}
    alt="Meeting ROOM"
  />
);

Logo.propTypes = {
  addLogoClass: PropTypes.string,
  color: PropTypes.oneOf(['violet', 'white']),
};

Logo.defaultProps = {
  addLogoClass: '',
  color: 'violet',
};

export default Logo;
