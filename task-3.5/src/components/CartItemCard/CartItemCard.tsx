import { Box, Card, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { StoreItem } from '../../models/types';
import { StoreBtn, StoreCard, StoreIconBtn } from '../../share';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

import './CartItemCard.scss';

type Props = {
	item: StoreItem;
	amount: number;
	deleteItem: React.MouseEventHandler<HTMLButtonElement>;
	increaseAmount: React.MouseEventHandler<HTMLButtonElement>;
	reduceAmount: React.MouseEventHandler<HTMLButtonElement>;
};

export const CartItemCard: React.FC<Props> = ({ item, amount, deleteItem, increaseAmount, reduceAmount }) => {
	const { thumbnail, description, title, price } = item;

	const onRemove = (event: React.MouseEvent<any>) => {
		if (amount > 1) {
			reduceAmount(event);
		}
	};

	return (
		<StoreCard sx={{ minHeight: 150 }} className="cartItemCard">
			<CardMedia component="div" image={thumbnail} sx={{ height: '100%', minWidth: 130, borderRadius: '8px' }} className="row-span-2" />

			<Box className="flex flex-row justify-between items-start">
				<Typography component="div">
					{title}, {description}
				</Typography>
				<StoreBtn startIcon={<DeleteIcon />} onClick={deleteItem}>
					Delete
				</StoreBtn>
			</Box>

			<Box className="flex flex-row justify-between items-center">
				<Box className="flex flex-row items-center gap-5">
					<StoreIconBtn onClick={onRemove} disabled={amount === 1}>
						<RemoveIcon />
					</StoreIconBtn>

					<div className="font-bold">{amount}</div>

					<StoreIconBtn onClick={increaseAmount}>
						<AddIcon />
					</StoreIconBtn>
				</Box>

				<Typography component="div">
					Price: <span className="text-2xl">${price}</span>
				</Typography>
			</Box>
		</StoreCard>
	);
};
