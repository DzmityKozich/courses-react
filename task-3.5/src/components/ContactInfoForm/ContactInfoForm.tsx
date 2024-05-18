import React from 'react';
import { Card, CardContent } from '@mui/material';
import { StoreInput } from '../../share';

import './ContactInfoForm.scss';

type Props = {};

export const ContactInfoForm: React.FC<Props> = () => {
	return (
		<Card sx={{ borderRadius: '8px' }}>
			<CardContent sx={{ padding: '2rem' }}>
				<StoreInput label="First Name" required placeholder="Enter your first name" />
				<StoreInput label="Email" required placeholder="Enter your email" />
				<StoreInput label="Last Name" required placeholder="Enter your last name" />
				<StoreInput label="Phone" required placeholder="Enter your phone" />
			</CardContent>
		</Card>
	);
};
