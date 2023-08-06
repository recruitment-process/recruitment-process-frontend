// VARIABLES
export const API_URL = 'https://reqres.in/api';

// VALIDATIONS MESSAGES
export const VALIDATION_MESSAGES = {
  required: 'Это поле должно быть заполнено',
  minLength: 'Пароль должен содержать не менее 8 символов',
  maxLength: 'Пароль должен содержать не более 128 символов',
  email: 'Укажите почту в формате username@user.ru',
};

// REGEX
export const REGEX = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};
