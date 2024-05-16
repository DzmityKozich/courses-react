import { Button, SxProps } from '@mui/material';
import React, { ReactNode } from 'react';

type Props = {
	children: ReactNode;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	sx?: SxProps;
	icon?: any;
};

export const StoreBtn: React.FC<Props> = ({ children, onClick, sx = {}, icon = <></> }) => {
	return (
		<Button
			color="success"
			variant="contained"
			startIcon={icon}
			sx={{ borderRadius: '8px', boxShadow: 'none', bgcolor: '#00AE1C', ...sx }}
			onClick={onClick}
		>
			{children}
		</Button>
	);
};
