import React from 'react';
import { Card, CardContent } from '@mui/material';
import { StoreInput } from '../../share';
import { useFormik } from 'formik';
import * as yup from 'yup';

import './ContactInfoForm.scss';

type Props = {};

const validationSchema = yup.object({
	firstName: yup.string().required('First name is required!'),
	email: yup.string().email().required('Email is required!'),
	lastName: yup.string().required('Last name is required!'),
	phone: yup.string().required(),
});

export const ContactInfoForm: React.FC<Props> = () => {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			email: '',
			lastName: '',
			phone: '',
		},
		validateOnBlur: true,
		validationSchema,
		validate: (values) => {
			console.log(formik.errors);
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<Card sx={{ borderRadius: '8px' }}>
			<CardContent sx={{ padding: '2rem' }}>
				<form onSubmit={formik.handleSubmit} className="contactInfoForm">
					<StoreInput
						label="First Name"
						placeholder="Enter your first name"
						{...formik.getFieldProps('firstName')}
						error={formik.touched.firstName && !!formik.errors.firstName}
						helperText={formik.touched.firstName && formik.errors.firstName}
					/>
					<StoreInput label="Email" placeholder="Enter your email" {...formik.getFieldProps('email')} />
					<StoreInput label="Last Name" placeholder="Enter your last name" {...formik.getFieldProps('lastName')} />
					<StoreInput label="Phone" placeholder="Enter your phone" {...formik.getFieldProps('phone')} />
					<button type="submit">Ok</button>
				</form>
			</CardContent>
		</Card>
	);
};
