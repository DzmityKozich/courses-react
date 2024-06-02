import React, { useEffect, useState } from 'react';
import { themes } from '../../themes/themes';
import { Navbar } from '../../components/Navbar';
import { ButtonPage } from '../ButtonPage';
import { THEME } from '../../themes/types';
import { ThemeContext } from 'styled-components';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Paths } from '../../routes/paths';
import { LinkPage } from '../LinkPage';

import './Layout.scss';

export const Layout: React.FC = () => {
	const [theme, setTheme] = useState(themes.light);
	const navigate = useNavigate();

	useEffect(() => {
		navigate('/button');
	}, []);

	const toggleTheme = () => {
		const newTheme = theme.themeName === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
		setTheme(themes[newTheme]);
	};

	return (
		<ThemeContext.Provider value={theme}>
			<div className="layout" style={{ backgroundColor: theme.bgColor }}>
				<Navbar changeTheme={toggleTheme} />

				<div className="flex justify-center items-center h-full">
					<Routes>
						<Route element={<ButtonPage />} path={Paths.button} />
						<Route element={<LinkPage />} path={Paths.link} />
					</Routes>
				</div>
			</div>
		</ThemeContext.Provider>
	);
};
