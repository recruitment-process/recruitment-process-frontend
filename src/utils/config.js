import { VALIDATION_MESSAGES, REGEX } from './constants';

// VALIDATION CONFIGURATION
export const VALIDATION_CONFIG = {
  password: {
    required: VALIDATION_MESSAGES.minLengthPassword,
    minLength: {
      value: 8,
      message: VALIDATION_MESSAGES.minLengthPassword,
    },
    maxLength: {
      value: 128,
      message: VALIDATION_MESSAGES.maxLengthPassword,
    },
    validate: (value) =>
      REGEX.password.test(value) === true || VALIDATION_MESSAGES.passwordSpaces,
  },
  email: {
    required: VALIDATION_MESSAGES.emailFormat,
    minLength: {
      value: 6,
      message: VALIDATION_MESSAGES.minLengthEmail,
    },
    maxLength: {
      value: 256,
      message: VALIDATION_MESSAGES.maxLengthEmail,
    },
    validate: (value) =>
      REGEX.email.test(value) === true || VALIDATION_MESSAGES.emailFormat,
  },
};
