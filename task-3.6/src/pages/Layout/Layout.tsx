import React, { useState } from 'react';
import { Button } from '../../ui-kit';
import { EyeCloseIcon, PlayIcon } from '../../ui-kit/icons';
import { ThemeContext } from '../../Context/ThemeContext';
import { themes } from '../../themes/themes';

import './Layout.scss';
import { Navbar } from '../../components/Navbar';

export const Layout: React.FC = () => {
	const [theme, setTheme] = useState(themes.light);

	return (
		<div className="w-full">
			<ThemeContext.Provider value={theme}>
				<Navbar />
				<Button color="primary" icon={<EyeCloseIcon color="#fff" />}>
					{/* Kit Button */}
				</Button>
				<Button color="secondary" icon={<PlayIcon color="primary" />}>
					Kit Button
				</Button>
			</ThemeContext.Provider>
		</div>
	);
};
