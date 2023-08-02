import './App.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Logo from '../UI/Logo/Logo';
import Button from '../UI/Button/Button';
import TempFormWithInputs from '../../temp/TempFormWithInputs/TempFormWithInputs';

const App = () => (
	<div className="app__content">
		<Header />
		<Logo />
		<div className="app__test">
			<TempFormWithInputs />
		</div>
		<Button text="ДЕМОВЕРСИЯ" size="normal" type="button" pic="play" />
		<Footer />
	</div>
);

export default App;
