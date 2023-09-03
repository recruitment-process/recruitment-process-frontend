import './CandidatesTableCell.scss';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import { useState } from 'react';

import { Link } from 'react-router-dom';
import DropDownList from '../UI/DropDownList/DropDownList';
import MatchStatus from '../UI/MatchStatus/MatchStatus';

import { correctYearsNaming } from '../../utils/utils';
import AvatarPlug from '../UI/AvatarPlug/AvatarPlug';

const CandidateTableCell = (props) => {
  const { candidate, onCandidateClick } = props;

  const [isLiked, setIsLiked] = useState(false);
  const [statuses, setStatuses] = useState([
    'Первичный скрининг',
    'Интервью с HR',
    'Интервью с руководителем',
    'Тестовое задание',
    'Выполнил задание',
    'Интервью с командой',
    'Оффер',
  ]);

  const handleAddNewStatus = (status) => {
    setStatuses((prev) => [...prev, status]);
  };

  const handleCandidateClick = () => {
    onCandidateClick(candidate);
  };

  const [isImageLoadError, setIsImageLoadError] = useState(false);

  return (
    <article className="candidates-table-cell">
      <Link
        className="candidates-table-cell__link"
        to={`${candidate.id}/resume`}
      >
        <div
          role="presentation"
          className="candidates-table-cell__profile-info"
          onClick={handleCandidateClick}
        >
          <div className="candidates-table-cell__avatar-container">
            {candidate.avatar && !isImageLoadError ? (
              <img
                src={candidate.avatar}
                onError={() => setIsImageLoadError(true)}
                alt={`Фото ${candidate.name}`}
              />
            ) : (
              <AvatarPlug size="S" name={candidate.name} />
            )}
          </div>

          <div>
            <h3 className="candidates-table-cell__name">{candidate.name}</h3>
            <div className="candidates-table-cell__job-title">
              {candidate.jobTitle}
            </div>
          </div>
        </div>
      </Link>
      <div className="candidates-table-cell__match">
        <MatchStatus status={candidate.match} />
      </div>
      {/* TODO исправить, когда данные будут приходить от сервера */}
      <div className="candidates-table-cell__status">
        <DropDownList
          addNewStatus={handleAddNewStatus}
          initialStatuses={statuses}
        />
      </div>
      <div className="candidates-table-cell__year">
        {correctYearsNaming(candidate.exp)}
      </div>
      <div className="candidates-table-cell__work">{candidate.work}</div>
      <button
        className={clsx(
          'candidates-table-cell__like',
          isLiked && 'candidates-table-cell__like_active'
        )}
        aria-label="кнопка добавления в избранное"
        onClick={() => setIsLiked(!isLiked)}
      />
      <button
        className="candidates-table-cell__delete"
        aria-label="кнопка добавляет информацию о кандидате"
      />
    </article>
  );
};

export default CandidateTableCell;

CandidateTableCell.propTypes = {
  candidate: PropTypes.shape().isRequired,
  onCandidateClick: PropTypes.func.isRequired,
};
