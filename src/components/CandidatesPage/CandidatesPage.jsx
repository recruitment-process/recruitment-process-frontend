import './CandidatesPage.scss';
import PropTypes from 'prop-types';
import { Outlet, useLocation } from 'react-router-dom';
import CandidatesTable from '../CandidatesTable/CandidatesTable';
import VacanciesSubHeader from '../VacanciesSubHeader/VacanciesSubHeader';

const CandidatesPage = ({ candidates, onCandidateClick }) => {
  const location = useLocation();

  return (
    <div className="candidates-page">
      <VacanciesSubHeader title="Кандидаты" />
      {location.pathname === '/candidates' && (
        <CandidatesTable
          candidates={candidates}
          onCandidateClick={onCandidateClick}
        />
      )}
      <Outlet />
    </div>
  );
};

export default CandidatesPage;

CandidatesPage.propTypes = {
  candidates: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onCandidateClick: PropTypes.func.isRequired,
};
