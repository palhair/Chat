import { ICredentials } from '../api/account';

export const getUserFromLocalStorage = () => {
	const user = localStorage.getItem('user');

	let credentials: ICredentials | null = null;
	if (user) {
		credentials = JSON.parse(user);
	}

	return credentials;
};
