import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CartPage } from '../CartPage';

type Props = {};

export const OrderPage: React.FC<Props> = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<CartPage />} />
			</Routes>
		</>
	);
};
