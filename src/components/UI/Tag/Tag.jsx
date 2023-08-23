import './Tag.scss';

import PropTypes from 'prop-types';

const Tag = ({ title }) => (
  <li className="tag" key={title}>
    {title}
  </li>
);
export default Tag;

Tag.propTypes = {
  title: PropTypes.string.isRequired,
};
