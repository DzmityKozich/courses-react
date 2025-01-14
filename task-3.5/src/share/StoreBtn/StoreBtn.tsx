import { Button, styled } from '@mui/material';

export const StoreBtn = styled(Button)({
	backgroundColor: '#00ae1c',
	borderRadius: 8,
	color: '#fff',
	textTransform: 'initial',
	fontWeight: 400,
	fontSize: '1rem',

	'&:active': {
		backgroundColor: '#0cd52b',
	},

	'&:hover': {
		backgroundColor: '#00ae1c',
	},

	'&:disabled': {
		backgroundColor: '#187727',
		color: '#b9b9b9',
		cursor: 'not-allowed',
	},
});
