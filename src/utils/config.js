import { VALIDATION_MESSAGES, REGEX } from './constants';

// VALIDATION CONFIGURATION
export const VALIDATION_CONFIG = {
  password: {
    required: VALIDATION_MESSAGES.required,
    minLength: {
      value: 8,
      message: VALIDATION_MESSAGES.minLength,
    },
    maxLength: {
      value: 128,
      message: VALIDATION_MESSAGES.maxLength,
    },
  },
  email: {
    required: VALIDATION_MESSAGES.required,
    validate: (value) =>
      REGEX.email.test(value) === true || VALIDATION_MESSAGES.email,
  },
};
