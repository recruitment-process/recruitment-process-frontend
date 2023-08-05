import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import './RegisterRetry.scss';

import AuthScreen from '../AuthScreen/AuthScreen';
import Logo from '../UI/Logo/Logo';
import AuthTitle from '../UI/AuthTitle/AuthTitle';

const RegisterRetry = ({ loggedIn, isRegistered }) => {
  if (loggedIn) {
    /* TODO Пока нет главной в виде дашборда редирект идёт на вакансии */
    <Navigate to="/vacancies" replace />;
  }
  if (!loggedIn && !isRegistered) {
    return <Navigate to="/login" replace />;
  }

  return (
    <AuthScreen>
      <div className="register-retry">
        <Logo />
        <AuthTitle
          titleText="Отправили ссылку повторно"
          addTitleClass="register-retry__title"
        />
        <p className="register-retry__text">
          Проверьте папки &laquo;Рассылки&raquo; или &laquo;Спам&raquo;, если
          и&nbsp;в&nbsp;этом случае ссылки не&nbsp;оказалось, напишите нам
          в&nbsp;
          {/* TODO Когда будет понятен механизм поддержки исправить адрес электронной почты */}
          <a href="mailto:ZxQyS@example.com" className="register-retry__link">
            поддержку
          </a>
        </p>
      </div>
    </AuthScreen>
  );
};

RegisterRetry.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  isRegistered: PropTypes.bool.isRequired,
};

export default RegisterRetry;
