import React from 'react';
import { CartItemCard } from '../../components/CartItemCard';

export const CartPage: React.FC = () => {
	return (
		<>
			<div className="container mx-auto">
				<CartItemCard></CartItemCard>
			</div>
		</>
	);
};
