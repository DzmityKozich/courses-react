import React from 'react';
import { Card, CardContent, MenuItem } from '@mui/material';
import { useFormik } from 'formik';
import { StoreInput, StoreSelect } from '../../share';
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
			<CardContent sx={{ padding: '2rem' }}>
				<form onSubmit={formik.handleSubmit}>
					<StoreInput
						label="Address (No P. O. Boxes)"
						placeholder="Enter your address"
						{...formik.getFieldProps('address')}
						error={formik.touched.address && !!formik.errors.address}
						helperText={formik.touched.address && formik.errors.address}
						required
					/>

					<StoreInput
						label="Apartment, suite etc. (optional)"
						placeholder="Enter your apartment information"
						{...formik.getFieldProps('apartment')}
						error={formik.touched.apartment && !!formik.errors.apartment}
						helperText={formik.touched.apartment && formik.errors.apartment}
					/>

					<StoreInput
						label="City"
						placeholder="Enter your city"
						{...formik.getFieldProps('city')}
						error={formik.touched.city && !!formik.errors.city}
						helperText={formik.touched.city && formik.errors.city}
						required
					/>

					<StoreSelect
						label="Country/Region"
						placeholder="Select your country/region"
						{...formik.getFieldProps('country')}
						error={formik.touched.country && !!formik.errors.country}
						helperText={formik.touched.country && formik.errors.country}
						required
					>
						<MenuItem disabled value="" selected>
							Select your country/region
						</MenuItem>
						<MenuItem value={'A'}>A</MenuItem>
						<MenuItem value={'B'}>B</MenuItem>
						<MenuItem value={'C'}>C</MenuItem>
					</StoreSelect>

					<StoreSelect
						label="State"
						placeholder="Select your state"
						{...formik.getFieldProps('state')}
						error={formik.touched.state && !!formik.errors.state}
						helperText={formik.touched.state && formik.errors.state}
						required
					>
						<MenuItem disabled value="">
							Select your state
						</MenuItem>
						<MenuItem value={'A'}>A</MenuItem>
						<MenuItem value={'B'}>B</MenuItem>
						<MenuItem value={'C'}>C</MenuItem>
					</StoreSelect>

					<StoreInput
						label="ZIP code"
						placeholder="Enter your ZIP code"
						{...formik.getFieldProps('zip')}
						error={formik.touched.zip && !!formik.errors.zip}
						helperText={formik.touched.zip && formik.errors.zip}
						required
					/>
				</form>
			</CardContent>
		</Card>
	);
};
