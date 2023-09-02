import { useState, useEffect, useCallback, useRef } from 'react';
import { useForm } from 'react-hook-form';
import './DropDownList.scss';
import clsx from 'clsx';

import PropTypes from 'prop-types';

import InputWithError from '../InputWithError/InputWithError';

const DropDownList = (props) => {
  const { addNewStatus, initialStatuses, mod } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [isAddStatusInputVisible, setIsAddStatusInputVisible] = useState(false);
  const [firstCategory, setFirstCategory] = useState(initialStatuses[0]);
  const [sortCategory, setSortCategory] = useState(
    initialStatuses.slice([1], [initialStatuses.length])
  );
  const listRef = useRef(null);

  const { control, handleSubmit, reset } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    addNewStatus(data.addStatusInput);
    reset();
  };

  useEffect(() => {
    setSortCategory(initialStatuses.slice([1], [initialStatuses.length]));
  }, [initialStatuses]);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsAddStatusInputVisible(false);
  };

  // Удаляем в массиве элемент на который кликнули
  const handleCategoryClick = (category) => {
    setFirstCategory(category);
    setSortCategory(initialStatuses.filter((i) => i !== category));
  };

  const categoryList = sortCategory.map((category) => (
    // TODO Изменить ключи на нормальный id с бека
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
      className={clsx(
        'drop-down-list',
        mod === 'header' && 'drop-down-list_mod_header',
        isOpen && 'drop-down-list_active'
      )}
      onClick={handleClick}
      ref={listRef}
    >
      <li>
        <button
          className={clsx(
            'drop-down-list__item',
            'drop-down-list__item_state_normal',
            mod === 'header' && 'drop-down-list__item_mod_header'
          )}
        >
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

DropDownList.propTypes = {
  addNewStatus: PropTypes.func.isRequired,
  initialStatuses: PropTypes.arrayOf(PropTypes.string).isRequired,
  mod: PropTypes.oneOf(['header']),
};

DropDownList.defaultProps = {
  mod: null,
};
