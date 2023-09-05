import './Calendar.scss';

import Calendar from 'react-calendar';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const CustomCalendar = ({
  selectRange,
  allowPartialRange,
  updateDate,
  startDate,
  endDate,
}) => {
  const [date, setDate] = useState([new Date(), new Date()]);

  useEffect(() => {
    if (startDate !== '' || endDate !== '') {
      setDate([new Date(startDate), new Date(endDate)]);
    }
  }, [setDate, endDate, startDate]);

  const handleChange = (evt) => {
    setDate(evt);
    updateDate(evt);
  };

  return (
    <Calendar
      onChange={(evt) => handleChange(evt)}
      value={date}
      selectRange={selectRange}
      allowPartialRange={allowPartialRange}
    />
  );
};

export default CustomCalendar;

CustomCalendar.propTypes = {
  updateDate: PropTypes.func.isRequired,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  selectRange: PropTypes.bool,
  allowPartialRange: PropTypes.bool,
};

CustomCalendar.defaultProps = {
  startDate: null,
  endDate: null,
  selectRange: false,
  allowPartialRange: false,
};
