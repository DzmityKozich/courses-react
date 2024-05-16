import { Box, Card, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { StoreItem } from '../../models/types';
import { StoreBtn } from '../../share';

type Props = {
	// item: StoreItem;
};

export const CartItemCard: React.FC<Props> = () => {
	return (
		<Card>
			<CardMedia component="img" image="" alt="Items img" />
			<Box>
				<Typography variant="subtitle1" color="text.secondary" component="div">
					Mac Miller
				</Typography>

				<StoreBtn onClick={() => {}}>Delete</StoreBtn>
			</Box>
			<Box>
				<Box>
					<StoreBtn onClick={() => {}}>-</StoreBtn>
					<div>1</div>
					<StoreBtn onClick={() => {}}>+</StoreBtn>
				</Box>
				price: 132
			</Box>
		</Card>
	);
};
