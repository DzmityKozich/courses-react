import React from 'react';

import './OrderItemCard.scss';
import { StoreItem } from '../../models/types';
import { Card, CardMedia, Typography } from '@mui/material';

type Props = {
	item: StoreItem;
	amount: number;
};

export const OrderItemCard: React.FC<Props> = ({ item, amount }) => {
	const { thumbnail, title, description } = item;

	return (
		<Card sx={{ minHeight: 150, borderRadius: 0, boxShadow: 'none' }} className="orderItemCard">
			<CardMedia component="div" image={thumbnail} sx={{ height: '100%', minWidth: 130, borderRadius: '8px' }} className="row-span-2" />

			<Typography component="div" className="pt-3">
				{title}, {description}
			</Typography>

			<div className="font-bold text-[1.25rem] self-end">
				${(item.price * amount).toFixed(2)}, {amount} producs
			</div>
		</Card>
	);
};
