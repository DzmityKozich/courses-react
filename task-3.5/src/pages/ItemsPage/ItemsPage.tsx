import React from 'react';
import { useStoreItems } from '../../hooks/useStoreItems';
import { ItemCard } from '../../components/ItemCard';

export const ItemsPage: React.FC = () => {
	const { items } = useStoreItems();

	return (
		<>
			<div className="container mx-auto">
				<div className="grid grid-cols-5 place-items-center gap-y-12">
					{items.map(({ thumbnail, price, title, id, description }) => {
						return <ItemCard key={id} imgSrc={thumbnail} price={price} title={title} text={description} />;
					})}
				</div>
			</div>
		</>
	);
};
