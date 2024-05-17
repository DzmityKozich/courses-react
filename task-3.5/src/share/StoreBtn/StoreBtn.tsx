import { Button, styled } from '@mui/material';

export const StoreBtn = styled(Button)({
	backgroundColor: '#00ae1c',
	borderRadius: 8,
	color: '#fff',

	'&:active': {
		backgroundColor: '#0cd52b',
	},

	'&:hover': {
		backgroundColor: '#00ae1c',
	},
});
