import './Candidate.scss';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import CandidateHeader from './CandidateHeader/CandidateHeader';
import CandidateNavigation from './CandidateNavigation/CandidateNavigation';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const Candidate = ({ candidate, onLikeClick }) => {
  const handleSetTransitionPageName = (name) => {
    console.log(name);
  };

  return (
    <section className="candidate">
      <Breadcrumbs
        locationTitle="Кандидат"
        setTransitionPageName={handleSetTransitionPageName}
      />
      <CandidateHeader candidate={candidate} onLikeClick={onLikeClick} />
      <CandidateNavigation />
      <div className="candidate__container">
        <div className="candidate__scroll-container">
          <div className="candidate__content">
            <Outlet />
          </div>
          <div className="candidate__widgets-container">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Candidate;

Candidate.propTypes = {
  candidate: PropTypes.shape({}).isRequired,
  onLikeClick: PropTypes.func.isRequired,
};
