import React, { useState } from 'react';
// import { ThemeContext } from '../../Context/ThemeContext';
import { themes } from '../../themes/themes';
import { Navbar } from '../../components/Navbar';
import { ButtonPage } from '../ButtonPage';
import { THEME } from '../../themes/types';
import { Link } from '../../ui-kit/Link';

import './Layout.scss';
import { ThemeContext } from 'styled-components';

export const Layout: React.FC = () => {
	const [theme, setTheme] = useState(themes.light);

	const toggleTheme = () => {
		const newTheme = theme.themeName === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
		setTheme(themes[newTheme]);
	};

	return (
		<ThemeContext.Provider value={theme}>
			<div className="layout" style={{ backgroundColor: theme.bgColor }}>
				<Navbar changeTheme={toggleTheme} />
				<Link to="">Next</Link>
				<Link to="/store" disabled>
					Prev
				</Link>
				<div className="flex justify-center items-center h-full">
					<ButtonPage />
				</div>
			</div>
		</ThemeContext.Provider>
	);
};
