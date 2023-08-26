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
import Resume from '../Candidate/Resume/Resume';
import CandidatesPage from '../CandidatesPage/CandidatesPage';

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isRegistered, setRegistered] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isPreloaderActive, setPreloaderStatus] = useState(true);
  const [serverError, setServerError] = useState('');
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
      setServerError(err.error);
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
      setServerError(err.error);
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
        setServerError(err.error);
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

  const [candidate, setCandidate] = useState(
    JSON.parse(localStorage.getItem('last-candidate')) || {}
  );
  const onCandidateClick = (candidateData) => {
    setCandidate(candidateData);
    localStorage.setItem('last-candidate', JSON.stringify(candidateData));
  };

  const handleLikeClick = () => {
    candidate.like = !candidate.like;
  };

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

              <Route
                path="/candidates"
                element={
                  <ProtectedRoute
                    element={CandidatesPage}
                    candidates={candidates}
                    onCandidateClick={onCandidateClick}
                    loggedIn={loggedIn}
                  />
                }
              >
                <Route
                  path="/candidates/:id"
                  element={
                    <Candidate
                      candidate={candidate}
                      onLikeClick={handleLikeClick}
                    />
                  }
                >
                  <Route
                    path="resume"
                    element={<Resume resume={candidate.resume} />}
                  />
                  <Route path="contacts" element={<p>Contacts</p>} />
                  <Route path="stages" element={<p>Stages</p>} />
                  <Route path="messages" element={<p>Messages</p>} />
                </Route>
              </Route>
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
                  path="/vacancies/:id"
                  element={
                    <VacancyPage
                      candidates={candidates}
                      onCandidateClick={onCandidateClick}
                    />
                  }
                >
                  <Route path="candidates/:id" element={<Candidate />} />
                </Route>
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
                  serverError={serverError}
                  setServerError={setServerError}
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
                  serverError={serverError}
                  setServerError={setServerError}
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
