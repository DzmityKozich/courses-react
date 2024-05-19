import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { StoreLinkBtn } from '../../share';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import './Navbar.scss';
import { useCart } from '../../hooks/useCart';

export const Navbar: React.FC = () => {
	const { totalItems } = useCart(({ totalItems }) => ({ totalItems }));
	const amount = totalItems();

	return (
		<AppBar position="static" sx={{ bgcolor: '#171717' }}>
			<Toolbar>
				<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}></IconButton>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					{/* FIXME: update logo! */}
					News
				</Typography>

				<StoreLinkBtn icon={<ShoppingCartIcon fontSize="small" />} badgeContent={amount > 0 ? amount.toString() : ''} to="/order/cart">
					Cart
				</StoreLinkBtn>
			</Toolbar>
		</AppBar>
	);
};
