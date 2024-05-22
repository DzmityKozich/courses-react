import React from 'react';
import { Box } from '@mui/material';
import { Navbar } from '../../components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { ItemsPage } from '../ItemsPage/ItemsPage';
import { OrderPage } from '../OrderPage';

import './Layout.scss';
import { OrderInformationPage } from '../OrderInformationPage';
import { RouteGuard } from '../../share';
import { useRoutGuard } from '../../hooks/useRouteGuard';

export const Layout: React.FC = () => {
	const { orderInfoPageAccess } = useRoutGuard(({ orderInfoPageAccess }) => ({ orderInfoPageAccess }));

	return (
		<Box sx={{ flexGrow: 1 }} className="w-full">
			<Navbar />

			<div className="mt-6">
				<Routes>
					<Route path="/" element={<ItemsPage />} />
					<Route path="/order/*" element={<OrderPage />} />
					<Route
						path="/order-info"
						element={
							<RouteGuard access={orderInfoPageAccess}>
								<OrderInformationPage />
							</RouteGuard>
						}
					/>
				</Routes>
			</div>
		</Box>
	);
};
