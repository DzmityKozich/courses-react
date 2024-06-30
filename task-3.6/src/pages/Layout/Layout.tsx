import React, { useEffect, useState } from 'react';
import { themes } from '../../themes/themes';
import { Navbar } from '../../components/Navbar';
import { ButtonPage } from '../ButtonPage';
import { THEME } from '../../themes/types';
import { ThemeContext } from 'styled-components';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Paths } from '../../routes/paths';
import { LinkPage } from '../LinkPage';
import { DropdownPage } from '../DropdownPage/DropdownPage';
import { InputFieldPage } from '../InputFieldPage/InputFieldPage';
import { CheckboxPage } from '../CheckboxPage';
import { TextareaPage } from '../TextareaPage';
import { SelectPage } from '../SelectPage';
import { ModalPage } from '../ModalPage';

import './Layout.scss';
import { ToastPage } from '../ToastPage';

export const Layout: React.FC = () => {
	const [theme, setTheme] = useState(themes.light);
	const navigate = useNavigate();
	const { pathname } = useLocation();

	// TODO: use loader https://reactrouter.com/en/main/fetch/redirect#redirect
	useEffect(() => {
		if (pathname === '/') {
			navigate('/button');
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme.themeName === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
		setTheme(themes[newTheme]);
	};

	return (
		<ThemeContext.Provider value={theme}>
			<div className="layout" style={{ backgroundColor: theme.defaultStyles.bgColor }}>
				<Navbar changeTheme={toggleTheme} />

				<div className="flex justify-center items-center h-full">
					<Routes>
						<Route element={<ButtonPage />} path={Paths.button} />
						<Route element={<LinkPage />} path={Paths.link} />
						<Route element={<DropdownPage />} path={Paths.dropdown} />
						<Route element={<InputFieldPage />} path={Paths.input} />
						<Route element={<CheckboxPage />} path={Paths.checkbox} />
						<Route element={<TextareaPage />} path={Paths.textarea} />
						<Route element={<SelectPage />} path={Paths.select} />
						<Route element={<ModalPage />} path={Paths.modal} />
						<Route element={<ToastPage />} path={Paths.toast} />
					</Routes>
				</div>
			</div>
		</ThemeContext.Provider>
	);
};
