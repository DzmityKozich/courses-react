import { Box, Card, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { StoreItem } from '../../models/types';
import { StoreBtn, StoreIconBtn } from '../../share';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

import './CartItemCard.scss';

type Props = {
	item: StoreItem;
	amount: number;
};

export const CartItemCard: React.FC<Props> = ({ item, amount }) => {
	const { thumbnail, description, title, price } = item;

	return (
		<Card sx={{ minHeight: 150 }} className="cartItemCard">
			<CardMedia component="div" image={thumbnail} sx={{ height: '100%', minWidth: 130, borderRadius: '8px' }} className="row-span-2" />

			<Box className="flex flex-row justify-between items-start">
				<Typography component="div">
					{title}, {description}
				</Typography>
				<StoreBtn startIcon={<DeleteIcon />} onClick={() => {}}>
					Delete
				</StoreBtn>
			</Box>

			<Box className="flex flex-row justify-between items-center">
				<Box className="flex flex-row items-center gap-5">
					<StoreIconBtn onClick={() => {}}>
						<AddIcon />
					</StoreIconBtn>

					<div className="font-bold">{amount}</div>

					<StoreIconBtn onClick={() => {}}>
						<RemoveIcon />
					</StoreIconBtn>
				</Box>

				<Typography component="div">
					Price: <span className="text-2xl">${price}</span>
				</Typography>
			</Box>
		</Card>
	);
};
