import './ProgressBarRound.scss';

import PropTypes from 'prop-types';

const ProgressBarRound = (props) => {
  const { progress } = props;

  const size = 58;
  const trackWidth = 3;
  const indicatorWidth = 3;

  let trackColor = `#D1FFE1`;
  let indicatorColor = `#10C44C`;

  if (progress < 40) {
    trackColor = `#FFE6E0`;
    indicatorColor = `#F53C14`;
  } else if (progress < 70) {
    trackColor = `#CBE0FF`;
    indicatorColor = `#331DE3`;
  }

  const center = size / 2;
  const radius =
    center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth);
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * ((100 - progress) / 100);

  return (
    <div className="progress-bar-round" style={{ width: size, height: size }}>
      <svg style={{ width: size, height: size }}>
        <circle
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={trackColor}
          strokeWidth={trackWidth}
        />
        <circle
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={indicatorColor}
          strokeWidth={indicatorWidth}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
        />
      </svg>
      <span
        className="progress-bar-round__text"
        style={{ color: indicatorColor }}
      >{`${progress}%`}</span>
    </div>
  );
};

export default ProgressBarRound;

ProgressBarRound.propTypes = {
  progress: PropTypes.number,
};

ProgressBarRound.defaultProps = {
  progress: 10,
};
