import './FilterMenu.scss';

import { useForm } from 'react-hook-form';

// Components
import { ReactComponent as CloseIcon } from '../../images/icons/icon-close.svg';
import InputWithError from '../UI/InputWithError/InputWithError';
import Checkbox from '../UI/Checkbox/Checkbox';
import Form from '../UI/Form/Form';

export const FilterMenu = () => {
  const { control } = useForm({ mode: 'onBlur' });

  return (
    <Form
      formName="filter-menu"
      className="filter-menu"
      buttonText="Показать"
      addFormClass="filter-menu"
    >
      <CloseIcon className="icon" />
      <h1 className="filter-menu__title">Фильтры</h1>
      <div className="filter-menu__block">
        <h2 className="filter-menu__sub_title">Возраст кандидата</h2>
        <div className="filter-menu__inputs">
          <InputWithError
            control={control}
            placeholder="От"
            type="number"
            inputType="text"
            inputId="ageFrom"
            formName="filterMenu"
            isDisabled={false}
          />
          <InputWithError
            control={control}
            placeholder="До"
            type="number"
            inputType="text"
            inputId="ageTo"
            formName="filterMenu"
            isDisabled={false}
          />
        </div>
      </div>
      <div className="filter-menu__block">
        <h2 className="filter-menu__sub_title">Образование</h2>
        <Checkbox
          control={control}
          formName="filterMenu"
          label="Высшее"
          id="High"
        />
        <Checkbox
          control={control}
          formName="filterMenu"
          label="Среднее профессиональное"
          id="Secondary"
        />
        <Checkbox
          control={control}
          formName="filterMenu"
          label="Курс переподготовки"
          id="Course"
        />
      </div>
      <div className="filter-menu__block">
        <h2 className="filter-menu__sub_title">Опыт работы</h2>
        <Checkbox
          control={control}
          formName="filterMenu"
          label="Без опыта"
          id="Free experience"
        />
        <Checkbox
          control={control}
          formName="filterMenu"
          label="от 1 года до 3 лет"
          id="from 1 to 3"
        />
        <Checkbox
          control={control}
          formName="filterMenu"
          label="от 3 до 6 лет"
          id="from 3 to 6"
        />
        <Checkbox
          control={control}
          formName="filterMenu"
          label="более 6 лет"
          id="more 6"
        />
      </div>
      <div className="filter-menu__block">
        <h2 className="filter-menu__sub_title">График работы</h2>
        <Checkbox
          control={control}
          formName="filterMenu"
          label="офис"
          id="office"
        />
        <Checkbox
          control={control}
          formName="filterMenu"
          label="удаленный график"
          id="remote"
        />
        <Checkbox
          control={control}
          formName="filterMenu"
          label="гибридный график"
          id="gibrid"
        />
      </div>
      <div className="filter-menu__block">
        <h2 className="filter-menu__sub_title">Первичный скрининг</h2>
        <Checkbox
          control={control}
          formName="filterMenu"
          label="Первичный скрининг"
          id="sctining"
        />
      </div>
    </Form>
  );
};
