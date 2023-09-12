import './Tag.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Tag = ({ title, status }) => (
  <li
    key={title}
    className={clsx('tag', status === 'default' && 'tag_status_default')}
  >
    {title}
  </li>
);
export default Tag;

Tag.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['default', 'active']),
};

Tag.defaultProps = {
  status: 'active',
};
