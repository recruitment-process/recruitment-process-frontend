import './Calendar.scss';

import Calendar from 'react-calendar';
import { useState } from 'react';

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());

  // const formattedDate = (dateToFormat) =>
  //   dateToFormat.toLocaleDateString().split('.').reverse().join('-');
  //
  // console.log(formattedDate());

  return <Calendar onChange={setDate} value={date} />;
};

export default CustomCalendar;
