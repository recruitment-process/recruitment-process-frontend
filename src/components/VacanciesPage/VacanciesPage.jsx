import './VacanciesPage.scss';

import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import VacanciesSubHeader from '../VacanciesSubHeader/VacanciesSubHeader';
import VacanciesSort from '../VacanciesSort/VacanciesSort';
import VacancyCard from '../VacancyCard/VacancyCard';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { ReactComponent as IconAdd } from '../../images/icons/icon-add.svg';

// Категории для кнопок сортировки
const initialSortCategory = [
  { name: 'Активные', sortValue: 'activeVacancies' },
  { name: 'Завершенные', sortValue: 'completedVacancies' },
  { name: 'Черновик', sortValue: 'draftVacancies' },
  { name: 'Активные', sortValue: 'activeCandidates' },
  { name: 'Избранные', sortValue: 'favoritesCandidates' },
  { name: 'Отклоненные', sortValue: 'rejectedCandidates' },
  {
    name: 'Испытательный срок',
    sortValue: 'probationCandidates',
  },
  { name: 'Кадровый резерв', sortValue: 'reserveCandidates' },
];

const VacanciesPage = (props) => {
  const { vacancies, candidates } = props;

  const location = useLocation();

  const [sortVacanciesValue, setSortVacanciesValue] =
    useState('activeVacancies');
  const [sortCandidatesValue, setSortCandidatesValue] =
    useState('activeCandidates');

  const [subHeaderName, setSubHeaderName] = useState('Вакансии');

  const handleSelectSortCategory = (category) => {
    if (location.pathname === '/vacancies') {
      setSortVacanciesValue(category);
    } else {
      setSortCandidatesValue(category);
    }
  };

  // считаем количество вакансий по типам
  const vacanciesCounter = vacancies.reduce(
    (acc, vacancy) => {
      acc[vacancy.status] = (acc[vacancy.status] || 0) + 1;
      return acc;
    },
    { activeVacancies: 0, draftVacancies: 0, completedVacancies: 0 }
  );

  // считаем количество кандидатов по типам
  const candidatesCounter = candidates.reduce(
    (acc, vacancy) => {
      acc[vacancy.status] = (acc[vacancy.status] || 0) + 1;
      return acc;
    },
    {
      activeCandidates: 0,
      favoritesCandidates: 0,
      rejectedCandidates: 0,
      probationCandidates: 0,
      reserveCandidates: 0,
    }
  );

  const sortCounter =
    location.pathname === '/vacancies' ? vacanciesCounter : candidatesCounter;

  const vacanciesList = vacancies
    .filter((vacancy) => vacancy.status === sortVacanciesValue)
    .map(
      (vacancy) =>
        location.pathname === '/vacancies' && (
          <VacancyCard vacancy={vacancy} key={vacancy.title} />
        )
    )
    .concat(
      location.pathname === '/vacancies' && (
        <article className="vacanсies-page__add-vacancy" key="Новая вакансия">
          <IconAdd
            className="vacanсies-page__add-icon"
            fill="hsla(247, 80%, 64%, 1)"
          />
          <p className="vacanсies-page__add-vacancy-text">
            <Link
              className="vacanсies-page__add-vacancy-link"
              to="/"
              onClick={() => setSubHeaderName('Новая вакансия')}
            >
              Новая вакансия
            </Link>
          </p>
        </article>
      )
    );

  const handleSetTransitionPageName = (name) => {
    setSubHeaderName(name);
  };

  const sortCategory =
    location.pathname === '/vacancies'
      ? initialSortCategory.filter((category) =>
          category.sortValue.includes('Vacancies')
        )
      : initialSortCategory.filter((category) =>
          category.sortValue.includes('Candidates')
        );

  const sortValue =
    location.pathname === '/vacancies'
      ? sortVacanciesValue
      : sortCandidatesValue;

  return (
    <section className="vacanсies-page">
      <div className="vacanсies-page__header">
        <Breadcrumbs
          locationTitle={subHeaderName}
          setTransitionPageName={handleSetTransitionPageName}
        />
        <VacanciesSubHeader title={subHeaderName} />
        <VacanciesSort
          sortCategory={sortCategory}
          sortCounter={sortCounter}
          sortValue={sortValue}
          sortVacanciesValue={sortVacanciesValue}
          sortCandidatesValue={sortCandidatesValue}
          selectSortCategory={handleSelectSortCategory}
        />
      </div>
      {/* Outlet принимает на вход итерируемый объект */}
      <Outlet context={[sortCandidatesValue]} />
      <div className="vacanсies-page__container">{vacanciesList}</div>
    </section>
  );
};

export default VacanciesPage;

VacanciesPage.propTypes = {
  vacancies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  candidates: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
