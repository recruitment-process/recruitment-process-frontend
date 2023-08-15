import './VacancyCard.scss';

import PropTypes from 'prop-types';
import { ReactComponent as IconCalendar } from '../../images/icons/icon-calendar.svg';
import { ReactComponent as IconPeoplesTwo } from '../../images/icons/icon-peoples-two.svg';
import { ReactComponent as IconShare } from '../../images/icons/icon-share.svg';
import HrAvatar1 from '../../temp/images/avatar-hr-1.png';
import HrAvatar2 from '../../temp/images/avatar-hr-2.png';

const VacancyCard = ({ vacancy }) => {
  const { title, candidatesQty, location, employer, salary, tags, deadline } =
    vacancy;

  const tagsList =
    tags.length === 0
      ? null
      : tags.map((tag) => (
          <li className="card__tag" key={tag}>
            {tag}
          </li>
        ));

  // deadline check
  const deadlineFormated = new Date(deadline);
  const deadlineFailed = new Date() > deadlineFormated;

  // forming deadline for render
  const deadlineRendered = [
    deadlineFormated.getDate().toString(),
    (deadlineFormated.getMonth() + 1).toString(),
    deadlineFormated.getFullYear().toString(),
  ].join('.');

  return (
    <div className="card">
      <div className="card__brief">
        <div className="card__topline">
          <div className="card__candidates">
            <IconPeoplesTwo
              className="card__candidates-icon"
              stroke="hsla(180, 0%, 57%, 1)"
            />
            <p className="card__candidates-text">
              {`${candidatesQty} кандидатов`}
            </p>
          </div>
          <button type="button" aria-label="more" className="card__menu-icon" />
        </div>
        <p className="card__employer">{`${employer}, ${location}`}</p>
        <h6 className="card__title">{title}</h6>
        <p className="card__salary">
          {`от ${salary.min} 000 до ${salary.max} 000 ₽`}
        </p>
      </div>
      <div className="card__content">
        <ul className="card__tags">{tagsList}</ul>
        <div className="card__downline">
          <div className="card__deadline">
            <IconCalendar
              className="card__deadline-icon"
              stroke="hsla(180, 0%, 57%, 1)"
            />
            <p
              className={`
              card__deadline-text
              ${deadlineFailed && 'card__deadline-failed-text'}
              `}
            >
              {`до ${deadlineRendered}`}
            </p>
          </div>
          <ul className="card__hr">
            <li className="card__hr-item">
              <img
                className="card__hr-avatar"
                src={HrAvatar2}
                alt="аватар hr"
              />
            </li>
            <li className="card__hr-item">
              <img
                className="card__hr-avatar"
                src={HrAvatar1}
                alt="аватар hr"
              />
            </li>

            <li className="card__hr-item">
              <button
                type="button"
                aria-label="add-hr"
                className="card__add-hr-button"
              >
                <IconShare
                  className="card__add-hr-icon"
                  stroke="hsla(247, 80%, 64%, 1)"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VacancyCard;

VacancyCard.propTypes = {
  vacancy: PropTypes.shape({
    title: PropTypes.string,
    candidatesQty: PropTypes.number,
    location: PropTypes.string,
    employer: PropTypes.string,
    salary: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }),
    tags: PropTypes.arrayOf(PropTypes.string),
    deadline: PropTypes.string,
  }).isRequired,
};
