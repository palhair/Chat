import { useAppSelector } from '../../store';
import { ChatItem } from '../ChatItem';
import styles from './ChatList.module.css';
import { AddChatForm } from '../AddChatForm';

export const ChatList = () => {
	const chats = useAppSelector((state) => state.chatReducer.chats);

	return (
		<aside className={styles.container}>
			<div className={styles.header}>
				<h2>Чаты</h2>
				<AddChatForm />
			</div>
			<div className={styles.wrap}>
				<ul className={styles.chats}>
					{chats.map((chat) => (
						<ChatItem key={chat.chatId} {...chat}></ChatItem>
					))}
				</ul>
			</div>
		</aside>
	);
};
