import './CandidatesTableSort.scss';

import { useState } from 'react';

import sortDefault from '../../images/icons/icon-sort/sort-default.svg';
import sortUp from '../../images/icons/icon-sort/sort-up.svg';
import sortDown from '../../images/icons/icon-sort/sort-down.svg';

const columnNames = ['Кандидат', 'Match', 'Статус', 'Опыт', 'Место работы'];

const CandidateTableSort = () => {
	const [sortValue, setSortValue] = useState(sortDefault); // default up down

	const handleClick = () => {
		setSortValue(sortDefault);
		if (sortValue === sortDefault) {
			setSortValue(sortUp);
		} else if (sortValue === sortUp) {
			setSortValue(sortDown);
		} else if (sortValue === sortDown) {
			setSortValue(sortDefault);
		}
	};

	const columnNamesList = columnNames.map((name) => (
		<button
			className="candidates-table-sort__btn"
			onClick={() => handleClick(sortValue)}
			key={name}
		>
			{name}
			<img
				src={sortValue}
				className="candidates-table-sort__sort-icon"
				alt="иконка сортировки"
			/>
		</button>
	));

	return <div className="candidates-table-sort">{columnNamesList}</div>;
};

export default CandidateTableSort;
