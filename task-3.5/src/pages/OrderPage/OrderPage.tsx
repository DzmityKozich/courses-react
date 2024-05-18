import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CartPage } from '../CartPage';
import { ContactInformationPage } from '../ContactInformationPage';

type Props = {};

export const OrderPage: React.FC<Props> = () => {
	return (
		<>
			<Routes>
				<Route path="/cart" element={<CartPage />} />
				<Route path="/contact-information" element={<ContactInformationPage />} />
			</Routes>
		</>
	);
};
