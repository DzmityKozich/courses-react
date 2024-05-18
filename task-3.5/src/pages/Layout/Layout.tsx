import React from 'react';
import { Box } from '@mui/material';
import { Navbar } from '../../components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { ItemsPage } from '../ItemsPage/ItemsPage';
import { OrderPage } from '../OrderPage';

import './Layout.scss';

export const Layout: React.FC = () => {
	return (
		<Box sx={{ flexGrow: 1 }} className="w-full">
			<Navbar />

			<div className="mt-6">
				<Routes>
					<Route path="/" element={<ItemsPage />} />
					<Route path="/cart" element={<OrderPage />} />
				</Routes>
			</div>
		</Box>
	);
};
