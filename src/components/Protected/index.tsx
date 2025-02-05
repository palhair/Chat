import { Navigate, Outlet, useLocation } from 'react-router';
// import { useLocation, Outlet } from 'react-router-dom';

export const Protected = () => {
	const location = useLocation();

	return localStorage.getItem('user') ? <Outlet /> : <Navigate to='/auth' state={{ from: location }} replace />;
};
