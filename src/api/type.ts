export interface INotification {
	//минимум для типизации ответа сервера.
	receiptId: number;
	body: IBody;
}

export interface IBody {
	typeWebhook: string;
	instanceData: IInstanceData;
	timestamp: number;
	idMessage: string;
	senderData?: ISenderData;
	messageData?: IMessageData;
}

export interface IInstanceData {
	idInstance: number;
	wid: string;
	typeInstance: string;
}

export interface ISenderData {
	chatId: string;
	chatName: string;
	sender: string;
	senderName: string;
	senderContactName: string;
}

export interface IMessageData {
	typeMessage: string;
	extendedTextMessageData: IExtendedTextMessageData;
}

export interface IExtendedTextMessageData {
	text: string;
	description: string;
	title: string;
	previewType: string;
	jpegThumbnail: string;
	forwardingScore: number;
	isForwarded: boolean;
}
