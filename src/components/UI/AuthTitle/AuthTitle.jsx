import PropTypes from 'prop-types';
import clsx from 'clsx';

import './AuthTitle.scss';

const AuthTitle = ({ titleText, ...props }) => (
  <h1
    className={clsx('auth-title', {
      [props.addTitleClass]: props.addTitleClass,
    })}
  >
    {titleText}
  </h1>
);

AuthTitle.propTypes = {
  titleText: PropTypes.string.isRequired,
  addTitleClass: PropTypes.string,
};

AuthTitle.defaultProps = {
  addTitleClass: '',
};

export default AuthTitle;
