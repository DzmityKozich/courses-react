import React, { useEffect } from 'react';
import { PageTitle, StoreLinkBtn } from '../../share';
import { ShipmentInfoForm } from '../../components/ShipmentInfoForm';
import { useShipmentInfoForm } from '../../hooks/useShipmentInfoForm';
import { useRoutGuard } from '../../hooks/useRouteGuard';
import { useLocation } from 'react-router-dom';

export const ShipmentInformationPage: React.FC = () => {
	const { state } = useLocation();
	const { valid, value } = useShipmentInfoForm(({ valid, value }) => ({ valid, value }));
	const { setOrderInfoPageAccess } = useRoutGuard(({ setOrderInfoPageAccess }) => ({ setOrderInfoPageAccess }));

	useEffect(() => {
		setOrderInfoPageAccess(valid);
	}, [valid, setOrderInfoPageAccess]);

	useEffect(() => {
		console.log(state);
	}, [state]);

	return (
		<>
			<PageTitle title="Shipment information" />
			<div className="mb-8">
				<ShipmentInfoForm />
			</div>
			<StoreLinkBtn to="/order-info" disabled={!valid} state={{ ...state, shipmentFormValue: value }}>
				Submit order
			</StoreLinkBtn>
		</>
	);
};
