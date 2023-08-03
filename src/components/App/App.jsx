import './App.scss';

import { Routes, Route } from 'react-router-dom';

import VacanciesPage from '../VacanciesPage/VacanciesPage';
import VacancyPage from '../VacancyPage/VacancyPage';

import { vacancies } from '../../temp/vacancies';
import { candidates } from '../../temp/candidates';

const App = () => (
  <div className="app__content">
    <Routes>
      <Route
        path="vacancies"
        element={
          <VacanciesPage vacancies={vacancies} candidates={candidates} />
        }
      >
        <Route
          path="vacancy"
          element={<VacancyPage candidates={candidates} />}
        />
      </Route>
    </Routes>
  </div>
);

export default App;
