import { FormHelperText, Select, SelectProps, styled } from '@mui/material';
import { StoreInputLabel } from '../StoreInputLabel/StoreInputLabel';
import React, { ReactNode } from 'react';

import './StoreSelect.scss';

type Props = SelectProps & {
	helperText?: ReactNode;
	children: ReactNode;
};

const CustomSelect = styled(Select)({
	minWidth: 300,

	'& .MuiSelect-select': {
		paddingTop: '0.25rem',
		paddingBottom: '0.5rem',
		paddingLeft: 0,
	},

	'& .MuiOutlinedInput-notchedOutline': {
		borderRadius: 0,
		borderTop: 0,
		borderLeft: 0,
		borderRight: 0,
		// border: 0
		// borderBottom: '1px',
	},
});

export const StoreSelect: React.FC<Props> = (props) => {
	const { label, helperText, ...selectProps } = props;

	return (
		<div className="storeSelect">
			<StoreInputLabel required={selectProps.required}>{label}</StoreInputLabel>
			<CustomSelect {...selectProps}>{props.children}</CustomSelect>
			{helperText && <FormHelperText error={selectProps.error}>{helperText}</FormHelperText>}
		</div>
	);
};
