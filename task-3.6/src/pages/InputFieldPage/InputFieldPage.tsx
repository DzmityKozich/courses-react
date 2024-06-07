import React from 'react';
import { PageLayout } from '../../share';
import { InputField } from '../../ui-kit/InputField';
import { IconBtn } from '../../ui-kit/IconBtn';
import { EyeIcon } from '../../ui-kit/icons';

export const InputFieldPage: React.FC = () => {
	return (
		<PageLayout>
			<InputField type="text" placeholder="HTMLInputElement" label="ttest" required />
			<InputField
				type="password"
				placeholder="Password"
				label="password"
				endElement={<IconBtn icon={<EyeIcon color="inherit" />} />}
				required
			/>
			<InputField type="number" placeholder="Payment" label="Payment" startElement={'$'} required />
		</PageLayout>
	);
};
