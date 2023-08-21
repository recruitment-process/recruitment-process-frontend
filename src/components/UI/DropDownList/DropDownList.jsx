import { useState, useEffect, useCallback, useRef } from 'react';
import { useForm } from 'react-hook-form';
import './DropDownList.scss';
import clsx from 'clsx';

import InputWithError from '../InputWithError/InputWithError';

const initialSortCategory = [
  'Первичный скрининг',
  'Интервью с HR',
  'Интервью с руководителем',
  'Тестовое задание',
  'Выполнил задание',
  'Интервью с командой',
  'Оффер',
];

const DropDownList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAddStatusInputVisible, setIsAddStatusInputVisible] = useState(false);
  const [firstCategory, setFirstCategory] = useState(initialSortCategory[0]);
  const [sortCategory, setSortCategory] = useState(
    initialSortCategory.slice([1], [initialSortCategory.length])
  );
  const listRef = useRef(null);

  const { control, handleSubmit } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    console.log(data);
    console.log('bum');
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsAddStatusInputVisible(false);
  };

  // Удаляем в массиве элемент на который кликнули
  const handleCategoryClick = (category) => {
    setFirstCategory(category);
    setSortCategory(initialSortCategory.filter((i) => i !== category));
  };

  const categoryList = sortCategory.map((category) => (
    <li key={category}>
      <button
        onClick={() => handleCategoryClick(category)}
        className="drop-down-list__item drop-down-list__item_state_active"
      >
        {category}
      </button>
    </li>
  ));

  // Закрываем выпадающее меню по клику в любой области экрана, кроме меню
  const handleMouseDown = useCallback((event) => {
    if (listRef.current && !listRef.current.contains(event.target)) {
      setIsOpen(false);
      setIsAddStatusInputVisible(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleMouseDown);
    } else {
      document.removeEventListener('mousedown', handleMouseDown);
    }
  }, [isOpen, handleMouseDown]);

  const handleAddStatus = (e) => {
    e.stopPropagation();
    setIsAddStatusInputVisible(true);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
    <ul
      className={clsx('drop-down-list', isOpen && 'drop-down-list_active')}
      onClick={handleClick}
      ref={listRef}
    >
      <li>
        <button className="drop-down-list__item drop-down-list__item_state_normal">
          {firstCategory}
        </button>
      </li>
      {isOpen && categoryList}
      {isAddStatusInputVisible && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
        <form
          action=""
          className="drop-down-list__form"
          id="addStatus"
          name="addStatus"
          onSubmit={handleSubmit(onSubmit)}
          onClick={(e) => e.stopPropagation()}
        >
          <InputWithError
            label=""
            inputId="addStatusInput"
            inputType="text"
            formName="addStatus"
            placeholder="Введите новый статус"
            isDisabled={false}
            isAutocomplete
            type="in-list-text"
            border="slim-radius"
            control={control}
            addLabelClass="drop-down-list__label"
          />
          <button
            className="drop-down-list__input-btn"
            aria-label="add status button"
          />
        </form>
      )}
      {isOpen && (
        <li className="drop-down-list__btn">
          <button
            className="drop-down-list__item drop-down-list__item_state_last"
            onClick={handleAddStatus}
          >
            Добавить статус
          </button>
        </li>
      )}
    </ul>
  );
};

export default DropDownList;
