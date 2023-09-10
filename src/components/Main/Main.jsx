import Widget from '../UI/Widget/Widget';
import './Main.scss';

import vacancyBtn from '../../temp/images/vacancy-btn.png';
import MainVacancy from '../MainVacancy/MainVacancy';
import MainUrgentVacancy from '../MainUrgentVacancy/MainUrgentVacancy';

import { urgentVacancies } from '../../temp/urgentVacancies';
import MainShedule from '../MainShedule/MainShedule';

const Main = () => {
  const urgentVacancyList = urgentVacancies.map((vacancy) => (
    <MainUrgentVacancy
      data={vacancy.data}
      name={vacancy.name}
      progress={vacancy.progress}
      stages={vacancy.stages}
      key={vacancy.name}
    />
  ));

  return (
    <section className="main-page">
      <div className="main-page__main-container">
        <div className="main-page__header-container">
          <h3 className="main-page__header">Процесс найма</h3>
          <img src={vacancyBtn} alt="кнопка Вакансия" />
        </div>
        <MainVacancy />
        <h3 className="main-page__header">Срочные вакансии</h3>

        <div className="main-page__urgent-vacancies">{urgentVacancyList}</div>
      </div>
      <div className="main-page__right-container">
        <Widget>
          <div className="analiz" />
        </Widget>
        <Widget>
          <MainShedule />
        </Widget>
      </div>
    </section>
  );
};

export default Main;
