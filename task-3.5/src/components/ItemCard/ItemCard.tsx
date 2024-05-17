import React from 'react';
import { CardMedia, CardContent, Card, CardActions } from '@mui/material';
import { StoreBtn } from '../../share';
import AddIcon from '@mui/icons-material/Add';

import './ItemCard.scss';

type Props = {
	imgSrc: string;
	price: number;
	text: string;
	title: string;
	onAdd: React.MouseEventHandler<HTMLButtonElement>;
};

export const ItemCard: React.FC<Props> = ({ imgSrc, price, text, title, onAdd }) => {
	return (
		<Card sx={{ height: '100%', maxWidth: 240, borderRadius: '8px' }}>
			<CardMedia component="div" image={imgSrc} title="chair item" sx={{ height: 250, width: 224, margin: 'auto' }} />
			<CardContent>
				<div className="itemTitle">{title}</div>
				<div className="itemText">{text}</div>
				<div className="itemPrice">${price || 3500}</div>
			</CardContent>

			<CardActions>
				<StoreBtn onClick={onAdd} sx={{ width: '100%' }} startIcon={<AddIcon />}>
					Add to cart
				</StoreBtn>
			</CardActions>
		</Card>
	);
};
