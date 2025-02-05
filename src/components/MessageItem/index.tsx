import cn from 'classnames';
import { IMessage } from '../../store/messagesState';
import styles from './MessageItem.module.css';

export const MessageItem = ({ type, text, timestamp }: IMessage) => {
	const data = new Date(timestamp * 1000);
	const hours = `${data.getHours()}`.padStart(2, '0');
	const minutes = `${data.getMinutes()}`.padStart(2, '0');

	const time = `${hours}:${minutes}`;
	return (
		<li
			className={cn(styles.message, {
				[styles.incoming]: type == 'incoming',
				[styles.outgoing]: type == 'outgoing',
			})}
		>
			<div className={styles.content}>{text}</div>
			<div className={styles.time}>{time}</div>
		</li>
	);
};
