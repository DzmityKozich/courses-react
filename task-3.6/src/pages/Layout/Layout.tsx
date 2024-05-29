import React from 'react';
import { KitButton } from '../../ui-kit';

import './Layout.scss';
import { IconBtn } from '../../ui-kit/KitButton/KitButton';
import { PlayIcon } from '../../ui-kit/icons';

export const Layout: React.FC = () => {
	return (
		<>
			<KitButton color="primary">Kit Button</KitButton>
			<KitButton color="secondary">Kit Button</KitButton>
			<IconBtn color="primary" icon={<PlayIcon color="blue" />}>
				Coco
			</IconBtn>
		</>
	);
};
