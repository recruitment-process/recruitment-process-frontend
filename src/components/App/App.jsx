import './App.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Button from '../UI/Button/Button';
import TempFormWithInputs from '../../temp/TempFormWithInputs/TempFormWithInputs';
import user from '../../temp/examples/user_example';

const App = () => {
	const handleMainSearch = (query) => {
		console.log(query);
	};
	// USER DATA EXAMPLE

	return (
		<div className="app__content">
			<Header user={user} onSearch={handleMainSearch} />
			<div className="app__test">
				<TempFormWithInputs />
			</div>
			<Button text="ДЕМОВЕРСИЯ" size="normal" type="button" pic="play" />
			<Footer />
		</div>
	);
};

export default App;
