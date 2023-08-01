import { useForm } from 'react-hook-form';
// import { useEffect } from 'react'
import { Link } from 'react-router-dom';

import './Header.scss';
import InputWithError from '../UI/InputWithError/InputWithError';
import Logo from '../UI/Logo/Logo';
import avatar from '../../images/examples/avatar.png';

// import { useForm } from 'react-hook-form'

const Header = () => {
	const { control, handleSubmit, getValues } = useForm();
	const onSubmit = () => {
		handleSubmit(getValues);
		// console.log(getValues)
		console.log('data');
	};

	return (
		<header className="header">
			<div className="header__logo-position">
				<Logo />
			</div>
			<form className="header__search-field" onSubmit={handleSubmit(onSubmit)}>
				<InputWithError
					inputId="search"
					formName="searchForm"
					inputType="search"
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
				<div className="acc-container">
					<img
						className="acc-container__avatar"
						src={avatar}
						alt="Фото профиля"
					/>
					<div className="acc-container__info">
						<p className="acc-info__name">Ольга Филимонова</p>
						<p className="acc-info__job">HR-менеджер</p>
					</div>
					<button className="acc__menu">.</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
