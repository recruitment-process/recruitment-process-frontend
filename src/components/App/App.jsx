import './App.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Button from '../UI/Button/Button';
import TempFormWithInputs from '../../temp/TempFormWithInputs/TempFormWithInputs';

import { NavMenu } from '../NavMenu/NavMenu';

const App = () => (
	<div className="app__content">
		<Header />
		<div className="app__test">
			<TempFormWithInputs />
		</div>
		<Button text="ДЕМОВЕРСИЯ" size="normal" type="button" pic="play" />
		<Footer />
		<NavMenu />
	</div>
);

export default App;
