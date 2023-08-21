import './Candidate.scss';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import CandidateHeader from './CandidateHeader/CandidateHeader';
// import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

// import Resume from './Resume/Resume';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import CandidateNavigation from './CandidateNavigation/CandidateNavigation';
// import Resume from './Resume/Resume';

// eslint-disable-next-line react/prop-types
const Candidate = ({ candidate }) => {
  const handleSetTransitionPageName = (name) => {
    console.log(name);
  };

  return (
    <section className="candidate">
      <Breadcrumbs
        locationTitle="Кандидат"
        setTransitionPageName={handleSetTransitionPageName}
      />
      <CandidateHeader candidate={candidate} />
      <CandidateNavigation />
      <div className="candidate__content">
        <Outlet />
      </div>
    </section>
  );
};

// VacanciesPage.propTypes = {
//   vacancies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
//   candidates: PropTypes.arrayOf(PropTypes.shape()).isRequired,
// };

export default Candidate;

Candidate.propTypes = {
  candidate: PropTypes.shape({}).isRequired,
};
