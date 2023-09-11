import './PageNotFound.scss';

// import clsx from 'clsx';

import Logo from '../UI/Logo/Logo';

const PageNotFound = () => (
  <section className="page-not-found">
    <div className="page-not-found__logo">
      <Logo color="white" />
    </div>
    <div className="page-not-found__container">
      <h2 className="page-not-found__header">404</h2>
      <p className="page-not-found__sub-header">
        Такой страницы больше не существует
      </p>
      <p className="page-not-found__text">
        Такое случается, когда неверно введён адрес страницы или страница уже
        неактуальна. В этом случае перейдите на Главную и попробуйте найти
        раздел ещё раз
      </p>
      <a href="/" className="page-not-found__link">
        {' '}
        перейти на главную
      </a>
    </div>
  </section>
);

export default PageNotFound;
