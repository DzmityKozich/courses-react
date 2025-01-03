import { create } from 'zustand';
import { Message } from '../types/Message';

type ChatState = {
	messages: Message[];
	sendMessage: (message: Message) => void;
};

export const useChatStore = create<ChatState>((set) => ({
	messages: [],
	sendMessage: (message) =>
		set((state) => {
			return { messages: [...state.messages, message] };
		}),
}));
