import './VacanciesPage.scss';

import { useState, useEffect } from 'react';
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

  // Все категории которые мы показываем, разные в зависимости от страницы
  const [sortCategories, setSortCategories] = useState(initialSortCategory);
  // Активная категория сортировки на странице
  const [activeCategory, setActiveCategory] = useState('');
  // Объект, в котором находятся все активные категории всех страниц
  const [sortStatus, setSortStatus] = useState(
    JSON.parse(localStorage.getItem('sortStatus')) || {
      vacancies: 'activeVacancies',
    }
  );
  const [vacancyName, setVacancyName] = useState({ title: 'Вакансии' });

  // Восстанавливаем сохранённые значения фильтров из LocalStorage
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('sortStatus')) !== null) {
      setSortStatus(JSON.parse(localStorage.getItem('sortStatus')));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Сохраняем значения фильтров в LocalStorage
  useEffect(() => {
    localStorage.setItem('sortStatus', JSON.stringify(sortStatus));
  }, [sortStatus]);

  useEffect(() => {
    // Задаём заголовок "Вакансии", категории для сортировки и активную категорию для страницы Вакансии
    if (
      location.pathname === '/vacancies' ||
      location.pathname === '/vacancies/'
    ) {
      if (vacancyName.title !== 'Вакансии') {
        setVacancyName({ title: 'Вакансии' });
      }

      setSortCategories(
        initialSortCategory.filter((item) =>
          item.sortValue.includes('Vacancies')
        )
      );
      setActiveCategory(sortStatus.vacancies);
      return;
    }
    // Задаём заголовок "Имя_вакансии", категории для сортировки и активную категорию для страницы Вакансии
    const urlParts = location.pathname
      .split('/')
      .filter((crumb) => crumb !== '');
    const lastPartURL = urlParts[urlParts.length - 1];

    const name = vacancies.find((item) => item.id === lastPartURL);
    setVacancyName(name);

    setSortCategories(
      initialSortCategory.filter((item) =>
        item.sortValue.includes('Candidates')
      )
    );

    // При первом рендере выставляем активную категорию в "Активные"
    if (vacancyName.id && !sortStatus[vacancyName.id]) {
      setSortStatus((prevState) => ({
        ...prevState,
        [vacancyName.id]: 'activeCandidates',
      }));
    }

    if (sortStatus[vacancyName.id]) {
      setActiveCategory(sortStatus[vacancyName.id]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, sortStatus, vacancyName]);

  // Заполняем объект в котором хранятся статусы всех категорий для страницы Вакансии и для всех страниц Вакансия
  const handleSelectSortCategory = (category) => {
    if (location.pathname === '/vacancies') {
      setSortStatus((prevState) => ({
        ...prevState,
        vacancies: category,
      }));
    } else {
      setSortStatus((prevState) => ({
        ...prevState,
        [vacancyName.id]: category,
      }));
    }
  };

  // Функция считает количество элементов по типам
  const getAmountofElements = (arr, initialAmountObj) =>
    arr.reduce((acc, item) => {
      acc[item.status] = (acc[item.status] || 0) + 1;
      return acc;
    }, initialAmountObj);

  // Рассчитываем количество элементов у категории на странице вакансия и вакансии
  let sortCounter;

  if (location.pathname === '/vacancies') {
    sortCounter = getAmountofElements(vacancies, {
      activeVacancies: 0,
      draftVacancies: 0,
      completedVacancies: 0,
    });
  } else {
    sortCounter = getAmountofElements(candidates, {
      activeCandidates: 0,
      favoritesCandidates: 0,
      rejectedCandidates: 0,
      probationCandidates: 0,
      reserveCandidates: 0,
    });
  }

  const vacanciesList = vacancies
    .filter((vacancy) => vacancy.status === activeCategory)
    .map(
      (vacancy) =>
        location.pathname === '/vacancies' && (
          <VacancyCard vacancy={vacancy} key={vacancy.title} />
        )
    )
    .concat(
      location.pathname === '/vacancies' && (
        <article className="vacancies-page__add-vacancy" key="Новая вакансия">
          <IconAdd
            className="vacancies-page__add-icon"
            fill="hsla(247, 80%, 64%, 1)"
          />
          <p className="vacancies-page__add-vacancy-text">
            <Link className="vacancies-page__add-vacancy-link" to="/">
              Новая вакансия
            </Link>
          </p>
        </article>
      )
    );

  return (
    <section className="vacancies-page">
      <div className="vacancies-page__header">
        <Breadcrumbs locationTitle={vacancyName.title} />
        <VacanciesSubHeader title={vacancyName.title} />
        <VacanciesSort
          categories={sortCategories}
          counter={sortCounter}
          sortValue={activeCategory}
          selectCategory={handleSelectSortCategory}
        />
      </div>
      {/* Outlet принимает на вход итерируемый объект */}
      <Outlet context={[activeCategory]} />
      {location.pathname === '/vacancies' && (
        <div className="vacancies-page__container">
          <div className="vacancies-page__scroll-wrap">
            <div className="vacancies-page__content">{vacanciesList}</div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VacanciesPage;

VacanciesPage.propTypes = {
  vacancies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  candidates: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
