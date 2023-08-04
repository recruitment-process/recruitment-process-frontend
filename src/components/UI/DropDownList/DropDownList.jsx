import { useState } from 'react';
import './DropDownList.scss';
import clsx from 'clsx';

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
  const [firstCategory, setFirstCategory] = useState(initialSortCategory[0]);
  const [sortCategory, setSortCategory] = useState(initialSortCategory);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Удаляем в массиве элементы с первого до того, на который кликнули
  const handleCategoryClick = (category) => {
    setFirstCategory(category);
    setSortCategory(
      sortCategory.slice(
        [sortCategory.indexOf(category)],
        [sortCategory.length]
      )
    );
  };

  const categoryList = sortCategory.map((category, index) => {
    if (!index) return null;

    return (
      <li key={category}>
        <button
          onClick={() => handleCategoryClick(category)}
          className={clsx(
            'drop-down-list__item drop-down-list__item_state_normal',
            'drop-down-list__item_state_active'
          )}
        >
          {category}
        </button>
      </li>
    );
  });

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
    <ul
      className={clsx('drop-down-list', isOpen && 'drop-down-list_active')}
      onClick={handleClick}
    >
      <li>
        <button className="drop-down-list__item drop-down-list__item_state_normal">
          {firstCategory}
        </button>
      </li>
      {isOpen && categoryList}
    </ul>
  );
};

export default DropDownList;
