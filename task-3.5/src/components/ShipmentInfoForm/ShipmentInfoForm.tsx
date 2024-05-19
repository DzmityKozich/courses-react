import React from 'react';
import { Card, CardContent } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

import './ShipmentInfoForm.scss';

const validationSchema = yup.object({
	address: yup.string().required('Address is required!'),
	apartment: yup.string(),
	city: yup.string().required('City is required!'),
	country: yup.string().required('Country/Region is required!'),
	state: yup.string().required('State is required!'),
	zip: yup.string().required('Zip code is required!'),
});

export const ShipmentInfoForm: React.FC = () => {
	const formik = useFormik({
		initialValues: {
			address: '',
			apartment: '',
			city: '',
			country: '',
			state: '',
			zip: '',
		},
		validationSchema,
		onSubmit: (value) => {
			console.log(value);
		},
	});

	return (
		<Card sx={{ borderRadius: '8px' }}>
			<CardContent sx={{ padding: '2rem' }}></CardContent>
		</Card>
	);
};
