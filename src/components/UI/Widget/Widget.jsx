import './Widget.scss';

import PropTypes from 'prop-types';

const CandidateWidget = ({ children }) => (
  <div className="widget">{children}</div>
);

export default CandidateWidget;

CandidateWidget.propTypes = {
  children: PropTypes.element,
};

CandidateWidget.defaultProps = {
  children: null,
};
