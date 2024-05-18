import React from 'react';
import { PageTitle } from '../../share';
import { ContactInfoForm } from '../../components/ContactInfoForm';

export const ContactInformationPage: React.FC = () => {
	return (
		<div className="container mx-auto">
			<PageTitle title="Contact information" />

			<ContactInfoForm />
		</div>
	);
};
