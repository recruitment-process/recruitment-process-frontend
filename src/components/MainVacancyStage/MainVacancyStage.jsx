import { useEffect, useState } from 'react';
import './MainVacancyStage.scss';

import PropTypes from 'prop-types';
import clsx from 'clsx';

const MainVacancyStage = (props) => {
  const { name, progress, active } = props;

  const [width, setWidth] = useState(progress);

  useEffect(() => {
    setWidth(progress);
  }, [progress]);

  return (
    <div className="main-vacancy-stage">
      <div className="main-vacancy-stage__name"> {name}</div>
      <div
        className={clsx(
          'main-vacancy-stage__progress',
          !width && 'main-vacancy-stage__progress_style_zero',
          active && 'main-vacancy-stage__progress_style_active'
        )}
        style={{ width: `${(412 * width) / 100 + 5}px` }}
      />
      <div className="main-vacancy-stage__precent">{width}</div>
    </div>
  );
};

export default MainVacancyStage;

MainVacancyStage.propTypes = {
  name: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
};
