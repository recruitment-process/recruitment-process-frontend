import './Breadcrumbs.scss';

import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = (props) => {
  const { locationTitle, setTransitionPageName } = props;

  const location = useLocation();

  let currentLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`;

      let crumbWithName = '';
      if (crumb === 'vacancies') {
        crumbWithName = 'Вакансии';
      } else if (crumb === 'vacancy') {
        crumbWithName = locationTitle;
      }

      return (
        <li key={crumb} className="breadcrumbs__item">
          {location.pathname !== '/vacancies' && (
            <Link
              to={currentLink}
              className="breadcrumbs__item-link"
              onClick={() => setTransitionPageName(crumbWithName)}
            >
              {crumbWithName}
            </Link>
          )}
        </li>
      );
    });

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__items">{crumbs}</ul>
    </nav>
  );
};

export default Breadcrumbs;

Breadcrumbs.propTypes = {
  locationTitle: PropTypes.string.isRequired,
  setTransitionPageName: PropTypes.func.isRequired,
};
