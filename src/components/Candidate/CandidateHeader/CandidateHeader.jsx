import './CandidateHeader.scss';
import PropTypes from 'prop-types';
// import { useState } from 'react';
// import clsx from 'clsx';
import { useState } from 'react';
import DropDownList from '../../UI/DropDownList/DropDownList';
import AVATAR_PLUG from '../../../images/icons/Peoples/woman.png';
import ActionButton from '../../UI/ActionButton/ActionButton';
import Modal from '../Modal/Modal';

const CandidateHeader = ({ candidate }) => {
  console.log();

  const [isLiked, setIsLiked] = useState(candidate.like || false);

  const handleLikeButtonClick = () => {
    setIsLiked(!isLiked);
  };

  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const handleShareClick = () => {
    console.log(isShareModalOpen);
    setIsShareModalOpen(true);
  };

  const handleShareModalClose = () => {
    setIsShareModalOpen(false);
  };

  const handleMailButtonClick = () => {
    window.location.href = 'mailto:ZxQyS@example.com';
  };

  return (
    <div className="candidate-header">
      <div className="candidate-header__info-container">
        <div className="candidate-header__photo">
          <img
            className="image"
            src={candidate.avatar}
            onError={(e) => {
              e.target.src = AVATAR_PLUG;
            }}
            alt="фото кандидата"
          />
          <div className="figure figure_match_high">{candidate.match}%</div>
        </div>
        <div className="candidate-header__info">
          <h3 className="info__candidate-name">{candidate.name}</h3>
          <p className="info__candidate-spec">
            {/* TODO: нужна проверка (лет, год, года) */}
            {candidate.jobTitle}, {candidate.years} лет
          </p>
          {candidate.tags && (
            <ul className="info__candidate-tags">
              {candidate.tags.map((tag) => (
                <li className="info__candidate-tag" key={tag}>
                  {tag}
                </li>
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
            onActionButtonClick={handleLikeButtonClick}
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
          <DropDownList />
        </div>
      </div>
      <Modal isOpen={isShareModalOpen} onClose={handleShareModalClose} />
    </div>
  );
};

export default CandidateHeader;

CandidateHeader.propTypes = {
  candidate: PropTypes.shape().isRequired,
};
