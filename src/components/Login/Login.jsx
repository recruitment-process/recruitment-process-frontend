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

const Login = ({ onLogin, isLoading, loggedIn }) => {
  const handleSubmit = (data) => {
    onLogin(data);
  };

  return loggedIn ? (
    /* TODO Пока нет главной в виде дашборда редирект идёт на вакансии */
    <Navigate to="/vacancies" replace />
  ) : (
    <AuthScreen isShort>
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
            isDisabled={false}
            withSpan
            withButton
            type="password"
            border="radius"
            validationRules={VALIDATION_CONFIG.password}
            addLabelClass="login__input-password"
          />
          <Checkbox
            label="Запомнить"
            disabled={false}
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
};

export default Login;
