import PropTypes from 'prop-types';
import { useOutletContext } from 'react-router-dom';

import CandidatesTable from '../CandidatesTable/CandidatesTable';
import CandidatesTableSubHeader from '../CandidatesTableSubHeader/CandidatesTableSubHeader';

const VacancyPage = (props) => {
  const { candidates } = props;
  const [sortCandidatesValue] = useOutletContext();

  const sortedCandidates = candidates.filter(
    (candidate) => candidate.status === sortCandidatesValue
  );

  return (
    <>
      <CandidatesTableSubHeader />
      <CandidatesTable candidates={sortedCandidates} />
    </>
  );
};

export default VacancyPage;

VacancyPage.propTypes = {
  candidates: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
