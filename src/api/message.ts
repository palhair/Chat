import { apiUrl } from '../constants';
import { ICredentials } from './account';
import { INotification } from './type';

const user = localStorage.getItem('user');

let credentials: ICredentials;
if (user) {
	credentials = JSON.parse(user);
}

interface IBodyMessage {
	chatId: string;
	message: string;
}

const sendMessage = async (data: IBodyMessage) => {
	try {
		const response = await fetch(
			`${apiUrl}/waInstance${credentials.idInstance}/sendMessage/${credentials.apiTokenInstance}`,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			}
		);
		const result = await response.json();
		return result;
	} catch (e) {
		if (e instanceof Error) {
			console.log(e.message);
		}
	}
};

const receiveNotification = async (): Promise<INotification | undefined | null> => {
	const response = await fetch(
		`${apiUrl}/waInstance${credentials.idInstance}/receiveNotification/${credentials.apiTokenInstance}`
	);
	const result = await response.json();

	return result;
};

const deleteNotification = async (receiptId: number) => {
	try {
		const response = await fetch(
			`${apiUrl}/waInstance${credentials.idInstance}/deleteNotification/${credentials.apiTokenInstance}/${receiptId}`,
			{
				method: 'DELETE',
			}
		);
		const result = await response.json();
		return result;
	} catch (e) {
		if (e instanceof Error) {
			console.log(e.message);
		}
	}
};
export { sendMessage, receiveNotification, deleteNotification };
