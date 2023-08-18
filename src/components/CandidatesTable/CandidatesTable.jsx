import './CandidatesTable.scss';

import PropTypes from 'prop-types';

import CandidatesTableCell from '../CandidatesTableCell/CandidatesTableCell';
import CandidatesTableSort from '../CandidatesTableSort/CandidatesTableSort';

const CandidatesTable = (props) => {
  const { candidates, onCandidateClick } = props;

  const candidatesList = candidates.map((candidate) => (
    <li key={candidate.name}>
      <CandidatesTableCell
        candidate={candidate}
        onCandidateClick={onCandidateClick}
      />
    </li>
  ));

  return (
    <>
      <div className="candidates-table__white-block" />
      <CandidatesTableSort />
      <ul className="candidates-table__list">{candidatesList}</ul>
    </>
  );
};

export default CandidatesTable;

CandidatesTable.propTypes = {
  candidates: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onCandidateClick: PropTypes.func.isRequired,
};
