import { IconButton, styled } from '@mui/material';

import './StoreIconBtn.scss';

export const StoreIconBtn = styled(IconButton)({
	backgroundColor: '#00ae1c',
	widht: 36,
	height: 36,
	borderRadius: 8,
	color: '#fff',

	'&:active': {
		backgroundColor: '#0cd52b',
	},

	'&:hover': {
		backgroundColor: '#00ae1c',
	},
});
