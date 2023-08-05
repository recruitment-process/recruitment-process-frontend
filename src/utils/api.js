import { makeRequest } from './utils';

import { API_URL } from './constants';

// USER REGISTRATION
export function register({ email }) {
  return makeRequest(API_URL, '/register', 'POST', {
    email,
    /* TODO На период тестов с FAKE API, пароль захардкожен */
    password: '12345678',
  });
}

// USER AUTHORIZATION
export function authorize({ email, password }) {
  return makeRequest(API_URL, '/login', 'POST', {
    email,
    password,
  });
}

// GET USER INFO
export function getUserInfo(userId) {
  return makeRequest(API_URL, `/users/${userId}`, 'GET');
}
