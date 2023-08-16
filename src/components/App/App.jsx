import { useState, useCallback, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import './App.scss';

import Login from '../Login/Login';
import Register from '../Register/Register';
import RegisterSuccess from '../RegisterSuccess/RegisterSuccess';
import RegisterRetry from '../RegisterRetry/RegisterRetry';
import Preloader from '../Preloader/Preloader';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import VacanciesPage from '../VacanciesPage/VacanciesPage';
import VacancyPage from '../VacancyPage/VacancyPage';
import Main from '../Main/Main';
import AppLayout from '../AppLayout/AppLayout';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import * as api from '../../utils/api';

/* TODO Временный импорты данных вакансий и кандидатов */
import { vacancies } from '../../temp/vacancies';
import { candidates } from '../../temp/candidates';
import Candidate from '../Candidate/Candidate';

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isRegistered, setRegistered] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isPreloaderActive, setPreloaderStatus] = useState(true);
  const navigate = useNavigate();

  // HANDLER USER REGISTRATION
  const handleUserRegistration = async ({ email }) => {
    setLoading(true);
    try {
      const userData = await api.register({ email });
      if (userData) {
        setRegistered(true);
        navigate('/register-success', { replace: true });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // HANDLER USER AUTHORIZATION
  const handleUserAuthorization = async ({ email, password }) => {
    setLoading(true);
    try {
      const userData = await api.authorize({ email, password });
      if (userData) {
        setLoggedIn(true);
        /* TODO На период тестов с FAKE API, и отсутствия cookies,
         ** токен сохраняется в localStorage
         */
        localStorage.setItem('token', userData.token);
        /* TODO Пока нет главной в виде дашборда редирект идёт на вакансии */
        navigate('/vacancies', { replace: true });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // HANDLER USER LOGIN CHECK
  const handleUserLoginCheck = useCallback(async () => {
    /* TODO На период тестов с FAKE API, и отсутствия cookies,
     ** токен достаётся из localStorage
     */
    const token = localStorage.getItem('token');
    if (token) {
      try {
        /* TODO На период тестов с FAKE API, ID пользователя захардкоден */
        const userData = await api.getUserInfo(4);
        if (userData) {
          setLoggedIn(true);
          setRegistered(true);
          setCurrentUser(userData.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setPreloaderStatus(false);
      }
    } else {
      setPreloaderStatus(false);
    }
  }, []);

  // TODO Заглушка для поиска в шапке
  const handleHeaderSearch = (data) => {
    console.log(data);
  };

  // CHECK USER LOGGED IN
  useEffect(() => {
    handleUserLoginCheck();
  }, [loggedIn, handleUserLoginCheck]);

  return (
    <div className="app__content">
      {isPreloaderActive ? (
        <Preloader />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route
              path="/"
              element={
                <AppLayout
                  user={currentUser}
                  onHeaderSearch={handleHeaderSearch}
                />
              }
            >
              <Route
                index
                element={<ProtectedRoute element={Main} loggedIn={loggedIn} />}
              />

              <Route path="/candidate" element={<Candidate />} />

              <Route
                path="/vacancies"
                element={
                  <ProtectedRoute
                    element={VacanciesPage}
                    vacancies={vacancies}
                    candidates={candidates}
                    loggedIn={loggedIn}
                  />
                }
              >
                <Route
                  path="vacancy"
                  element={<VacancyPage candidates={candidates} />}
                />
              </Route>
            </Route>
            <Route
              path="/login"
              element={
                <Login
                  onLogin={handleUserAuthorization}
                  isLoading={isLoading}
                  loggedIn={loggedIn}
                />
              }
            />
            <Route
              path="/register"
              element={
                <Register
                  onRegistration={handleUserRegistration}
                  isLoading={isLoading}
                  loggedIn={loggedIn}
                />
              }
            />
            <Route
              path="/register-success"
              element={
                <RegisterSuccess
                  loggedIn={loggedIn}
                  isRegistered={isRegistered}
                />
              }
            />
            <Route
              path="/register-retry"
              element={
                <RegisterRetry
                  loggedIn={loggedIn}
                  isRegistered={isRegistered}
                />
              }
            />
          </Routes>
        </CurrentUserContext.Provider>
      )}
    </div>
  );
};

export default App;
