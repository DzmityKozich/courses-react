import React, { useState } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import { themes } from '../../themes/themes';
import { Navbar } from '../../components/Navbar';
import { ButtonPage } from '../ButtonPage';

import './Layout.scss';

export const Layout: React.FC = () => {
	const [theme, setTheme] = useState(themes.light);

	return (
		<ThemeContext.Provider value={theme}>
			<div className="layout">
				<Navbar />
				<div className="flex justify-center items-center h-full">
					<ButtonPage />
				</div>
			</div>
		</ThemeContext.Provider>
	);
};
