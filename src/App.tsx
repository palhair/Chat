import { BrowserRouter as Router } from 'react-router';
import './App.css';
import { AppRouter } from './app/AppRouter';

function App() {
	return (
		<>
			<Router>
				<AppRouter />
			</Router>
		</>
	);
}

export default App;
