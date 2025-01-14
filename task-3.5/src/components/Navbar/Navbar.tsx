import React from 'react';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { StoreLinkBtn } from '../../share';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../../hooks/useCart';
import { Link } from 'react-router-dom';
import { Paths } from '../../routes/routes';

import './Navbar.scss';

export const Navbar: React.FC = () => {
	const { totalItems } = useCart(({ totalItems }) => ({ totalItems }));
	const amount = totalItems();

	return (
		<AppBar position="static" sx={{ bgcolor: '#171717' }}>
			<Toolbar>
				<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}></IconButton>
				<Link to="/" className="flex-1">
					<div className="logo">Products</div>
				</Link>

				<StoreLinkBtn icon={<ShoppingCartIcon fontSize="small" />} badgeContent={amount > 0 ? amount.toString() : ''} to={Paths.cartPage}>
					Cart
				</StoreLinkBtn>
			</Toolbar>
		</AppBar>
	);
};
