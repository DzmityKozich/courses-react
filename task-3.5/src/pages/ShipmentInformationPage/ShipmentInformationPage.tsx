import React, { useEffect } from 'react';
import { PageTitle, StoreLinkBtn } from '../../share';
import { ShipmentInfoForm } from '../../components/ShipmentInfoForm';
import { useShipmentInfoForm } from '../../hooks/useShipmentInfoForm';
import { useRoutGuard } from '../../hooks/useRouteGuard';

export const ShipmentInformationPage: React.FC = () => {
	const { valid } = useShipmentInfoForm(({ valid }) => ({ valid }));
	const { setOrderInfoPageAccess } = useRoutGuard(({ setOrderInfoPageAccess }) => ({ setOrderInfoPageAccess }));

	useEffect(() => {
		setOrderInfoPageAccess(valid);
	}, [valid, setOrderInfoPageAccess]);

	return (
		<>
			<PageTitle title="Shipment information" />
			<div className="mb-8">
				<ShipmentInfoForm />
			</div>
			<StoreLinkBtn to="/order-info" disabled={!valid}>
				Submit order
			</StoreLinkBtn>
		</>
	);
};
