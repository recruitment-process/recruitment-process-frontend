import { useForm } from 'react-hook-form';

import InputWithError from './InputWithError';

export default {
  title: 'Input with error',
  component: InputWithError,
  tags: ['autodocs'],
  argTypes: {
    addLabelClass: {
      description: 'Определяет дополнительный класс класс для label.',
    },
    label: {
      description: 'Текст тега label.',
    },
    inputId: {
      description:
        'ID элемента input. Также используется в хуке useController для присвоения атрибута name тега input, и в атрибуте htmlFor тега label.',
    },
    inputType: {
      description: 'Определяет тип тега input.',
    },
    formName: {
      description: 'Определяет к какой форме относится тег input.',
    },
    placeholder: {
      description: 'Текст плэйсхолдера.',
    },
    isDisabled: {
      description: 'Определяет состояние disabled.',
    },
    isAutocomplete: {
      description: 'Определяет включено ли автозаполнение данных.',
    },
    withSpan: {
      description:
        'Определяет есть ли в теге input верхний span для подсказки, и нижний span для ошибки.',
    },
    withButton: {
      description: 'Определяет есть ли кнопка для показа пароля в теге input.',
    },
    isSlim: {
      description: 'Определяет стиль отрисовки (короткий\\высокий).',
    },
    type: {
      description: 'Определяет имя для модификатора _type_.',
    },
    border: {
      description: 'Определяет наличие и стиль границ элемента.',
    },
    validationRules: {
      description: 'Объект с правилами валидации.',
    },
    control: {
      description: 'Объект управляемой формы хука useForm.',
    },
  },
};

const Template = (args) => {
  const { control } = useForm({ mode: 'all' });

  return <InputWithError control={control} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Username',
  inputId: 'username',
  inputType: 'text',
  formName: 'loginForm',
  placeholder: 'Enter your username',
  isDisabled: false,
  isAutocomplete: true,
  withSpan: false,
  withButton: false,
  isSlim: false,
  type: 'text',
  border: 'none',
  validationRules: {},
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  inputId: 'password',
  inputType: 'password',
  formName: 'loginForm',
  placeholder: 'Enter your password',
  isDisabled: false,
  isAutocomplete: false,
  withSpan: true,
  withButton: true,
  isSlim: false,
  type: 'password',
  border: 'radius',
  validationRules: {
    required: 'Поле должно быть заполнено',
    minLength: {
      value: 6,
      message: 'Минимальное количество символов: 6',
    },
    maxLength: {
      value: 128,
      message: 'Максимальное количество символов: 128',
    },
  },
};

export const Email = Template.bind({});
Email.args = {
  label: 'Email',
  inputId: 'email',
  inputType: 'email',
  formName: 'signupForm',
  placeholder: 'Enter your email',
  isDisabled: false,
  isAutocomplete: true,
  withSpan: true,
  withButton: false,
  isSlim: false,
  type: 'email',
  border: 'radius',
  validationRules: {
    required: 'Поле должно быть заполнено',
    validate: (value) =>
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) === true ||
      'Необходимо указать e-mail в формате name@domain.zone',
  },
};

export const Search = Template.bind({});
Search.args = {
  label: 'Поиск',
  inputId: 'search',
  inputType: 'search',
  formName: 'searchForm',
  placeholder: 'Поиск',
  isDisabled: false,
  isAutocomplete: true,
  withSpan: false,
  withButton: false,
  type: 'search',
  border: 'normal',
  isSlim: false,
  validationRules: {},
};

export const SearchHeader = Template.bind({});
SearchHeader.args = {
  label: 'Поиск в шапке',
  inputId: 'search',
  inputType: 'search',
  formName: 'searchForm',
  placeholder: 'Поиск',
  isDisabled: false,
  isAutocomplete: true,
  withSpan: false,
  withButton: false,
  isSlim: true,
  type: 'search-header',
  border: 'none',
  validationRules: {},
};

export const Text = Template.bind({});
Text.args = {
  label: 'Текст',
  inputId: 'text',
  inputType: 'text',
  formName: 'textForm',
  placeholder: 'Текст',
  isDisabled: false,
  isAutocomplete: true,
  withSpan: false,
  withButton: false,
  isSlim: true,
  type: 'text',
  border: 'radius',
  validationRules: {},
};
