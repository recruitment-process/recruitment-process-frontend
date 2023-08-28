import './Candidate.scss';

import PropTypes from 'prop-types';
import { Outlet, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import CandidateHeader from './CandidateHeader/CandidateHeader';
import CandidateNavigation from './CandidateNavigation/CandidateNavigation';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const Candidate = ({ candidate, onLikeClick, vacancyName }) => {
  const location = useLocation();

  return (
    <section className="candidate">
      {location.pathname.includes('vacancies') && (
        <Breadcrumbs
          locationTitle={candidate.name}
          secondLocationTitle={vacancyName}
        />
      )}
      <CandidateHeader candidate={candidate} onLikeClick={onLikeClick} />
      <CandidateNavigation />
      <div className="candidate__container">
        <div
          className={clsx(
            'candidate__scroll-container',
            location.pathname.includes('vacancies') &&
              'candidate__scroll-container_height_small'
          )}
        >
          <section className="candidate__content">
            <Outlet />
          </section>
          <section className="candidate__widgets-container">
            {/* TODO: This is temporary components! Put your widgets HERE! */}
            <div className="candidate__widget">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              aliquam, amet at cupiditate, delectus dolore dolores doloribus ea
              excepturi explicabo impedit laudantium, modi nisi nostrum numquam
              pariatur tempora velit voluptatibus!
            </div>
            <div className="candidate__widget">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              aliquam, amet at cupiditate, delectus dolore dolores doloribus ea
              excepturi explicabo impedit laudantium, modi nisi nostrum numquam
              pariatur tempora velit voluptatibus!
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Candidate;

Candidate.propTypes = {
  candidate: PropTypes.shape({ name: PropTypes.string }),
  onLikeClick: PropTypes.func,
  vacancyName: PropTypes.string,
};

Candidate.defaultProps = {
  candidate: undefined,
  onLikeClick: undefined,
  vacancyName: '',
};
