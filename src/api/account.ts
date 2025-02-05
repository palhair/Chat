// import { apiUrl } from '../constants';

export interface ICredentials {
	idInstance: string;
	apiTokenInstance: string;
}

const getSettings = async (data: ICredentials) => {
	const response = await fetch(
		`https://1103.api.green-api.com/waInstance${data.idInstance}/getSettings/${data.apiTokenInstance}`
	);
	const result = await response.json();

	return result;
};

export { getSettings };
