import './MainVacancy.scss';

import MainVacancyStage from '../MainVacancyStage/MainVacancyStage';

const initialStages = [
  { name: 'Скрининг', progress: 100, active: false },
  { name: 'Интервью HR', progress: 55, active: false },
  { name: 'Тест', progress: 13, active: true },
  { name: 'Интервью P1', progress: 2, active: false },
  { name: 'Оффер', progress: 0, active: false },
];

const MainVacancy = () => {
  const stagesList = initialStages.map((stage) => (
    <MainVacancyStage
      name={stage.name}
      progress={stage.progress}
      active={stage.active}
      key={stage.name}
    />
  ));

  return (
    <section className="main-vacancy">
      <div className="main-vacancy__header-container">
        <h4 className="main-vacancy__header">Директор по маркетингу</h4>
        <p className="main-vacancy__data">23.08.23</p>
      </div>
      {stagesList}
    </section>
  );
};

export default MainVacancy;
