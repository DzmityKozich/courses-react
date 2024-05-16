import { useEffect, useState } from 'react';
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

	return { items };
};
