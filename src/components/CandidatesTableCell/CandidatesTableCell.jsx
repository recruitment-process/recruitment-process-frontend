import './CandidatesTableCell.scss';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import { useState } from 'react';

import DropDownList from '../UI/DropDownList/DropDownList';

import avatar from '../../images/avatar.jpg';

const CandidateTableCell = (props) => {
	const { candidate } = props;

	const [isLiked, setisLiked] = useState(false);

	return (
		<article className="candidates-table-cell">
			<img
				className="candidates-table-cell__avatar"
				src={avatar}
				alt="Фото кандидата"
			/>
			<div>
				<h3 className="candidates-table-cell__name">{candidate.name}</h3>
				<div className="candidates-table-cell__job-title">
					{candidate.jobTitle}
				</div>
			</div>
			<div
				className={clsx(
					'candidates-table-cell__match',
					candidate.match < 70 && 'candidates-table-cell__match_color_blue',
					candidate.match < 50 && 'candidates-table-cell__match_color_red'
				)}
			>
				{candidate.match}%
			</div>
			<div className="candidates-table-cell__status">
				<DropDownList />
			</div>
			<div className="candidates-table-cell__year">{candidate.exp} года</div>
			<div className="candidates-table-cell__work">{candidate.work}</div>
			<button
				className={clsx(
					'candidates-table-cell__like',
					isLiked && 'candidates-table-cell__like_active'
				)}
				aria-label="кнопка добавления в избранное"
				onClick={() => setisLiked(!isLiked)}
			/>
			<button
				className="candidates-table-cell__more"
				aria-label="кнопка добавляет информацию о кандидате"
			/>
		</article>
	);
};

export default CandidateTableCell;

CandidateTableCell.propTypes = {
	candidate: PropTypes.shape().isRequired,
};
