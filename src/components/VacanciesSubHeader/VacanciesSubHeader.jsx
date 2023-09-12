import './VacanciesSubHeader.scss';

import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';

import Button from '../UI/Button/Button';

const VacanciesSubHeader = (props) => {
  const { title } = props;

  const location = useLocation();
  const buttonText =
    location.pathname === '/vacancies' ? 'Новая вакансия' : 'Новый кандидат';

  const buttonLink =
    location.pathname === '/vacancies' ? 'new-vacancy' : 'new-candidate';

  return (
    <section className="vacancies-sub-header">
      <h2 className="vacancies-sub-header__main-text">{title}</h2>
      <Link to={buttonLink} className="vacancies-sub-header__button-link">
        <Button text={buttonText} size="small" pic="plus" type="button" />
      </Link>
    </section>
  );
};
export default VacanciesSubHeader;

VacanciesSubHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
