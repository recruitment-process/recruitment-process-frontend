import './VacancyCard.scss';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import Tag from '../UI/Tag/Tag';
import { ReactComponent as IconCalendar } from '../../images/icons/icon-calendar.svg';
import { ReactComponent as IconPeoplesTwo } from '../../images/icons/icon-peoples-two.svg';
import { ReactComponent as IconShare } from '../../images/icons/icon-share.svg';

const VacancyCard = ({ vacancy }) => {
  const { title, candidatesQty, location, employer, salary, tags, deadline } =
    vacancy;

  const tagsList =
    tags.length === 0 ? null : tags.map((tag) => <Tag key={tag} title={tag} />);

  // deadline check
  const deadlineFormated = new Date(deadline);
  const deadlineFailed = new Date() > deadlineFormated;

  // forming deadline for render
  const deadlineMonth = (deadlineFormated.getMonth() + 1).toString();

  const deadlineRendered = [
    deadlineFormated.getDate().toString(),
    deadlineMonth.length === 2 ? deadlineMonth : `0${deadlineMonth}`,
    deadlineFormated.getFullYear().toString().slice(2),
  ].join('.');

  function handleActionMenuShow() {
    console.log('скоро здесь будет action menu');
  }

  function handleAddHr() {
    console.log('активирован переход по ссылке "добавить hr"');
  }

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
          <button
            onClick={handleActionMenuShow}
            type="button"
            aria-label="more"
            className="card__menu-icon"
          />
        </div>
        <p className="card__employer">{`${employer}, ${location}`}</p>
        <h4 className="card__title">{title}</h4>
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
              stroke={
                deadlineFailed
                  ? 'hsla(11, 92%, 52%, 1)'
                  : 'hsla(180, 0%, 57%, 1)'
              }
            />
            <p
              className={clsx(
                'card__deadline-text',
                deadlineFailed && 'card__deadline-failed-text'
              )}
            >
              {`до ${deadlineRendered}`}
            </p>
          </div>
          <ul className="card__hr">
            <li className="card__hr-item">
              <button
                onClick={handleAddHr}
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
