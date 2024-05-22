import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CartPage } from '../CartPage';
import { ContactInformationPage } from '../ContactInformationPage';
import { StoreBreadcrumbs } from '../../share/StoreBreadcrumbs';
import { ShipmentInformationPage } from '../ShipmentInformationPage';
import { StoreLink, RouteGuard } from '../../share';
import { useRoutGuard } from '../../hooks/useRouteGuard';
import { Paths } from '../../routes/routes';

import './OrderPage.scss';

type Props = {};

export const OrderPage: React.FC<Props> = () => {
	const { contactInfoPageAccess, shipmentInfoPageAccess } = useRoutGuard(({ contactInfoPageAccess, shipmentInfoPageAccess }) => ({
		contactInfoPageAccess,
		shipmentInfoPageAccess,
	}));

	return (
		<div className="px-[15rem] mb-10">
			<StoreBreadcrumbs
				breadcrumbs={[
					<StoreLink key="1" to={Paths.cartPage}>
						Cart
					</StoreLink>,
					<StoreLink key="2" to={Paths.contactInfoPage} disabled={!contactInfoPageAccess}>
						Contact information
					</StoreLink>,
					<StoreLink key="3" to={Paths.shipmentInfoPage} disabled={!shipmentInfoPageAccess}>
						Shipment information
					</StoreLink>,
				]}
			></StoreBreadcrumbs>
			<Routes>
				<Route path={Paths.cartPageShort} element={<CartPage />} />
				<Route
					path={Paths.contactInfoPageShort}
					element={
						<RouteGuard access={contactInfoPageAccess}>
							<ContactInformationPage />
						</RouteGuard>
					}
				/>
				<Route
					path={Paths.shipmentInfoPageShort}
					element={
						<RouteGuard access={contactInfoPageAccess}>
							<ShipmentInformationPage />
						</RouteGuard>
					}
				/>
			</Routes>
		</div>
	);
};
