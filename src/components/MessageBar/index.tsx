import { SyntheticEvent, useState } from 'react';
import { useAppSelector } from '../../store';
import styles from './MessageBar.module.css';
import { sendMessage } from '../../api/message';
import send from '../../assets/send.svg';
import { ButtonWithIcon } from '../ButtonWithIcon';

export const MessageBar = () => {
	const [message, setMessage] = useState('');
	const chatId = useAppSelector((state) => state.chatReducer.currentChat);

	const handleSendMessage = (e: SyntheticEvent) => {
		e.preventDefault();
		if (message == '' || !chatId) return;

		sendMessage({ chatId: chatId.chatId, message }).catch((e) => console.log(e));
		setMessage('');
	};

	return (
		// <div className={styles.container}>
		<form className={styles.form} onSubmit={handleSendMessage}>
			<textarea
				className={styles.textarea}
				name='message'
				id='message'
				value={message}
				rows={message.split('\n').length}
				onChange={(e) => setMessage(e.target.value)}
			></textarea>
			<ButtonWithIcon alt='send' src={send} />
		</form>
		// </div>
	);
};
