import './CandidatesTable.scss';

import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { useScroll } from '../../utils/hooks/useScroll';

import CandidatesTableCell from '../CandidatesTableCell/CandidatesTableCell';
import CandidatesTableSort from '../CandidatesTableSort/CandidatesTableSort';

const CandidatesTable = (props) => {
  const { candidates, onCandidateClick } = props;

  const [sortCandidates, setSortCandidates] = useState(candidates);
  const [candidatesList, setCandidatesList] = useState(null);

  const { scrollToTop, scrollPosition, ref } = useScroll(`#candidates-table`);

  useEffect(() => {
    setSortCandidates(candidates);
  }, [candidates]);

  useEffect(() => {
    setCandidatesList(
      sortCandidates.map((candidate) => (
        <li key={candidate.name}>
          <CandidatesTableCell
            candidate={candidate}
            onCandidateClick={onCandidateClick}
          />
        </li>
      ))
    );
  }, [sortCandidates, onCandidateClick]);

  const handleSortCandidates = (sortValue) => {
    setSortCandidates((prevState) => {
      const sortedCandidates = [...prevState];

      if (sortValue.candidate === 'sortUp') {
        sortedCandidates.sort((a, b) => -a.name.localeCompare(b.name));
      } else if (sortValue.candidate === 'sortDown') {
        sortedCandidates.sort((a, b) => a.name.localeCompare(b.name));
      }

      if (sortValue.match === 'sortUp') {
        sortedCandidates.sort((a, b) => a.match - b.match);
      } else if (sortValue.match === 'sortDown') {
        sortedCandidates.sort((a, b) => b.match - a.match);
      }

      // TODO: Дописать сортировку по статусу

      if (sortValue.exp === 'sortUp') {
        sortedCandidates.sort(
          (a, b) => parseInt(a.exp, 10) - parseInt(b.exp, 10)
        );
      } else if (sortValue.exp === 'sortDown') {
        sortedCandidates.sort(
          (a, b) => parseInt(b.exp, 10) - parseInt(a.exp, 10)
        );
      }

      if (sortValue.work === 'sortUp') {
        sortedCandidates.sort((a, b) => -a.work.localeCompare(b.work));
      } else if (sortValue.work === 'sortDown') {
        sortedCandidates.sort((a, b) => a.work.localeCompare(b.work));
      }
      return sortedCandidates;
    });
  };

  return (
    <>
      <CandidatesTableSort
        pressScrollToTopButton={scrollToTop}
        scrollPosition={scrollPosition}
        pressSortButton={handleSortCandidates}
      />
      <ul ref={ref} className="candidates-table__list" id="candidates-table">
        {candidatesList}
      </ul>
    </>
  );
};

export default CandidatesTable;

CandidatesTable.propTypes = {
  candidates: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onCandidateClick: PropTypes.func.isRequired,
};
