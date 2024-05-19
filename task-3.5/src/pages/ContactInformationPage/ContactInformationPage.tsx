import React, { useEffect } from 'react';
import { PageTitle, StoreLinkBtn } from '../../share';
import { ContactInfoForm } from '../../components/ContactInfoForm';
import { useContactInfoForm } from '../../hooks/useContactInfoForm';

export const ContactInformationPage: React.FC = () => {
	const { valid, value } = useContactInfoForm(({ valid, value }) => ({ valid, value }));

	// TODO: use this value
	useEffect(() => {
		console.log(value);
	}, [value]);

	return (
		<>
			<PageTitle title="Contact information" />

			<div className="mb-8">
				<ContactInfoForm />
			</div>

			<StoreLinkBtn to="/" disabled={!valid}>
				Next step
			</StoreLinkBtn>
		</>
	);
};
