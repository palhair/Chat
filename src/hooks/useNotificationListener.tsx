import { useState } from 'react';
import { deleteNotification, receiveNotification } from '../api/message';
import { useAppDispatch, useAppSelector } from '../store';
import { addMessage } from '../store/messagesState';
import { changeChatName } from '../store/chatsState';

export const useNotificationListener = () => {
	const [isListening, setIsListening] = useState(true);
	const chat = useAppSelector((state) => state.chatReducer.currentChat);
	const dispatch = useAppDispatch();

	const receive = () => {
		if (!isListening) return;
		receiveNotification().then((res) => {
			if (res) {
				const body = res.body;
				if (body?.messageData?.extendedTextMessageData?.text && body?.senderData) {
					const type = body.typeWebhook == 'outgoingAPIMessageReceived' ? 'outgoing' : 'incoming';
					const text = body.messageData.extendedTextMessageData.text;
					const idMessage = body.idMessage;
					const chatId = body.senderData.chatId;
					const chatName = body.senderData.chatName;
					const timestamp = body.timestamp;

					dispatch(addMessage({ type, text, idMessage, chatId, chatName, timestamp }));

					if (chatName != chat?.chatName) {
						dispatch(changeChatName({ chatName, chatId }));
					}
				}
				deleteNotification(res.receiptId).then(() => {
					receive();
				});
			} else {
				receive();
			}
		});
	};

	const startListening = () => {
		receive();
	};

	const stopListening = () => {
		setIsListening(false);
	};
	return { startListening, stopListening };
};
