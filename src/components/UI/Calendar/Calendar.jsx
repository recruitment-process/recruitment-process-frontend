import './Calendar.scss';

import Calendar from 'react-calendar';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const CustomCalendar = ({
  selectRange,
  allowPartialRange,
  updateDate,
  startDate,
  onDateClick,
}) => {
  const [date, setDate] = useState(
    startDate ? new Date(startDate) : new Date()
  );

  useEffect(() => {
    updateDate(date);
  }, [date, updateDate]);

  return (
    <Calendar
      onChange={setDate}
      value={date}
      selectRange={selectRange}
      onActiveStartDateChange={onDateClick}
      allowPartialRange={allowPartialRange}
    />
  );
};

export default CustomCalendar;

CustomCalendar.propTypes = {
  updateDate: PropTypes.func.isRequired,
  startDate: PropTypes.string,
  onDateClick: PropTypes.func,
  selectRange: PropTypes.bool,
  allowPartialRange: PropTypes.bool,
};

CustomCalendar.defaultProps = {
  startDate: null,
  selectRange: false,
  onDateClick: null,
  allowPartialRange: false,
};
