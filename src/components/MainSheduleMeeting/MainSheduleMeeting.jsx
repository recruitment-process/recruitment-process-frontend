import './MainSheduleMeeting.scss';

import PropTypes from 'prop-types';

const MainSheduleMeeting = (props) => {
  const { avatar, name, vacancy, time } = props;

  return (
    <div className="main-shedule-meeting">
      <img
        src={avatar}
        alt="фото кандидата"
        className="main-shedule-meeting__avatar"
      />
      <div className="main-shedule-meeting__container">
        <p className="main-shedule-meeting__name">{name}</p>
        <p className="main-shedule-meeting__vacancy">{vacancy}</p>
        <p className="main-shedule-meeting__time">{time}</p>
      </div>
    </div>
  );
};

export default MainSheduleMeeting;

MainSheduleMeeting.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  vacancy: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
