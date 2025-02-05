import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IChat {
	chatId: string;
	chatName: string;
}

export interface IChatsState {
	chats: IChat[];
	currentChat: IChat | undefined;
}

const initialState: IChatsState = {
	chats: [],
	currentChat: undefined,
};

const chatsSlice = createSlice({
	name: 'chats',
	initialState,
	reducers: {
		addChat: (state, action: PayloadAction<IChat>) => {
			if (state.chats.find((chat) => chat.chatId === action.payload.chatId)) return;
			state.chats = [...state.chats, action.payload];
		},

		deleteChat: (state, action: PayloadAction<string>) => {
			state.chats = state.chats.filter((chat) => chat.chatId !== action.payload);
		},

		changeCurrentChat: (state, action: PayloadAction<string>) => {
			state.currentChat = state.chats.find((chat) => chat.chatId === action.payload);
		},

		changeChatName: (state, action: PayloadAction<IChat>) => {
			state.chats = state.chats.map((chat) => {
				if (chat.chatId === action.payload.chatId) {
					return { ...chat, chatName: action.payload.chatName };
				}
				return chat;
			});
			if (state.currentChat?.chatId == action.payload.chatId) {
				state.currentChat = action.payload;
			}
		},
	},
});

export const { addChat, deleteChat, changeCurrentChat, changeChatName } = chatsSlice.actions;
export default chatsSlice.reducer;
