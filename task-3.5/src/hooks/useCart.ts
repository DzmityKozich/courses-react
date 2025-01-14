import { create } from 'zustand';
import { StoreItem } from '../models/types';

interface CartItem {
	amount: number;
	item: StoreItem;
}

type Cart = {
	items: CartItem[];
	sum: () => number;
	totalItems: () => number;
	addItem: (item: StoreItem) => void;
	subtractItem: (item: StoreItem) => void;
	deleteItem: (item: StoreItem) => void;
};

export const useCart = create<Cart>((set, get) => ({
	items: [],
	sum: () => calculateSum(get().items),
	totalItems: () => totalItems(get().items),
	addItem: (item) =>
		set((state) => {
			return { items: addItem(item, state.items) };
		}),
	subtractItem: (item) =>
		set((state) => {
			return { items: subtractItem(item, state.items) };
		}),
	deleteItem: (item) =>
		set((state) => {
			return { items: deleteItem(item, state.items) };
		}),
}));

const calculateSum = (items: CartItem[]): number => {
	return +items
		.reduce((sum, { item, amount }) => {
			return sum + item.price * amount;
		}, 0)
		.toFixed(2);
};

const totalItems = (items: CartItem[]): number => {
	return items.reduce((total, { amount }) => {
		return total + amount;
	}, 0);
};

const addItem = (item: StoreItem, items: CartItem[]): CartItem[] => {
	const index = findCartIntemIndex(item.id, items);
	if (index === -1) {
		return [...items, { item, amount: 1 }];
	}
	const copy = [...items];
	copy[index].amount += 1;
	return copy;
};

const subtractItem = (item: StoreItem, items: CartItem[]): CartItem[] => {
	const index = findCartIntemIndex(item.id, items);
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

const deleteItem = (item: StoreItem, items: CartItem[]): CartItem[] => {
	const index = findCartIntemIndex(item.id, items);
	if (index === -1) return [...items];
	const copy = [...items];
	copy.splice(index, 1);
	return copy;
};

const findCartIntemIndex = (storeItemId: number, items: CartItem[]): number => {
	return items.findIndex(({ item }) => item.id === storeItemId);
};
