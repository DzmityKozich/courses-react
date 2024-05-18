import React from 'react';
import { PageTitle, StoreLinkBtn } from '../../share';
import { ContactInfoForm } from '../../components/ContactInfoForm';

export const ContactInformationPage: React.FC = () => {
	return (
		<div className="px-[15rem]">
			<PageTitle title="Contact information" />

			<div className="mb-8">
				<ContactInfoForm />
			</div>

			<StoreLinkBtn to="">Next step</StoreLinkBtn>
		</div>
	);
};
