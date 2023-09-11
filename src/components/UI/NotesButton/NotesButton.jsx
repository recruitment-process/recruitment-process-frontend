import PropTypes from 'prop-types';

import './NotesButton.scss';

import iconUp from '../../../images/icons/icon-notes-button-up.svg';
import iconDown from '../../../images/icons/icon-notes-button-down.svg';

const NotesButton = (props) => {
  const { text, onClick, icon } = props;

  return (
    <button className="notes-button" onClick={onClick} type="button">
      {text}
      {icon === 'up' && (
        <img
          src={iconUp}
          className="notes-button__icon"
          alt="стрелочка вверх"
        />
      )}
      {icon === 'down' && (
        <img
          src={iconDown}
          className="notes-button__icon"
          alt="стрелочка вниз"
        />
      )}
    </button>
  );
};

NotesButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.oneOf(['up', 'down', 'none']),
  onClick: PropTypes.func,
};

NotesButton.defaultProps = {
  text: '',
  icon: 'none',
  onClick: null,
};

export default NotesButton;
