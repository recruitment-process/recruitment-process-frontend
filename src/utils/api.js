import { makeRequest } from './utils';

/* import { API_URL } from './constants'; */
const apiUrl = process.env.REACT_APP_API_URL;

// USER REGISTRATION
export function register({ email, password }) {
  return makeRequest(apiUrl, '/signup/', 'POST', {
    email,
    password,
  });
}

// USER AUTHORIZATION
export function authorize({ email, password }) {
  return makeRequest(apiUrl, '/login/', 'POST', {
    email,
    password,
  });
}

// GET USER INFO
export function getUserInfo(userId) {
  return makeRequest(apiUrl, `/users/${userId}/`, 'GET');
}
