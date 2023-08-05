import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Register.scss';

import AuthScreen from '../AuthScreen/AuthScreen';
import Logo from '../UI/Logo/Logo';
import Form from '../UI/Form/Form';
import InputWithError from '../UI/InputWithError/InputWithError';
import AuthTitle from '../UI/AuthTitle/AuthTitle';

import { VALIDATION_CONFIG } from '../../utils/config';

const Register = ({ onRegistration, isLoading, loggedIn }) => {
  const handleSubmit = (data) => {
    onRegistration(data);
  };

  return loggedIn ? (
    /* TODO Пока нет главной в виде дашборда редирект идёт на вакансии */
    <Navigate to="/vacancies" replace />
  ) : (
    <AuthScreen isShort>
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
        </Form>
      </div>
    </AuthScreen>
  );
};

Register.propTypes = {
  onRegistration: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default Register;
