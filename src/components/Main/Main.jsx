import Widget from '../UI/Widget/Widget';
import './Main.scss';

import vacancyBtn from '../../temp/images/vacancy-btn.png';
import MainVacancy from '../MainVacancy/MainVacancy';

const Main = () => (
  <section className="main-page">
    <div className="main-page__main-container">
      <div className="main-page__header-container">
        <h3 className="main-page__header">Процесс найма</h3>
        <img src={vacancyBtn} alt="кнопка Вакансия" />
      </div>
      <MainVacancy />
      <h3 className="main-page__header">Срочные вакансии</h3>
      <div className="main-page__urgent-vacancies" />
    </div>
    <div className="main-page__right-container">
      <Widget>
        <div className="analiz" />
      </Widget>
      <Widget>
        <div className="interview" />
      </Widget>
    </div>
  </section>
);

export default Main;
