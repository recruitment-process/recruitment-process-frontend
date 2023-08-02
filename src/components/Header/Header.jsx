import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './Header.scss';
import InputWithError from '../UI/InputWithError/InputWithError';
import Logo from '../UI/Logo/Logo';

const Header = ({ user, onSearch }) => {
  // TEMP!: DROPDOWN-MENU
  const [isOpen, setIsOpen] = useState(false);
  const { control, handleSubmit } = useForm({ mode: 'all' });
  const onSubmit = (query) => {
    onSearch(query);
  };

  return (
    <header className="header">
      <div className="header__logo-position">
        <Logo />
      </div>
      <form
        className="header__search-field"
        action="#"
        id="search-header"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        name="search-header"
      >
        <InputWithError
          control={control}
          label="Поиск"
          inputId="search-header"
          inputType="search"
          formName="search-header"
          placeholder="Поиск"
          isDisabled={false}
          isAutocomplete
          type="search-header"
        />
      </form>
      <div className="header__acc-info-container">
        <ul className="header__options-list options-list">
          <li>
            <Link
              to="/"
              className="options-list__item options-list__item_mail"
            />
          </li>
          <li>
            <Link
              to="/"
              className="options-list__item options-list__item_notification"
            />
          </li>
        </ul>
        <div
          role="presentation"
          className="acc-container"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            className="acc-container__avatar"
            src={user.avatar}
            alt="Фото профиля"
          />
          <div className="acc-container__info">
            <p className="acc-info__name">{user.name}</p>
            <p className="acc-info__job">{user.job}</p>
          </div>
          <button
            className="acc__menu"
            onClick={() => setIsOpen(!isOpen)}
            onKeyDown={() => setIsOpen(false)}
          >
            .
          </button>
          {/* TEMP!: Dropdown-menu */}
          <div className={clsx('user-menu', isOpen && 'user-menu_active')}>
            <ul className="user-menu__items">
              <li className="user-menu__item">1 in</li>
              <li>2 prog</li>
              <li>3 ress</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    job: PropTypes.string,
    avatar: PropTypes.string,
  }),
  onSearch: PropTypes.func,
};

Header.defaultProps = {
  user: null,
  onSearch: null,
};

export default Header;
