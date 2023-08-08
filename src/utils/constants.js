// VARIABLES
export const API_URL = 'https://reqres.in/api';

// VALIDATIONS MESSAGES
export const VALIDATION_MESSAGES = {
  minLengthPassword: 'Пароль должен содержать не менее 8 символов',
  maxLengthPassword: 'Пароль должен содержать не более 128 символов',
  passwordSpaces: 'Пароль не должен содержать пробелы',
  minLengthEmail: 'Почта должна содержать не менее 6 символов',
  maxLengthEmail: 'Почта должна содержать не более 256 символов',
  emailFormat: 'Укажите почту в формате username@user.ru',
};

// REGEX
export const REGEX = {
  email: /^[A-Za-z0-9\-_.]+@[A-Za-z0-9\-.]{1,}\.[A-Za-z]{2,}$/,
  password: /^[^\s]+$/,
};
