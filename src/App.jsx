import Navigation from './components/Navigation/Navigation.jsx';
import {Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';

const App = () => {
	return (
		<div>
			<Navigation />
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</div>
	);
};

export default App;