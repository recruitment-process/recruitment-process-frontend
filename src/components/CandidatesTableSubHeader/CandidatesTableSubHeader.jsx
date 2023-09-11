import './CandidatesTableSubHeader.scss';

import { useForm } from 'react-hook-form';

import { useEffect, useRef, useState } from 'react';
import InputWithError from '../UI/InputWithError/InputWithError';
import Popup from '../UI/Popup/Popup';
import CustomCalendar from '../UI/Calendar/Calendar';
import { formatDateForInput } from '../../utils/utils';

const CandidatesTableSubHeader = () => {
  const { control } = useForm({ mode: 'all' });

  const btnRef = useRef();

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleCalendarOpen = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const selectedDate = (date) => {
    setStartDate(formatDateForInput(date[0]));
    setEndDate(formatDateForInput(date[1]));
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  // TODO: temp!
  useEffect(() => {
    console.log(`Selected range: start ${startDate}, end ${endDate}`);
  }, [endDate, startDate]);

  return (
    <div className="candidates-table-sub-header">
      <InputWithError
        control={control}
        label="Поиск"
        inputId="search"
        inputType="search"
        formName="candidate-table-search"
        placeholder="Поиск"
        isDisabled={false}
        type="search"
        border="none"
      />
      <div className="candidates-table-sub-header__calendar calendar">
        <form className="calendar__form">
          <button
            className="calendar__button-view"
            aria-label="Кнопка открытия календаря"
            onClick={handleCalendarOpen}
            type="button"
            ref={btnRef}
          />
          <input
            className="calendar__date-input"
            type="date"
            max="9999-12-31"
            value={startDate || ''}
            onChange={(evt) => handleStartDateChange(evt.target.value)}
          />
          <input
            className="calendar__date-input"
            type="date"
            max="9999-12-31"
            value={endDate || ''}
            onChange={(evt) => handleEndDateChange(evt.target.value)}
          />
        </form>
        <Popup
          isPopupVisible={isCalendarOpen}
          setIsPopupVisible={setIsCalendarOpen}
          btnRef={btnRef}
        >
          <CustomCalendar
            selectRange
            allowPartialRange
            startDate={startDate}
            endDate={endDate}
            updateDate={selectedDate}
          />
        </Popup>
      </div>
      <button className="candidates-table-sub-header__filter-btn">
        Фильтры
      </button>
      <button
        className="candidates-table-sub-header__style-btn"
        aria-label="Кнопка изменения внешнего вида карточек"
      />
    </div>
  );
};

export default CandidatesTableSubHeader;
