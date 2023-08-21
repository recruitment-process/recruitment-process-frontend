import './CandidatesTableSort.scss';

import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import sortDefault from '../../images/icons/icon-sort/sort-default.svg';
import sortUp from '../../images/icons/icon-sort/sort-up.svg';
import sortDown from '../../images/icons/icon-sort/sort-down.svg';
import upArrow from '../../images/icons/icon-sort/up-arrow.svg';

const columnNames = [
  { id: 'candidate', text: 'Кандидат' },
  { id: 'match', text: 'Match' },
  { id: 'status', text: 'Статус' },
  { id: 'exp', text: 'Опыт' },
  { id: 'work', text: 'Место работы' },
];

const defaultSortValue = {
  candidate: 'sortDefault',
  match: 'sortDefault',
  status: 'sortDefault',
  exp: 'sortDefault',
  work: 'sortDefault',
};

const CandidateTableSort = (props) => {
  const { pressScrollToTopButton, scrollPosition, pressSortButton } = props;

  const [sortValue, setSortValue] = useState({
    ...defaultSortValue,
    candidate: 'sortUp',
  });

  const handleClick = (id) => {
    const newSortValue = { ...defaultSortValue };

    if (sortValue[id] === 'sortDefault') {
      newSortValue[id] = 'sortDown';
    } else if (sortValue[id] === 'sortUp') {
      newSortValue[id] = 'sortDown';
    } else if (sortValue[id] === 'sortDown') {
      newSortValue[id] = 'sortUp';
    }
    setSortValue(newSortValue);
  };

  useEffect(() => {
    pressSortButton(sortValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortValue]);

  const columnNamesList = columnNames.map((column) => {
    let imageSrc = sortDefault;
    if (sortValue[column.id] === 'sortUp') {
      imageSrc = sortUp;
    } else if (sortValue[column.id] === 'sortDown') {
      imageSrc = sortDown;
    }

    return (
      <button
        className="candidates-table-sort__btn"
        onClick={() => handleClick(column.id)}
        key={column.id}
      >
        {column.text}
        <img
          src={imageSrc}
          className="candidates-table-sort__sort-icon"
          alt="иконка сортировки"
        />
      </button>
    );
  });

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
  pressSortButton: PropTypes.func.isRequired,
};
