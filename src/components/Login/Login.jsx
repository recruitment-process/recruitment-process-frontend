import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Login.scss';

import AuthScreen from '../AuthScreen/AuthScreen';
import Logo from '../UI/Logo/Logo';
import Form from '../UI/Form/Form';
import InputWithError from '../UI/InputWithError/InputWithError';
import Checkbox from '../UI/Checkbox/Checkbox';
import AuthTitle from '../UI/AuthTitle/AuthTitle';

import { VALIDATION_CONFIG } from '../../utils/config';

const Login = ({
  onLogin,
  isLoading,
  loggedIn,
  serverError,
  setServerError,
}) => {
  const handleSubmit = (data) => {
    onLogin(data);
  };

  // RESET SERVER ERROR
  useEffect(() => {
    setServerError('');
  }, [setServerError]);

  return loggedIn ? (
    /* TODO Пока нет главной в виде дашборда редирект идёт на вакансии */
    <Navigate to="/vacancies" replace />
  ) : (
    <AuthScreen>
      <div className="login">
        <Logo />
        <AuthTitle
          titleText="Кадры находятся здесь, нужно только войти"
          addTitleClass="login__title"
        />
        <Form
          formName="login"
          onSubmit={handleSubmit}
          buttonText="Войти"
          isLoading={isLoading}
          addBtnClass="login__button"
          addFormClass="login__form"
          addServerErrorClass="login__server-error"
          serverError={serverError}
        >
          <InputWithError
            label=""
            inputId="email"
            inputType="email"
            formName="login"
            placeholder="Email"
            isDisabled={isLoading}
            withSpan
            isAutocomplete
            type="email"
            border="radius"
            validationRules={VALIDATION_CONFIG.email}
            addLabelClass="login__input-email"
          />
          <InputWithError
            label=""
            inputId="password"
            inputType="password"
            formName="login"
            placeholder="Пароль"
            isDisabled={isLoading}
            withSpan
            withButton
            type="password"
            border="radius"
            validationRules={VALIDATION_CONFIG.password}
            addLabelClass="login__input-password"
          />
          <Checkbox
            label="Запомнить"
            disabled={isLoading}
            formName="login"
            id="remember"
            addSpanClass="login__checkbox-text"
            addLabelClass="login__checkbox"
          />
          {/* TODO - Вставлена заглушка в путь. Когда будет готова страница нужно заменить */}
          <Link to="/login" className="login__link">
            Забыли пароль?
          </Link>
        </Form>
      </div>
    </AuthScreen>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  serverError: PropTypes.string,
  setServerError: PropTypes.func.isRequired,
};

Login.defaultProps = {
  serverError: '',
};

export default Login;
