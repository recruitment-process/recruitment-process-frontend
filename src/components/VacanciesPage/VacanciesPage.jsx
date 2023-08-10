import './VacanciesPage.scss';

import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import VacanciesSubHeader from '../VacanciesSubHeader/VacanciesSubHeader';
import VacanciesSort from '../VacanciesSort/VacanciesSort';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

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

  // Задаём заголовок старнице ("Вакансии" или название конкретной вакансии)
  useEffect(() => {
    if (
      location.pathname === '/vacancies' ||
      location.pathname === '/vacancies/'
    ) {
      setSubHeaderName('Вакансии');
      return;
    }

    const urlParts = location.pathname
      .split('/')
      .filter((crumb) => crumb !== '');
    const lastPartURL = urlParts[urlParts.length - 1];

    const vacancyTitle = vacancies.find(
      (vacancy) => vacancy.id === lastPartURL
    ).title;

    setSubHeaderName(vacancyTitle);
  }, [location.pathname, vacancies]);

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
          <Link to={vacancy.id} key={vacancy.title}>
            <div className="card1">{vacancy.title}</div>
          </Link>
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
      {/* Outlet принемает на вход итерируемый объект */}
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
