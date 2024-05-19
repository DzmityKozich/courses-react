import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CartPage } from '../CartPage';
import { ContactInformationPage } from '../ContactInformationPage';
import { StoreBreadcrumbs } from '../../components/StoreBreadcrumbs';
import { ShipmentInformationPage } from '../ShipmentInformationPage';
import { StoreLink } from '../../share';

type Props = {};

export const OrderPage: React.FC<Props> = () => {
	return (
		<div className="px-[15rem]">
			<StoreBreadcrumbs
				breadcrumbs={[
					<StoreLink to="/order/cart">Cart</StoreLink>,
					<StoreLink to="/order/contact-information">Contact information</StoreLink>,
					<StoreLink to="/order/shipment-information">Shipment information</StoreLink>,
				]}
			></StoreBreadcrumbs>
			<Routes>
				<Route path="/cart" element={<CartPage />} />
				<Route path="/contact-information" element={<ContactInformationPage />} />
				<Route path="/shipment-information" element={<ShipmentInformationPage />} />
			</Routes>
		</div>
	);
};
