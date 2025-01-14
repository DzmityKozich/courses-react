import React, { useCallback, useEffect } from 'react';
import { PageTitle } from '../../share';
import { ContactInfoForm } from '../../components/ContactInfoForm';
import { useRoutGuard } from '../../hooks/useRouteGuard';
import { Paths } from '../../routes/routes';
import { useLocation, useNavigate } from 'react-router-dom';
import { ContactForm } from '../../models/types';

export const ContactInformationPage: React.FC = () => {
	const { state = {} } = useLocation();
	const navigate = useNavigate();
	const { setShipmentInfoPageAccess } = useRoutGuard(({ setShipmentInfoPageAccess }) => ({ setShipmentInfoPageAccess }));

	useEffect(() => {
		setShipmentInfoPageAccess(false);
	}, []);

	const onSubmit = useCallback((values: ContactForm) => {
		setShipmentInfoPageAccess(true);
		navigate(Paths.shipmentInfoPage, { state: { ...state, conatctFormValue: values } });
	}, []);

	return (
		<>
			<PageTitle title="Contact information" />
			<ContactInfoForm onSubmit={onSubmit} />
		</>
	);
};
