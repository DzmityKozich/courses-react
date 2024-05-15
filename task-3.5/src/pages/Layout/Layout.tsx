import React from 'react';
import { Box } from '@mui/material';
import { Navbar } from '../../components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { ItemsPage } from '../ItemsPage/ItemsPage';
import { CartPage } from '../CartPage';

import './Layout.scss';

export const Layout: React.FC = () => {
	return (
		<Box sx={{ flexGrow: 1 }} className="w-full">
			<Navbar />

			<Routes>
				<Route path="/" element={<ItemsPage />} />
				<Route path="/cart" element={<CartPage />} />
			</Routes>
		</Box>
	);
};
