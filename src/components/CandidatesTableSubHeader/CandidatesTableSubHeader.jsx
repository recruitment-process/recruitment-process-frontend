import './CandidatesTableSubHeader.scss';

import { useForm } from 'react-hook-form';

import { useRef, useState } from 'react';
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
            value={startDate || ''}
            onClick={handleCalendarOpen}
            readOnly
          />
          <input
            className="calendar__date-input"
            type="date"
            value={endDate || ''}
            onClick={handleCalendarOpen}
            readOnly
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
            updateDate={selectedDate}
            startDate={startDate}
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
