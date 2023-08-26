import './CandidateHeader.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import AVATAR_PLUG from '../../../images/icons/icon-no-avatar.png';
import ActionButton from '../../UI/ActionButton/ActionButton';
import Modal from '../Modal/Modal';
import MatchStatus from '../../UI/MatchStatus/MatchStatus';
import Tag from '../../UI/Tag/Tag';
import { correctYearsNaming } from '../../../utils/utils';
import DropDownList from '../../UI/DropDownList/DropDownList';

const CandidateHeader = ({ candidate, onLikeClick }) => {
  const [isLiked, setIsLiked] = useState(candidate.like || false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    onLikeClick();
  };

  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const handleShareClick = () => {
    setIsShareModalOpen(true);
  };

  const handleShareModalClose = () => {
    setIsShareModalOpen(false);
  };

  const handleMailButtonClick = () => {
    window.location.href = 'mailto:ZxQyS@example.com';
  };

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

  return (
    <div className="candidate-header">
      <div className="candidate-header__info-container">
        <div className="candidate-header__photo-container">
          <img
            className="candidate-header__photo"
            src={candidate.avatar}
            onError={(e) => {
              e.target.src = AVATAR_PLUG;
            }}
            alt="фото кандидата"
          />
          <div className="candidate-header__match-status-container">
            <MatchStatus status={candidate.match} />
          </div>
        </div>
        <div className="candidate-header__about-candidate about-candidate">
          <h3 className="about-candidate__name">{candidate.name}</h3>
          <p className="about-candidate__job">
            {candidate.jobTitle}, {correctYearsNaming(candidate.years)}
          </p>
          {candidate.tags && (
            <ul className="about-candidate__tags">
              {candidate.tags.map((tag) => (
                <Tag key={tag} title={tag} />
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="candidate-header__actions">
        <div className="candidate-header__actions-container">
          <ActionButton
            type="like"
            isLiked={candidate.like}
            onActionButtonClick={handleLikeClick}
          />
          <ActionButton
            type="share"
            isLiked={candidate.like}
            onActionButtonClick={handleShareClick}
          />
          <ActionButton
            type="mail"
            isLiked={candidate.like}
            onActionButtonClick={handleMailButtonClick}
          />
        </div>
        <div className="candidate-header__progress">
          <DropDownList
            addNewStatus={handleAddNewStatus}
            initialStatuses={statuses}
            mod="header"
          />
        </div>
      </div>
      <Modal isOpen={isShareModalOpen} onClose={handleShareModalClose} />
    </div>
  );
};

export default CandidateHeader;

CandidateHeader.propTypes = {
  onLikeClick: PropTypes.func.isRequired,
  candidate: PropTypes.shape(undefined).isRequired,
};
