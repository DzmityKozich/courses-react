import React, { useEffect } from 'react';
import { PageTitle, StoreLinkBtn } from '../../share';
import { ContactInfoForm } from '../../components/ContactInfoForm';
import { useContactInfoForm } from '../../hooks/useContactInfoForm';
import { useRoutGuard } from '../../hooks/useRouteGuard';
import { Paths } from '../../routes/routes';

export const ContactInformationPage: React.FC = () => {
	const { valid, value } = useContactInfoForm(({ valid, value }) => ({ valid, value }));
	const { setShipmentInfoPageAccess } = useRoutGuard(({ setShipmentInfoPageAccess }) => ({ setShipmentInfoPageAccess }));

	useEffect(() => {
		setShipmentInfoPageAccess(valid);
	}, [value, valid, setShipmentInfoPageAccess]);

	return (
		<>
			<PageTitle title="Contact information" />

			<div className="mb-8">
				<ContactInfoForm />
			</div>

			<StoreLinkBtn to={Paths.shipmentInfoPage} disabled={!valid}>
				Next step
			</StoreLinkBtn>
		</>
	);
};
