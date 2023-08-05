import './VacanciesSubHeader.scss';

import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import Button from '../UI/Button/Button';

const VacanciesSubHeader = (props) => {
  const { title } = props;

  const location = useLocation();
  const buttonText =
    location.pathname === '/vacancies' ? 'Новая вакансия' : 'Новый кандидат';

  return (
    <section className="vacancies-sub-header">
      <h2 className="vacancies-sub-header__main-text">{title}</h2>
      <Button text={buttonText} size="small" pic="plus" type="button" />
    </section>
  );
};
export default VacanciesSubHeader;

VacanciesSubHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
