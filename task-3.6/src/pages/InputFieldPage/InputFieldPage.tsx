import React from 'react';
import { PageLayout } from '../../share';
import { InputField } from '../../ui-kit/InputField';

export const InputFieldPage: React.FC = () => {
	return (
		<PageLayout>
			<InputField placeholder="HTMLInputElement" label="ttest" required />
		</PageLayout>
	);
};
