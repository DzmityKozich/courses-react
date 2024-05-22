import React, { useEffect } from 'react';
import { CardContent, MenuItem } from '@mui/material';
import { useFormik } from 'formik';
import { StoreCard, StoreInput, StoreSelect } from '../../share';
import * as yup from 'yup';

import './ShipmentInfoForm.scss';
import { useShipmentInfoForm } from '../../hooks/useShipmentInfoForm';

const validationSchema = yup.object({
	address: yup.string().required('Address is required!'),
	apartment: yup.string(),
	city: yup.string().required('City is required!'),
	country: yup.string().required('Country/Region is required!'),
	state: yup.string().required('State is required!'),
	zip: yup.string().required('Zip code is required!'),
});

export const ShipmentInfoForm: React.FC = () => {
	const { setValid, setValue } = useShipmentInfoForm(({ setValid, setValue }) => ({ setValid, setValue }));
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
		validateOnBlur: true,
		validate: (values) => {
			setValue(values);
		},
		onSubmit: (value) => {
			console.log(value);
		},
	});

	useEffect(() => {
		setValid(formik.dirty && formik.isValid);
	}, [formik.dirty, formik.isValid]);

	return (
		<StoreCard>
			<CardContent sx={{ padding: '2rem' }}>
				<form onSubmit={formik.handleSubmit} noValidate className="shipmentInfoForm">
					<StoreInput
						className="mb-8"
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

					<div className="flex flex-row justify-between">
						<StoreSelect
							label="Country/Region"
							placeholder="Select your country/region"
							{...formik.getFieldProps('country')}
							error={formik.touched.country && !!formik.errors.country}
							helperText={formik.touched.country && formik.errors.country}
							displayEmpty
							required
						>
							<MenuItem value="" disabled>
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
							displayEmpty
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
					</div>
				</form>
			</CardContent>
		</StoreCard>
	);
};
