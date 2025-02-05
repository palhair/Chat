import { HOST } from '../constants';

export interface ICredentials {
	idInstance: string;
	apiTokenInstance: string;
}

const getSettings = async (data: ICredentials) => {
	const response = await fetch(`${HOST}/waInstance${data.idInstance}/getSettings/${data.apiTokenInstance}`);
	const result = await response.json();

	return result;
};

export { getSettings };
