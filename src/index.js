import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* TODO Для деплоя на GH Pages, BrowserRouter заменён на HashRouter */
  <HashRouter>
    <App />
  </HashRouter>
);
