import './CandidatesTableSubHeader.scss';

import { useForm } from 'react-hook-form';

import InputWithError from '../UI/InputWithError/InputWithError';

import calendar from '../../temp/images/table_calendar.png';

const CandidatesTableSubHeader = () => {
  const { control } = useForm({ mode: 'all' });

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
      <img
        src={calendar}
        className="candidates-table-sub-header__calendar"
        alt="календарь временно"
      />
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
