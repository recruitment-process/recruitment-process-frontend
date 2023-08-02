import './CandidatesTableSubHeader.scss';

import calendar from '../../images/table_calendar.png';

const CandidatesTableSubHeader = () => (
	<div className="candidates-table-sub-header">
		<div />
		<img
			src={calendar}
			className="candidates-table-sub-header__calendar"
			alt="календарь временно"
		/>
		<button className="candidates-table-sub-header__filter-btn">Фильтры</button>
		<button
			className="candidates-table-sub-header__style-btn"
			aria-label="Кнопка изменения внешнего вида карточек"
		/>
	</div>
);

export default CandidatesTableSubHeader;
