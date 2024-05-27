import React from 'react';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import { KitButton } from '../../ui-kit/KitButton/KitButton';

import './Layout.scss';

export const Layout: React.FC = () => {
	return (
		<>
			<KitButton color="primary">Kit Button</KitButton>
			<KitButton color="secondary">Kit Button</KitButton>
		</>
	);
};
