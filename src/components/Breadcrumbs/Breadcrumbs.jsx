import './Breadcrumbs.scss';

import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = (props) => {
  const { locationTitle, secondLocationTitle } = props;

  const location = useLocation();

  let currentLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter(
      (crumb) =>
        crumb !== '' &&
        crumb !== 'resume' &&
        crumb !== 'contacts' &&
        crumb !== 'stages' &&
        crumb !== 'messages'
    );

  const crumbsList = crumbs.map((crumb, i) => {
    currentLink += `/${crumb}`;
    let crumbWithName = '';
    if (crumb === 'vacancies') {
      crumbWithName = 'Вакансии';
    } else if (crumb === 'candidates') {
      crumbWithName = 'Кандидаты';
    } else if (i === crumbs.length - 1) {
      crumbWithName = locationTitle;
    } else {
      crumbWithName = secondLocationTitle;
    }

    return (
      <li key={crumb} className="breadcrumbs__item">
        {location.pathname !== '/vacancies' &&
          location.pathname !== '/vacancies/' &&
          i !== crumbs.length - 1 && (
            <Link to={currentLink} className="breadcrumbs__item-link">
              {crumbWithName}
            </Link>
          )}
        {i === crumbs.length - 1 && (
          <span className="breadcrumbs__item-link">{crumbWithName}</span>
        )}
      </li>
    );
  });

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__items">{crumbsList}</ul>
    </nav>
  );
};

export default Breadcrumbs;

Breadcrumbs.propTypes = {
  locationTitle: PropTypes.string.isRequired,
  secondLocationTitle: PropTypes.string,
};

Breadcrumbs.defaultProps = {
  secondLocationTitle: '',
};
