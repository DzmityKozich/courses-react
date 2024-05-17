import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { StoreLinkBtn } from '../../share';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import './Navbar.scss';

export const Navbar: React.FC = () => {
	return (
		<AppBar position="static" sx={{ bgcolor: '#171717' }}>
			<Toolbar>
				<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}></IconButton>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					{/* FIXME: update logo! */}
					News
				</Typography>

				<StoreLinkBtn icon={<ShoppingCartIcon fontSize="small" />} to="/cart">
					Cart
				</StoreLinkBtn>
			</Toolbar>
		</AppBar>
	);
};
