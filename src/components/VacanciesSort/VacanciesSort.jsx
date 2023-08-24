import './VacanciesSort.scss';

import PropTypes from 'prop-types';
import clsx from 'clsx';

const VacanciesSort = (props) => {
  const { selectCategory, counter, categories, sortValue } = props;

  const handleClick = (selectedCategory) => selectCategory(selectedCategory);

  const categoryList = categories.map((obj) => (
    <li key={obj.sortValue}>
      <button
        className={clsx(
          'vacancies-sort__item',
          sortValue === obj.sortValue && 'vacancies-sort__item_active'
        )}
        onClick={() => handleClick(obj.sortValue)}
      >
        {obj.name}
        <span
          className={clsx(
            'vacancies-sort__item-number',
            sortValue === obj.sortValue && 'vacancies-sort__item-number_active'
          )}
        >
          {counter[obj.sortValue]}
        </span>
      </button>
    </li>
  ));

  return (
    <nav className="vacancies-sort">
      <ul className="vacancies-sort__items">{categoryList}</ul>
    </nav>
  );
};

VacanciesSort.propTypes = {
  selectCategory: PropTypes.func.isRequired,
  counter: PropTypes.shape().isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  sortValue: PropTypes.string.isRequired,
};

export default VacanciesSort;
