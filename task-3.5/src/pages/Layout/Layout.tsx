import React from 'react';
import { Box } from '@mui/material';
import { Navbar } from '../../components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { ItemsPage } from '../ItemsPage/ItemsPage';
import { CartPage } from '../CartPage';

import './Layout.scss';
import { StoreLink } from '../../share';

export const Layout: React.FC = () => {
	return (
		<Box sx={{ flexGrow: 1 }} className="w-full">
			<Navbar />

			<div className="mt-6">
				<StoreLink to="/cart">To somewhere</StoreLink>

				<Routes>
					<Route path="/" element={<ItemsPage />} />
					<Route path="/cart" element={<CartPage />} />
				</Routes>
			</div>
		</Box>
	);
};
