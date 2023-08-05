import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './AuthScreen.scss';

const AuthScreen = ({ isShort, ...props }) => {
  const location = useLocation();

  return (
    <main className="auth-screen">
      <section
        className={clsx('auth-screen__section', {
          'auth-screen__section_type_short': isShort,
        })}
      >
        {props.children}
        {location.pathname === '/login' && (
          <p className="auth-screen__text">
            У вас нет аккаунта?{' '}
            <Link to="/register" className="auth-screen__link">
              Зарегистрироваться
            </Link>
          </p>
        )}
        {location.pathname === '/register' && (
          <p className="auth-screen__text">
            У вас уже есть аккаунт?{' '}
            <Link to="/login" className="auth-screen__link">
              Войдите
            </Link>
          </p>
        )}
        {location.pathname === '/register-success' && (
          <p className="auth-screen__text auth-screen__text_place_register-success">
            Мне не пришла ссылка.{' '}
            {/* TODO Помимо перехода тут должно быть действие, а значит нужен будет onClick, и возможно стоит заменить на кнопку */}
            <Link to="/register-retry" className="auth-screen__link">
              Попробовать еще
            </Link>
          </p>
        )}
      </section>
    </main>
  );
};

AuthScreen.propTypes = {
  children: PropTypes.node.isRequired,
  isShort: PropTypes.bool,
};

AuthScreen.defaultProps = {
  isShort: false,
};

export default AuthScreen;
