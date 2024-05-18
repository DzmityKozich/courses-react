import React from 'react';
import { CartItemCard } from '../../components/CartItemCard';
import { useCart } from '../../hooks/useCart';
import { PageTitle, StoreLinkBtn } from '../../share';

export const CartPage: React.FC = () => {
	const { items, addItem, deleteItem, subtractItem, sum, totalItems } = useCart(
		({ items, sum, totalItems, deleteItem, addItem, subtractItem }) => ({
			items,
			sum,
			deleteItem,
			addItem,
			subtractItem,
			totalItems,
		})
	);

	return (
		<>
			<div className="container mx-auto">
				<PageTitle title="Cart" />
				<div className="flex flex-col gap-4 mb-8">
					{items.map(({ item, amount }) => (
						<CartItemCard
							key={item.id}
							item={item}
							amount={amount}
							deleteItem={() => deleteItem(item)}
							increaseAmount={() => addItem(item)}
							reduceAmount={() => subtractItem(item)}
						/>
					))}
				</div>

				<div className="cartSumInfo mb-8">
					<div>
						Together: <strong>{totalItems()}</strong>
					</div>
					<div>
						Sum: <strong>${sum()}</strong>
					</div>
				</div>

				<StoreLinkBtn to="/order/contact-information">Next step</StoreLinkBtn>
			</div>
		</>
	);
};
