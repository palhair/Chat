import { useEffect } from 'react';
import styles from './MainPage.module.css';
import { useNotificationListener } from '../../hooks/useNotificationListener';
import { ChatList } from '../../components/ChatList';
import { Chat } from '../../components/Chat';

export interface IChatItem {
	id: string;
	title: string;
}

export const MainPage = () => {
	const { startListening, stopListening } = useNotificationListener();

	useEffect(() => {
		startListening();
		return () => {
			stopListening();
		};
	}, []);

	return (
		<div className={styles.container}>
			<ChatList />
			<Chat />
		</div>
	);
};
