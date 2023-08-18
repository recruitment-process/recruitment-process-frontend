import './CandidatesTableCell.scss';

// import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import { useState } from 'react';

import { Link } from 'react-router-dom';
import DropDownList from '../UI/DropDownList/DropDownList';

import avatar from '../../temp/images/avatar.jpg';

const CandidateTableCell = (props) => {
  const { candidate, onCandidateClick } = props;

  const [isLiked, setIsLiked] = useState(false);

  // Переводим число в года и подставляем окончание
  const correctExp = (data) => {
    const roundData = Math.round(data.exp);
    if (roundData >= 11 && roundData <= 19) {
      return `${roundData} лет`;
    }
    if (roundData === 1 || roundData % 10 === 1) {
      return `${roundData} год`;
    }
    if (roundData % 10 === 2 || roundData % 10 === 3 || roundData % 10 === 4) {
      return `${roundData} года`;
    }
    if (
      roundData % 10 === 0 ||
      roundData % 10 === 5 ||
      roundData % 10 === 6 ||
      roundData % 10 === 7 ||
      roundData % 10 === 8 ||
      roundData % 10 === 9
    ) {
      return `${roundData} лет`;
    }

    return 0;
  };

  function handleCandidateClick() {
    onCandidateClick(candidate);
  }

  // function handleCandidateClick() {
  //   console.log(candidate);
  //   onCandidateClick(candidate)
  // }

  // const additionalProps = {
  //   prop1: 'value1',
  //   prop2: 'value2',
  // };

  return (
    <article className="candidates-table-cell">
      <Link to={{ pathname: '/candidate' }}>
        <div
          role="presentation"
          className="candidates-table-cell__profile-info"
          onClick={handleCandidateClick}
        >
          <img
            className="candidates-table-cell__avatar"
            src={avatar}
            alt={`Фото ${candidate.name}`}
          />
          <div>
            <h3 className="candidates-table-cell__name">{candidate.name}</h3>
            <div className="candidates-table-cell__job-title">
              {candidate.jobTitle}
            </div>
          </div>
        </div>
      </Link>
      <div
        className={clsx(
          'candidates-table-cell__match',
          candidate.match < 70 && 'candidates-table-cell__match_color_blue',
          candidate.match < 50 && 'candidates-table-cell__match_color_red'
        )}
      >
        {candidate.match}%
      </div>
      {/* TODO исправить, когда данные будут приходить от сервера */}
      <div className="candidates-table-cell__status">
        <DropDownList />
      </div>
      <div className="candidates-table-cell__year">{correctExp(candidate)}</div>
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
        className="candidates-table-cell__more"
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
