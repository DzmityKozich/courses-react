import React, { useMemo } from 'react';
import { CartItemCard } from '../../components/CartItemCard';
import { useCart } from '../../hooks/useCart';
import { useStoreItems } from '../../hooks/useStoreItems';

export const CartPage: React.FC = () => {
	const { cartItems } = useCart(({ items }) => ({ cartItems: items }));
	const { getItemsByIds, items: storeItem } = useStoreItems();

	const items = useMemo(() => {
		return getItemsByIds(cartItems.map(({ id }) => id));
	}, [cartItems, getItemsByIds]);

	return (
		<>
			<div className="container mx-auto">
				{storeItem.splice(0, 1).map((item) => (
					<CartItemCard key={item.id} item={item} amount={1} />
				))}
			</div>
		</>
	);
};
