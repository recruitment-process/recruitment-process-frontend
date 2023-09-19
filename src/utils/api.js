import { makeRequest } from './utils';

import { API_URL } from './constants';
/* const apiUrl = process.env.REACT_APP_API_URL; */

// USER REGISTRATION
export function register({ email, password }) {
  return makeRequest(API_URL, '/signup/', 'POST', {
    email,
    password,
  });
}

// USER AUTHORIZATION
export function authorize({ email, password, remember }) {
  return makeRequest(API_URL, '/login/', 'POST', {
    email,
    password,
    remember_me: remember,
  });
}

// GET USER INFO
export function getUserInfo(userId) {
  return makeRequest(API_URL, `/users/${userId}/`, 'GET');
}

// GET ALL VACANCIES
export function getAllVacancies() {
  return makeRequest(API_URL, '/vacancies/', 'GET');
}

// GET VACANCY
export function getVacancy(vacancyId) {
  return makeRequest(API_URL, `/vacancies/${vacancyId}`, 'GET');
}

// ADD VACANCY
export function addVacancy({
  vacancyTitle,
  companyTitle,
  website,
  author,
  requiredExperience,
  employmentType,
  scheduleWork,
  salary,
  city,
  education,
  pubDate,
  jobConditions,
  jobResponsibilities,
  technologyStack,
  vacancyStatus,
  deadline,
}) {
  return makeRequest(API_URL, '/vacancies/', 'POST', {
    vacancy_title: vacancyTitle,
    company_title: companyTitle,
    website,
    author,
    required_experience: requiredExperience,
    employment_type: employmentType,
    schedule_work: scheduleWork,
    salary,
    city,
    education,
    pub_date: pubDate,
    job_conditions: jobConditions,
    job_responsibilities: jobResponsibilities,
    technology_stack: technologyStack,
    vacancy_status: vacancyStatus,
    deadline,
  });
}
