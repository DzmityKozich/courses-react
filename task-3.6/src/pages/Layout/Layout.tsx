import React, { useState } from 'react';
import { KitButton } from '../../ui-kit';
import { PlayIcon } from '../../ui-kit/icons';
import { ThemeContext } from '../../Context/ThemeContext';
import { themes } from '../../themes/themes';

import './Layout.scss';

export const Layout: React.FC = () => {
	const [theme, setTheme] = useState(themes.light);

	return (
		<ThemeContext.Provider value={theme}>
			<KitButton color="primary">Kit Button</KitButton>
			<KitButton color="secondary" icon={<PlayIcon color="primary" />}>
				Kit Button
			</KitButton>
		</ThemeContext.Provider>
	);
};
