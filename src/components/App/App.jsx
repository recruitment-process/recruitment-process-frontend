import './App.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Logo from '../UI/Logo/Logo';
import Button from '../UI/Button/Button';

const App = () => (
	<div className="app__content">
		<Header />
		<Logo />
		<div className="app__test">Itim test</div>
		<Button text="ДЕМО" size="normal" type="button" isVisibleIcon />
		<Footer />
	</div>
);

export default App;
