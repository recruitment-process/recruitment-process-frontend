import MainSheduleMeeting from '../MainSheduleMeeting/MainSheduleMeeting';
import './MainShedule.scss';

import { initialShedule } from '../../temp/initialShedule';

const MainShedule = () => {
  const sheduleList = initialShedule.map((shedule) => (
    <MainSheduleMeeting
      avatar={shedule.avatar}
      name={shedule.name}
      vacancy={shedule.vacancy}
      time={shedule.time}
      key={shedule.name}
    />
  ));

  return (
    <section className="main-shedule">
      <div className="main-shedule__header-container">
        <h4 className="main-shedule__header">Интервью</h4>
        <button className="main-shedule__btn"> 7 марта</button>
      </div>
      {sheduleList}
    </section>
  );
};

export default MainShedule;
