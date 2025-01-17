import React, { useEffect } from 'react';
import { CartItemCard } from '../../components/CartItemCard';
import { useCart } from '../../hooks/useCart';
import { PageTitle, StoreLinkBtn } from '../../share';
import { useRoutGuard } from '../../hooks/useRouteGuard';
import { Paths } from '../../routes/routes';

export const CartPage: React.FC = () => {
	const { setContactInfoPageAccess } = useRoutGuard(({ setContactInfoPageAccess }) => ({ setContactInfoPageAccess }));
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

	useEffect(() => {
		setContactInfoPageAccess(!!items.length);
	}, [items, setContactInfoPageAccess]);

	return (
		<>
			<div className="container mx-auto">
				<PageTitle title="Cart" />
				<div className="flex flex-col gap-4 mb-8">
					{!items.length && <div className="text-3xl">The Cart is Empty</div>}
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

				<StoreLinkBtn to={Paths.contactInfoPage} disabled={!items.length}>
					Next step
				</StoreLinkBtn>
			</div>
		</>
	);
};
