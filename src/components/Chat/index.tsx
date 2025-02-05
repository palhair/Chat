import { MessageItem } from '../MessageItem';
import { useAppSelector } from '../../store';
import styles from './Chat.module.css';
import { MessageBar } from '../MessageBar';
import { ChatInfo } from '../ChatInfo';

export const Chat = () => {
	const chat = useAppSelector((state) => state.chatReducer.currentChat);
	const chatMessages = useAppSelector((state) => state.messagesReducer.chatMessages);

	if (!chat)
		return (
			<main className={styles.main}>
				<h2>Выберите чат!</h2>
			</main>
		);

	const messages = !chatMessages[chat.chatId] ? [] : chatMessages[chat.chatId];

	return (
		<main className={styles.main}>
			<ChatInfo {...chat} />
			<div className={styles.wrap}>
				<ul className={styles.list}>
					{messages.map((message) => (
						<MessageItem key={message.idMessage} {...message} />
					))}
				</ul>
			</div>
			<MessageBar />
		</main>
	);
};
