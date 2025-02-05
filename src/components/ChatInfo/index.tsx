import { IChat } from '../../store/chatsState';
import styles from './ChatInfo.module.css';

export const ChatInfo = ({ chatName }: IChat) => {
	return (
		<div className={styles.container}>
			<p>{chatName}</p>
		</div>
	);
};
