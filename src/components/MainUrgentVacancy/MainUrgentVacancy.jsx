import './MainUrgentVacancy.scss';

import PropTypes from 'prop-types';

import ProgressBarRound from '../UI/ProgressBarRound/ProgressBarRound';

const MainUrgentVacancy = (props) => {
  const { data, name, progress, stages } = props;

  return (
    <section className="urgent-vacancy">
      <div className="urgent-vacancy__left-container">
        <p className="urgent-vacancy__text">{data}</p>
        <p className="urgent-vacancy__text-name">{name}</p>
        <p className="urgent-vacancy__text">{stages}</p>
      </div>
      <div className="urgent-vacancy__right-container">
        <ProgressBarRound progress={progress} />
      </div>
    </section>
  );
};

export default MainUrgentVacancy;

MainUrgentVacancy.propTypes = {
  data: PropTypes.string,
  name: PropTypes.string,
  progress: PropTypes.number,
  stages: PropTypes.string,
};

MainUrgentVacancy.defaultProps = {
  data: '01.01.2000',
  name: 'Название вакансии',
  progress: 10,
  stages: 'Стадии вакансии',
};
