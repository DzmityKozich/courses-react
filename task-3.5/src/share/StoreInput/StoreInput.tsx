import { TextField, TextFieldProps, styled } from '@mui/material';
import { StoreInputLabel } from '../StoreInputLabel/StoreInputLabel';
import React from 'react';

type Props = TextFieldProps;

const CustomInput = styled(TextField)({
	color: '#243573',
	minWidth: 300,

	'& .MuiInput-underline:after': {
		borderBottomColor: '#243573',
	},

	'& .MuiInputBase-input::placeholder': {
		color: '#243573',
		opacity: 0.7,
	},

	'& .MuiInputBase-input': {
		color: '#243573',
		fontSize: '1rem',
		marginBottom: '0.25rem',
	},
});

export const StoreInput: React.FC<Props> = (props) => {
	const { label, ...inputProps } = props;
	return (
		<div>
			<StoreInputLabel required={inputProps.required}>{label}</StoreInputLabel>
			<CustomInput {...inputProps} variant="standard" />
		</div>
	);
};
