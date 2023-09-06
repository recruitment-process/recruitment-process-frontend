import './Widget.scss';

import PropTypes from 'prop-types';

const Widget = ({ children }) => <div className="widget">{children}</div>;

export default Widget;

Widget.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

Widget.defaultProps = {
  children: null,
};
