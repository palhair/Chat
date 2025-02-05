import { SyntheticEvent, useState } from 'react';
import { ButtonWithIcon } from '../ButtonWithIcon';
import styles from './AddChatForm.module.css';
import { useAppDispatch } from '../../store';
import { addChat, changeCurrentChat } from '../../store/chatsState';
import add from '../../assets/plus-circle.svg';

export const AddChatForm = () => {
	const [phoneNumber, setPhoneNumber] = useState('');
	const dispatch = useAppDispatch();

	const handleAddChat = (e: SyntheticEvent) => {
		e.preventDefault();

		dispatch(addChat({ chatId: `${phoneNumber}@c.us`, chatName: phoneNumber }));
		dispatch(changeCurrentChat(`${phoneNumber}@c.us`));

		setPhoneNumber('');
	};
	return (
		<form onSubmit={handleAddChat} className={styles.form}>
			<input
				className={styles.input}
				type="tel"
				required
				value={phoneNumber}
				placeholder="Добавить чат"
				onChange={(e) => setPhoneNumber(e.target.value)}
			/>

			<ButtonWithIcon src={add} alt="Добавить чат" />
		</form>
	);
};
