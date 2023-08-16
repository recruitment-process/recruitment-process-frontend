import './Candidate.scss';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import CandidateHeader from './CandidateHeader/CandidateHeader';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import VacanciesSort from '../VacanciesSort/VacanciesSort';
import Resume from './Resume/Resume';

const Candidate = ({ candidate }) => {
  useEffect(() => {
    console.log(candidate);
  }, [candidate]);
  const handleCategoryClick = () => {
    console.log('category');
  };
  return (
    <section className="candidate">
      <Breadcrumbs locationTitle="Кандидат" setTransitionPageName="/12" />
      <CandidateHeader candidate={candidate} />
      <VacanciesSort
        sortCategory={[
          { name: 'Резюме' },
          { name: 'Контакты' },
          { name: 'Воронка кандидата' },
          { name: 'Сообщения' },
          { name: 'Комментарии' },
        ]}
        sortCounter={[]}
        sortValue=""
        selectSortCategory={handleCategoryClick}
      />
      <Resume />
    </section>
  );
};

// VacanciesPage.propTypes = {
//   vacancies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
//   candidates: PropTypes.arrayOf(PropTypes.shape()).isRequired,
// };

export default Candidate;

Candidate.propTypes = {
  candidate: PropTypes.shape({}),
};

Candidate.defaultProps = {
  candidate: null,
};
