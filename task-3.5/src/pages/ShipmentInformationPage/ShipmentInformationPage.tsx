import React from 'react';
import { PageTitle, StoreLinkBtn } from '../../share';
import { ShipmentInfoForm } from '../../components/ShipmentInfoForm';
import { useShipmentInfoForm } from '../../hooks/useShipmentInfoForm';

export const ShipmentInformationPage: React.FC = () => {
	const { valid } = useShipmentInfoForm(({ valid }) => ({ valid }));

	return (
		<>
			<PageTitle title="Shipment information" />
			<div className="mb-8">
				<ShipmentInfoForm />
			</div>
			<StoreLinkBtn to="" disabled={!valid}>
				Submit order
			</StoreLinkBtn>
		</>
	);
};
