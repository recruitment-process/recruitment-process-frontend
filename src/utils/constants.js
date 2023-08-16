// VARIABLES
export const API_URL = 'https://reqres.in/api';

// VALIDATIONS MESSAGES
export const VALIDATION_MESSAGES = {
  maxLengthPassword: 'Пароль должен содержать не более 128 символов',
  passwordFormat:
    'Пароль может содержать от 8 символов. Латинские буквы, цифры, спец. символы без пробелов',
  maxLengthEmail: 'Почта должна содержать не более 256 символов',
  emailFormat: 'Укажите почту в формате username@user.ru',
};

// REGEX
export const REGEX = {
  email: /^[A-Za-z0-9\-_.]+@[A-Za-z0-9\-.]{1,}\.[A-Za-z]{2,}$/,
  password: /^[^\sа-яА-Я]+$/u,
};
