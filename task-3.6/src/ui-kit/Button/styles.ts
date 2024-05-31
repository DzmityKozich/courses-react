import { KitButtonStyles } from './types';

export const styles: KitButtonStyles = {
	primary: {
		light: {
			backgroundColor: '#00AE1C',
			textTransform: 'inherit',
			color: '#fff',
			borderRadius: '8px',
			borderColor: '#00AE1C',
			borderWidth: '1px',
			borderStyle: 'solid',
			fontWeight: 400,

			'&:hover': {
				backgroundColor: '#00AE1C',
				borderColor: '#5CE171',
				boxShadow: '0px 2px 2px 0px #5CE17140',
			},

			'&:disabled': {
				backgroundColor: '#187727',
				borderColor: '#187727',
				color: '#B9B9B9',
			},

			'&:active': {
				backgroundColor: '#0CD52B',
				borderColor: '#5CE171',
				boxShadow: '0px 2px 2px 0px #5CE17140',
			},
		},
		dark: {},
	},
	secondary: {
		light: {
			backgroundColor: '#fff',
			textTransform: 'inherit',
			color: '#323749',
			borderRadius: '8px',
			borderColor: '#DEDFE5',
			borderWidth: '1px',
			borderStyle: 'solid',
			fontWeight: 400,

			'&:hover': {
				backgroundColor: '#EFEFEF',
				borderColor: '#DEDFE5',
				boxShadow: '0px 1px 2px 0px #45454540',
			},

			'&:disabled': {
				backgroundColor: '#C8C8C8',
				color: '#737373',
				borderColor: '#8D8E91',
			},

			'&:active': {
				backgroundColor: '#E0E0E0',
				borderColor: '#DEDFE5',
				boxShadow: '0px 1px 2px 0px #45454540',
			},
		},
		dark: {},
	},
};
