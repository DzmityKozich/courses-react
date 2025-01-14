import React, { useCallback, useEffect } from 'react';
import { PageTitle } from '../../share';
import { ShipmentInfoForm } from '../../components/ShipmentInfoForm';
import { useRoutGuard } from '../../hooks/useRouteGuard';
import { useLocation, useNavigate } from 'react-router-dom';
import { ShipmentForm } from '../../models/types';
import { Paths } from '../../routes/routes';

export const ShipmentInformationPage: React.FC = () => {
	const { state } = useLocation();
	const navigate = useNavigate();
	const { setOrderInfoPageAccess } = useRoutGuard(({ setOrderInfoPageAccess }) => ({ setOrderInfoPageAccess }));

	useEffect(() => {
		setOrderInfoPageAccess(false);
	}, []);

	const onSubmit = useCallback((values: ShipmentForm) => {
		setOrderInfoPageAccess(true);
		navigate(Paths.orderInfoPage, { state: { ...state, shipmentFormValue: values } });
	}, []);

	return (
		<>
			<PageTitle title="Shipment information" />
			<ShipmentInfoForm onSubmit={onSubmit} />
		</>
	);
};
