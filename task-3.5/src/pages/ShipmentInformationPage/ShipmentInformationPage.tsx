import React from 'react';
import { PageTitle } from '../../share';
import { ShipmentInfoForm } from '../../components/ShipmentInfoForm/ShipmentInfoForm';

export const ShipmentInformationPage: React.FC = () => {
	return (
		<>
			<PageTitle title="Shipment information" />
			<ShipmentInfoForm />
		</>
	);
};
