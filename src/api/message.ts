import { apiUrl } from '../constants';
import { getUserFromLocalStorage } from '../utils/getUserFromLocalStorage';
import { INotification } from './type';

interface IBodyMessage {
	chatId: string;
	message: string;
}

const sendMessage = async (data: IBodyMessage) => {
	const credentials = getUserFromLocalStorage();
	if (!credentials) return;

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
	const credentials = getUserFromLocalStorage();
	if (!credentials) return;

	const response = await fetch(
		`${apiUrl}/waInstance${credentials.idInstance}/receiveNotification/${credentials.apiTokenInstance}`
	);
	const result = await response.json();

	return result;
};

const deleteNotification = async (receiptId: number) => {
	const credentials = getUserFromLocalStorage();
	if (!credentials) return;

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
