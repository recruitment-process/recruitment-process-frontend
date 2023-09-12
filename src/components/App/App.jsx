import { useState, useCallback, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import './App.scss';

import Login from '../Login/Login';
import Register from '../Register/Register';
import RegisterSuccess from '../RegisterSuccess/RegisterSuccess';
import RegisterRetry from '../RegisterRetry/RegisterRetry';
import Preloader from '../Preloader/Preloader';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import VacanciesPage from '../VacanciesPage/VacanciesPage';
import VacancyPage from '../VacancyPage/VacancyPage';
import NewVacancy from '../NewVacancy/NewVacancy';
import Main from '../Main/Main';
import AppLayout from '../AppLayout/AppLayout';
import CandidateFunnel from '../CandidateFunnel/CandidateFunnel';
import RightSideBar from '../UI/RightSideBarWith/RightSideBar';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import * as api from '../../utils/api';

/* TODO Временный импорты данных вакансий и кандидатов */
import { vacancies } from '../../temp/vacancies';
import { candidates } from '../../temp/candidates';
import Candidate from '../Candidate/Candidate';
import Resume from '../Candidate/Resume/Resume';
import CandidatesPage from '../CandidatesPage/CandidatesPage';
import { funnelsList } from '../../temp/funnelsList';
import PageUnderConstruction from '../PageUnderConstruction/PageUnderConstruction';
import PageNotFound from '../PageNotFound/PageNotFound';

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isRegistered, setRegistered] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isPreloaderActive, setPreloaderStatus] = useState(true);
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();

  // HANDLER USER REGISTRATION
  const handleUserRegistration = async ({ email, password }) => {
    setLoading(true);
    try {
      const userData = await api.register({ email, password });
      if (userData) {
        setRegistered(true);
        navigate('/register-success', { replace: true });
      }
    } catch (err) {
      setServerError(err.Invalid);
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
        localStorage.setItem('userId', userData.id);
        navigate('/', { replace: true });
      }
    } catch (err) {
      setServerError(err.Invalid);
    } finally {
      setLoading(false);
    }
  };

  // HANDLER USER LOGIN CHECK
  const handleUserLoginCheck = useCallback(async () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      try {
        const userData = await api.getUserInfo(userId);
        if (userData) {
          setLoggedIn(true);
          setRegistered(true);
          // TODO В ответе у пользователя нет аватара, пока заглушка
          setCurrentUser({
            ...userData,
            avatar:
              'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
          });
        }
      } catch (err) {
        setServerError(err.Invalid);
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

  const location = useLocation();
  // Получаем название вакансии для хлебных крошек
  const vacancyId = location.pathname.split('/')[2];

  const vacancyName = vacancies.find(
    (vacancy) => vacancy.id === vacancyId
  )?.title;

  // HANDLER ADD NEW VACANCY
  const handleAddNewVacancy = () => {
    // request logic
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
                path="/calendar"
                element={
                  <ProtectedRoute
                    element={PageUnderConstruction}
                    loggedIn={loggedIn}
                    name="Календарь"
                    text="Совсем скоро можно будет планировать свой рабочий день, назначать собеседования, создавать события и получать уведомления в Telegram"
                  />
                }
              />
              <Route
                path="/messages"
                element={
                  <ProtectedRoute
                    element={PageUnderConstruction}
                    loggedIn={loggedIn}
                    name="Сообщения"
                    text="Совсем скоро здесь можно будет отправлять сообщения кандидатам на почту или Telegram, хранить переписку и общаться с коллегами"
                  />
                }
              />
              <Route
                path="/staff"
                element={
                  <ProtectedRoute
                    element={PageUnderConstruction}
                    loggedIn={loggedIn}
                    name="Сотрудники"
                    text="Совсем скоро здесь можно будет вести штатных сотрудников, планировать отпуск, учитывать больничные, направлять на обучение и многое другое"
                  />
                }
              />
              <Route
                path="/reports"
                element={
                  <ProtectedRoute
                    element={PageUnderConstruction}
                    loggedIn={loggedIn}
                    name="Отчеты"
                    text="Совсем скоро здесь можно будет формировать полезные и наглядные отчеты о проделанной работе"
                  />
                }
              />
              <Route
                path="/settings"
                element={
                  <ProtectedRoute
                    element={PageUnderConstruction}
                    loggedIn={loggedIn}
                    name="Настройки"
                    text="Совсем скоро здесь можно будет настроить интерфейс системы как будет удобно именно вам, установить важные параметры для просмотра кандидатов и многое другое"
                  />
                }
              />
              <Route
                path="/support"
                element={
                  <ProtectedRoute
                    element={PageUnderConstruction}
                    loggedIn={loggedIn}
                    name="Поддержка"
                    text="Совсем скоро здесь можно будет обратиться за помощью при появлении любой проблемы и затруднительной ситуации, а также узнать ответы на популярные вопросы"
                  />
                }
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
                  <Route
                    path="stages"
                    element={<CandidateFunnel funnelsList={funnelsList} />}
                  />
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
                />
              </Route>
              <Route
                path="/vacancies/:id/:id"
                element={
                  <Candidate
                    candidate={candidate}
                    onLikeClick={handleLikeClick}
                    vacancyName={vacancyName}
                  />
                }
              >
                <Route
                  path="resume"
                  element={<Resume resume={candidate.resume} />}
                />
                <Route path="contacts" element={<p>Contacts</p>} />
                <Route
                  path="stages"
                  element={<CandidateFunnel funnelsList={funnelsList} />}
                />
                <Route path="messages" element={<p>Messages</p>} />
              </Route>

              <Route
                path="/vacancies/new-vacancy"
                element={
                  <NewVacancy
                    isLoading={isLoading}
                    onSubmit={handleAddNewVacancy}
                  />
                }
              />
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
            <Route
              path="*"
              element={
                <ProtectedRoute loggedIn={loggedIn} element={PageNotFound} />
              }
            />
          </Routes>
          <RightSideBar header="Header" />
        </CurrentUserContext.Provider>
      )}
    </div>
  );
};

export default App;
