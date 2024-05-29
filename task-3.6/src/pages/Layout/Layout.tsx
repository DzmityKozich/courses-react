import React from 'react';
import { Button } from '../../ui-kit/KitButton';

import './Layout.scss';

export const Layout: React.FC = () => {
	return (
		<>
			<Button color="primary" disabled>
				Kit Button
			</Button>
			<Button color="secondary" disabled>
				Kit Button
			</Button>
		</>
	);
};
