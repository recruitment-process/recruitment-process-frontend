import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import './RegisterSuccess.scss';

import AuthScreen from '../AuthScreen/AuthScreen';
import Logo from '../UI/Logo/Logo';
import Button from '../UI/Button/Button';
import AuthTitle from '../UI/AuthTitle/AuthTitle';

const RegisterSuccess = ({ loggedIn, isRegistered }) => {
  const handleClick = () => {
    /* TODO Пока нет понимания куда должна вести кнопка */
    console.log('click');
  };

  if (loggedIn) {
    /* TODO Пока нет главной в виде дашборда редирект идёт на вакансии */
    <Navigate to="/vacancies" replace />;
  }
  if (!loggedIn && !isRegistered) {
    return <Navigate to="/login" replace />;
  }

  return (
    <AuthScreen isLong>
      <div className="register-success">
        <Logo />
        <AuthTitle
          titleText="Последний шаг и&nbsp;можно начинать"
          addTitleClass="register-success__title"
        />
        <p className="register-success__text">
          Отправили ссылку для завершения регистрации, сейчас можно
          познакомиться поближе с&nbsp;системой
        </p>
        <Button
          onClick={handleClick}
          text="Демоверсия"
          size="normal"
          type="button"
          pic="play"
          addBtnClass="register-success__button"
        />
      </div>
    </AuthScreen>
  );
};

RegisterSuccess.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  isRegistered: PropTypes.bool.isRequired,
};

export default RegisterSuccess;
