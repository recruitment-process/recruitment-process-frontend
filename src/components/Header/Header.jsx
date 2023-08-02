import { useForm } from 'react-hook-form';
// import { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import './Header.scss';
import InputWithError from '../UI/InputWithError/InputWithError';
import Logo from '../UI/Logo/Logo';
import avatar from '../../images/examples/avatar.png';

// import { useForm } from 'react-hook-form'

const Header = ({ user }) => {
	// DROPDOWN-MENU
	const [isOpen, setIsOpen] = useState(false);

	const { control, handleSubmit, getValues } = useForm();
	const onSubmit = () => {
		handleSubmit(getValues);
		console.log(getValues);
		console.log('data');
	};

	return (
		<header className="header">
			<div className="header__logo-position">
				<Logo />
			</div>
			<form className="header__search-field" onSubmit={onSubmit}>
				<InputWithError
					inputId="search"
					formName="searchForm"
					inputType="text"
					placeholder="Поиск"
					isDisabled={false}
					control={control}
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
						src={avatar}
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

					<div className={clsx('user-menu', isOpen && 'user-menu_active')}>
						<ul className="user-menu__items">
							<li className="user-menu__item">1</li>
							<li>2</li>
							<li>3</li>
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
	}),
};

Header.defaultProps = {
	user: null,
};
export default Header;
