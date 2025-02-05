import { Route, Routes } from 'react-router';
import { LoginPage } from '../pages/LoginPage';
import { MainPage } from '../pages/MainPage';
import { Protected } from '../components/Protected';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/auth' element={<LoginPage />} />
			<Route element={<Protected />}>
				<Route path='/' element={<MainPage />} />
			</Route>
		</Routes>
	);
};
