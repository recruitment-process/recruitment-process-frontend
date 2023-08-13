import './CandidatesTable.scss';

import { useRef, useEffect, useState, useCallback } from 'react';

import PropTypes from 'prop-types';

import debounce from '../../utils/debounce';

import CandidatesTableCell from '../CandidatesTableCell/CandidatesTableCell';
import CandidatesTableSort from '../CandidatesTableSort/CandidatesTableSort';

const CandidatesTable = (props) => {
  const { candidates } = props;

  const [scrollPosition, setScrollPosition] = useState(0);
  const ref = useRef(null);

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

  // Передвигаемся в начало контейнера с кандидатами
  const scrollToTop = () => {
    const firstChildElement = ref.current?.firstElementChild;
    firstChildElement?.scrollIntoView({ behavior: 'smooth' });
  };

  const candidatesList = candidates.map((candidate) => (
    <li key={candidate.name}>
      <CandidatesTableCell candidate={candidate} />
    </li>
  ));

  return (
    <>
      <CandidatesTableSort
        pressScrollToTopButton={scrollToTop}
        scrollPosition={scrollPosition}
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
