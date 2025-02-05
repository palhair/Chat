import { useAppDispatch, useAppSelector } from '../../store';
import { changeCurrentChat } from '../../store/chatsState';
import cn from 'classnames';

import styles from './ChatItem.module.css';

type Props = {
	chatName: string;
	chatId: string;
};
export const ChatItem = ({ chatName, chatId }: Props) => {
	const dispatch = useAppDispatch();
	const currentChatId = useAppSelector((state) => state.chatReducer.currentChat?.chatId);

	const handlePickItem = () => {
		dispatch(changeCurrentChat(chatId));
	};

	return (
		<li
			className={cn(styles.item, {
				[styles.active]: currentChatId == chatId,
			})}
			onClick={handlePickItem}
		>
			{chatName}
		</li>
	);
};
