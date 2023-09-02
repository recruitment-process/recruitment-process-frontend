import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Register.scss';

import AuthScreen from '../AuthScreen/AuthScreen';
import Logo from '../UI/Logo/Logo';
import Form from '../UI/Form/Form';
import InputWithError from '../UI/InputWithError/InputWithError';
import AuthTitle from '../UI/AuthTitle/AuthTitle';

import { VALIDATION_CONFIG } from '../../utils/config';

const Register = ({
  onRegistration,
  isLoading,
  loggedIn,
  serverError,
  setServerError,
}) => {
  const handleSubmit = (data) => {
    onRegistration(data);
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
      <div className="register">
        <Logo />
        <AuthTitle
          titleText="Удобное место, где&nbsp;находятся кадры"
          addTitleClass="register__title"
        />
        <Form
          formName="register"
          onSubmit={handleSubmit}
          buttonText="Зарегистрироваться"
          isLoading={isLoading}
          addBtnClass="register__button"
          addFormClass="register__form"
          addServerErrorClass="register__server-error"
          serverError={serverError}
        >
          <InputWithError
            label=""
            inputId="email"
            inputType="email"
            formName="register"
            placeholder="Email"
            isDisabled={isLoading}
            withSpan
            isAutocomplete
            type="email"
            border="radius"
            validationRules={VALIDATION_CONFIG.email}
            addLabelClass="register__input-email"
          />
          <InputWithError
            label=""
            inputId="password"
            inputType="password"
            formName="register"
            placeholder="Пароль"
            isDisabled={isLoading}
            withSpan
            withButton
            type="password"
            border="radius"
            validationRules={VALIDATION_CONFIG.password}
            addLabelClass="register__input-password"
          />
        </Form>
      </div>
    </AuthScreen>
  );
};

Register.propTypes = {
  onRegistration: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  serverError: PropTypes.string,
  setServerError: PropTypes.func.isRequired,
};

Register.defaultProps = {
  serverError: '',
};

export default Register;
