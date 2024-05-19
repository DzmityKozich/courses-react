import React, { useEffect } from 'react';
import { Card, CardContent } from '@mui/material';
import { StoreInput } from '../../share';
import { useFormik } from 'formik';
import { useContactInfoForm } from '../../hooks/useContactInfoForm';
import * as yup from 'yup';

import './ContactInfoForm.scss';

type Props = {};

const validationSchema = yup.object({
	firstName: yup.string().required('First name is required!'),
	email: yup.string().email().required('Email is required!'),
	lastName: yup.string().required('Last name is required!'),
	phone: yup.string().required('Phone is required'),
});

export const ContactInfoForm: React.FC<Props> = () => {
	const { setValid, setValue } = useContactInfoForm(({ setValid, setValue }) => ({ setValid, setValue }));
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
			setValue(values);
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	useEffect(() => {
		setValid(formik.isValid && formik.dirty);
	}, [formik.isValid, formik.dirty]);

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
						required
					/>
					<StoreInput
						label="Email"
						placeholder="Enter your email"
						{...formik.getFieldProps('email')}
						error={formik.touched.email && !!formik.errors.email}
						helperText={formik.touched.email && formik.errors.email}
						required
					/>
					<StoreInput
						label="Last Name"
						placeholder="Enter your last name"
						{...formik.getFieldProps('lastName')}
						error={formik.touched.lastName && !!formik.errors.lastName}
						helperText={formik.touched.lastName && formik.errors.lastName}
						required
					/>
					<StoreInput
						label="Phone"
						placeholder="Enter your phone"
						{...formik.getFieldProps('phone')}
						error={formik.touched.phone && !!formik.errors.phone}
						helperText={formik.touched.phone && formik.errors.phone}
						required
					/>
				</form>
			</CardContent>
		</Card>
	);
};
