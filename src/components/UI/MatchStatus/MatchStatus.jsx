import PropTypes from 'prop-types';

import './MatchStatus.scss';
import clsx from 'clsx';

const MatchStatus = (props) => {
  const { status } = props;

  return (
    <div
      className={clsx(
        'match-status',
        status < 70 && 'match-status match-status_color_blue',
        status < 50 && 'match-status match-status_color_red'
      )}
    >
      {status}%
    </div>
  );
};

export default MatchStatus;

MatchStatus.propTypes = {
  status: PropTypes.string.isRequired,
};
