import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    text: {
      name: 'Название кнопки',
    },
    disabled: {
      name: 'Состояние кнопки',
    },
    size: {
      name: 'Размер кнопки',
    },
    type: {
      name: 'Тип кнопки',
    },
    pic: {
      name: 'Выбор икноки',
    },
  },
};

export const Primary = {
  args: {
    text: 'ДЕМО',
    disabled: false,
    size: 'normal',
    pic: 'plus',
    type: 'button',
  },
};
