import PropTypes from 'prop-types';
import clsx from 'clsx';

import './CompanyLogo.scss';

// КОМПОНЕНТ И СТИЛИ НУЖНО ДОРАБОТАТЬ!!
const CompanyLogo = ({ stage }) => (
  <div
    className={clsx(
      'company-logo',
      stage === 'active' && 'company-logo_stage_active',
      stage === 'edit' && 'company-logo_stage_edit',
      stage === 'normal' && 'company-logo_stage_normal',
      stage === 'empty' && 'company-logo_stage_empty'
    )}
    src=""
    alt="company-logo"
  />
);

CompanyLogo.propTypes = {
  stage: PropTypes.oneOf(['active', 'edit', 'normal', 'empty']).isRequired,
};

export default CompanyLogo;
