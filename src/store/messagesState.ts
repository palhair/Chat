import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IMessage {
	type: 'incoming' | 'outgoing';
	text: string;
	idMessage: string;
	chatId: string;
	chatName: string;
	timestamp: number;
}

export interface IChatsState {
	chatMessages: Record<string, IMessage[]>;
}

const initialState: IChatsState = {
	chatMessages: {},
};

const messagesSlice = createSlice({
	name: 'messages',
	initialState,
	reducers: {
		addMessage: (state, action: PayloadAction<IMessage>) => {
			if (!state.chatMessages[action.payload.chatId]) {
				state.chatMessages[action.payload.chatId] = [];
			}
			state.chatMessages[action.payload.chatId] = [...state.chatMessages[action.payload.chatId], action.payload];
		},
	},
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
