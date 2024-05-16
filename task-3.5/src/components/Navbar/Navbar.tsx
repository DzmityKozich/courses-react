import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { StoreBtn } from '../../share';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

import './Navbar.scss';

export const Navbar: React.FC = () => {
	const navigate = useNavigate();

	return (
		<AppBar position="static" sx={{ bgcolor: '#171717' }}>
			<Toolbar>
				<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}></IconButton>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					{/* FIXME: update logo! */}
					News
				</Typography>

				<StoreBtn
					onClick={() => {
						navigate('/cart');
					}}
					icon={<ShoppingCartIcon />}
				>
					Cart
				</StoreBtn>
			</Toolbar>
		</AppBar>
	);
};
