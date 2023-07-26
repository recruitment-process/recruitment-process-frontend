import './App.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Logo from '../UI/Logo/Logo';

const App = () => (
	<div className="app__content">
		<Header />
		<Logo />
		<div className="app__test">Itim test</div>
		<Footer />
	</div>
);

export default App;
