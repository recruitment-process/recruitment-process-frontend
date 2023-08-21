import './CandidatesTable.scss';

import { useRef, useEffect, useState, useCallback } from 'react';

import PropTypes from 'prop-types';

import { debounce } from '../../utils/utils';

import CandidatesTableCell from '../CandidatesTableCell/CandidatesTableCell';
import CandidatesTableSort from '../CandidatesTableSort/CandidatesTableSort';

const CandidatesTable = (props) => {
  const { candidates } = props;

  const [scrollPosition, setScrollPosition] = useState(0);
  const ref = useRef(null);
  const [sortCandidates, setSortCandidates] = useState(candidates);
  const [candidatesList, setCandidatesList] = useState(null);

  const handleSCrollPosition = useCallback(() => {
    setScrollPosition(document.querySelector('#candidates-table').scrollTop);
  }, []);

  // Чтобы функция вызывалась не чаще чем раз в 300 мсек
  const setScrollPositionDebaunced = debounce(handleSCrollPosition, 300);

  // Слушатель события на появление скролла у контейнера с кандидатами
  useEffect(() => {
    document
      .querySelector('#candidates-table')
      .addEventListener('scroll', setScrollPositionDebaunced);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSortCandidates(candidates);
  }, [candidates]);

  useEffect(() => {
    setCandidatesList(
      sortCandidates.map((candidate) => (
        <li key={candidate.name}>
          <CandidatesTableCell candidate={candidate} />
        </li>
      ))
    );
  }, [sortCandidates]);

  // Передвигаемся в начало контейнера с кандидатами
  const scrollToTop = () => {
    const firstChildElement = ref.current?.firstElementChild;
    firstChildElement?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSortCandidates = (sortValue) => {
    // console.log(sortValue);

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
      // console.log('click', sortCandidates);
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
};
