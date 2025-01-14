import React, { useMemo } from 'react';
import { CardContent } from '@mui/material';
import { StoreBtn, StoreCard, StoreInput } from '../../share';
import { useFormik } from 'formik';
import { ContactForm } from '../../models/types';
import * as yup from 'yup';

import './ContactInfoForm.scss';

type Props = {
	onSubmit: (values: ContactForm) => void;
};

const validationSchema = yup.object({
	firstName: yup.string().required('First name is required!'),
	email: yup.string().email().required('Email is required!'),
	lastName: yup.string().required('Last name is required!'),
	phone: yup.string().required('Phone is required'),
});

export const ContactInfoForm: React.FC<Props> = ({ onSubmit }) => {
	const formik = useFormik<ContactForm>({
		initialValues: {
			firstName: '',
			email: '',
			lastName: '',
			phone: '',
		},
		validateOnBlur: true,
		validationSchema,
		onSubmit: (values) => {
			onSubmit(values);
		},
	});

	const valid = useMemo(() => {
		return formik.isValid && formik.dirty;
	}, [formik.isValid, formik.dirty]);

	return (
		<form onSubmit={formik.handleSubmit} noValidate>
			<StoreCard className="mb-8">
				<CardContent sx={{ padding: '2rem' }}>
					<div className="contactInfoForm">
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
					</div>
				</CardContent>
			</StoreCard>

			<StoreBtn type="submit" disabled={!valid}>
				Next step
			</StoreBtn>
		</form>
	);
};
