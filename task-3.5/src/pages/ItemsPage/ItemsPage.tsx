import React from 'react';
import { useStoreItems } from '../../hooks/useStoreItems';
import { ItemCard } from '../../components/ItemCard';
import { useCart } from '../../hooks/useCart';

export const ItemsPage: React.FC = () => {
	const { items } = useStoreItems();
	const { addItem } = useCart(({ addItem }) => ({ addItem }));

	return (
		<>
			<div className="container mx-auto">
				<div className="grid grid-cols-5 place-items-center gap-y-12">
					{items.map((item) => {
						const { thumbnail, price, title, id, description } = item;
						return <ItemCard key={id} imgSrc={thumbnail} price={price} title={title} text={description} onAdd={() => addItem(item)} />;
					})}
				</div>
			</div>
		</>
	);
};
