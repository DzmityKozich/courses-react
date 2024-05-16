import React from 'react';
import { CardMedia, CardContent, Card, CardActions } from '@mui/material';
import { Button } from '@mui/material';

import './ItemCard.scss';

type Props = {
	imgSrc: string;
	price: number;
	text?: string;
	title: string;
};

export const ItemCard: React.FC<Props> = ({ imgSrc, price, text = '', title }) => {
	return (
		<Card sx={{ height: '100%', maxWidth: 240, borderRadius: '8px' }}>
			<CardMedia component="div" image={imgSrc} title="chair item" sx={{ height: 250, width: 224, margin: 'auto' }} />
			<CardContent>
				<div className="itemTitle">{title}</div>
				<div className="itemText">{text}</div>
				<div className="itemPrice">${price || 3500}</div>
			</CardContent>

			<CardActions>
				<Button color="success" variant="contained" sx={{ width: '100%', borderRadius: '8px' }}>
					Add to cart
				</Button>
			</CardActions>
		</Card>
	);
};
