import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CartPage } from '../CartPage';
import { ContactInformationPage } from '../ContactInformationPage';
import { StoreBreadcrumbs } from '../../share/StoreBreadcrumbs';
import { ShipmentInformationPage } from '../ShipmentInformationPage';
import { StoreLink } from '../../share';

type Props = {};

export const OrderPage: React.FC<Props> = () => {
	return (
		<div className="px-[15rem] mb-10">
			<StoreBreadcrumbs
				breadcrumbs={[
					<StoreLink key="1" to="/order/cart">
						Cart
					</StoreLink>,
					<StoreLink key="2" to="/order/contact-information">
						Contact information
					</StoreLink>,
					<StoreLink key="3" to="/order/shipment-information">
						Shipment information
					</StoreLink>,
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
