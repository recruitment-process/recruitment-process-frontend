import './VacanciesSort.scss';

import PropTypes from 'prop-types';
import clsx from 'clsx';

const VacanciesSort = (props) => {
	const { selectSortCategory, sortCounter, sortCategory, sortValue } = props;

	const handleClick = (category) => {
		selectSortCategory(category);
	};

	const categoryList = sortCategory.map((obj) => (
		<li key={obj.name}>
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
					{sortCounter[obj.sortValue]}
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
	selectSortCategory: PropTypes.func.isRequired,
	sortCounter: PropTypes.shape().isRequired,
	sortCategory: PropTypes.arrayOf(PropTypes.shape()).isRequired,
	sortValue: PropTypes.string.isRequired,
};

export default VacanciesSort;
