import './CandidatesTableSort.scss';

import { useState } from 'react';

import PropTypes from 'prop-types';

import sortDefault from '../../images/icons/icon-sort/sort-default.svg';
import sortUp from '../../images/icons/icon-sort/sort-up.svg';
import sortDown from '../../images/icons/icon-sort/sort-down.svg';
import upArrow from '../../images/icons/icon-sort/up-arrow.svg';

const columnNames = ['Кандидат', 'Match', 'Статус', 'Опыт', 'Место работы'];

const CandidateTableSort = (props) => {
  const { pressScrollToTopButton, scrollPosition } = props;

  const [sortValue, setSortValue] = useState({
    Кандидат: sortDefault,
    Match: sortDefault,
    Статус: sortDefault,
    Опыт: sortDefault,
    'Место работы': sortDefault,
  });

  const handleClick = (name) => {
    if (sortValue[name] === sortDefault) {
      setSortValue({
        Кандидат: sortDefault,
        Match: sortDefault,
        Статус: sortDefault,
        Опыт: sortDefault,
        'Место работы': sortDefault,
        [name]: sortUp,
      });
    } else if (sortValue[name] === sortUp) {
      setSortValue({
        Кандидат: sortDefault,
        Match: sortDefault,
        Статус: sortDefault,
        Опыт: sortDefault,
        'Место работы': sortDefault,
        [name]: sortDown,
      });
    } else if (sortValue[name] === sortDown) {
      setSortValue({
        Кандидат: sortDefault,
        Match: sortDefault,
        Статус: sortDefault,
        Опыт: sortDefault,
        'Место работы': sortDefault,
        [name]: sortUp,
      });
    }
  };

  const columnNamesList = columnNames.map((name) => (
    <button
      className="candidates-table-sort__btn"
      onClick={() => handleClick(name)}
      key={name}
    >
      {name}
      <img
        src={sortValue[name]}
        className="candidates-table-sort__sort-icon"
        alt="иконка сортировки"
      />
    </button>
  ));

  const handleButtonUpCLick = () => {
    pressScrollToTopButton();
  };

  return (
    <div className="candidates-table-sort">
      {columnNamesList}
      {!!scrollPosition && (
        <button
          className="candidates-table-sort__btn"
          onClick={handleButtonUpCLick}
        >
          <img
            src={upArrow}
            className="candidates-table-sort__up-icon"
            alt="Кнопка наверх"
          />
          Наверх
        </button>
      )}
    </div>
  );
};

export default CandidateTableSort;

CandidateTableSort.propTypes = {
  pressScrollToTopButton: PropTypes.func.isRequired,
  scrollPosition: PropTypes.number.isRequired,
};
