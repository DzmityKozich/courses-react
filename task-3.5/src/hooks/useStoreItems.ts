import { useCallback, useEffect, useState } from 'react';
import { StoreItem } from '../models/types';

const url = 'https://dummyjson.com/products';

const getStoreItems = async () => {
	const res = await fetch(url);
	return await res.json();
};

export const useStoreItems = () => {
	const [items, setItems] = useState<StoreItem[]>([]);

	useEffect(() => {
		getStoreItems().then(({ products }) => {
			setItems(products);
		});
	}, []);

	const getItemsByIds = useCallback(
		(ids: number[]) => {
			return items.filter(({ id }) => ids.includes(id));
		},
		[items]
	);

	const getItemById = useCallback(
		(id: number) => {
			return items.find((item) => item.id === id);
		},
		[items]
	);

	return { items, getItemById, getItemsByIds };
};
