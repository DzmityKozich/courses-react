import { create } from 'zustand';
import { StoreItem } from '../models/types';

interface CartItem {
	amount: number;
	id: number;
}

type Cart = {
	items: CartItem[];
	addItem: (item: StoreItem) => void;
	removeItem: (item: StoreItem) => void;
};

export const useCart = create<Cart>((set) => ({
	items: [],
	addItem: (item) =>
		set((state) => {
			return { items: addItem(item, state.items) };
		}),
	removeItem: (item) =>
		set((state) => {
			return { items: removeItem(item, state.items) };
		}),
}));

const addItem = (item: StoreItem, items: CartItem[]): CartItem[] => {
	const index = items.findIndex(({ id }) => id === item.id);
	if (index === -1) {
		return [...items, { id: item.id, amount: 1 }];
	}
	const copy = [...items];
	copy[index].amount += 1;
	return copy;
};

const removeItem = (item: StoreItem, items: CartItem[]): CartItem[] => {
	const index = items.findIndex(({ id }) => id === item.id);
	if (index === -1) return items;
	const copy = [...items];
	const cartItem = copy[index];
	if (cartItem.amount === 1) {
		copy.splice(index, 1);
	} else {
		copy.splice(index, 1, { ...cartItem, amount: cartItem.amount - 1 });
	}
	return copy;
};
