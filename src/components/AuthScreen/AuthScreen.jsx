import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './AuthScreen.scss';

const AuthScreen = ({ isLong, ...props }) => {
  const location = useLocation();

  return (
    <main className="auth-screen">
      <section
        className={clsx('auth-screen__section', {
          'auth-screen__section_type_long': isLong,
        })}
      >
        <div
          className={clsx('auth-screen__img-bg', {
            'auth-screen__img-bg_type_long': isLong,
          })}
        />
        <div
          className={clsx('auth-screen__content-wrapper', {
            'auth-screen__content-wrapper_type_long': isLong,
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
        </div>
      </section>
    </main>
  );
};

AuthScreen.propTypes = {
  children: PropTypes.node.isRequired,
  isLong: PropTypes.bool,
};

AuthScreen.defaultProps = {
  isLong: false,
};

export default AuthScreen;
