import './App.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Logo from '../UI/Logo/Logo';
import Button from '../UI/Button/Button';

// const App = () => (
// 	<div className="app__content">
// 		<Header />
// 		<Logo />
// 		<div className="app__test">Itim test</div>
// 		<Button text="ДЕМОВЕРСИЯ" size="normal" type="button" pic="play" />
// 		<Footer />
// 	</div>
// );

const App = () => {
	const user = { name: 'Имя Фамилия', job: 'Профессия' };
	return (
		<div className="app__content">
			<Header user={user} />
			<Logo />
			<div className="app__test">Itim test</div>
			<Button text="ДЕМОВЕРСИЯ" size="normal" type="button" pic="play" />
			<Footer />
		</div>
	);
};

export default App;
