import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    text: {
      description: 'Название кнопки',
    },
    disabled: {
      description: 'Состояние кнопки',
    },
    size: {
      description: 'Размер кнопки',
    },
    type: {
      description: 'Тип кнопки',
    },
    pic: {
      description: 'Выбор икноки',
    },
    onClick: {
      description: 'Обработчик нажатия кнопки',
    },
    addBtnClass: {
      description: 'Добавляет классы для кнопки',
    },
  },
};

export const Primary = {
  args: {
    text: 'ДЕМО',
    disabled: false,
    size: 'normal',
    type: 'button',
    pic: 'plus',
    onClick: null,
  },
};
