import React, { useState } from 'react';
import { themes } from '../../themes/themes';
import { Navbar } from '../../components/Navbar';
import { ButtonPage } from '../ButtonPage';
import { THEME } from '../../themes/types';
import { ThemeContext } from 'styled-components';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Paths } from '../../routes/paths';
import { LinkPage } from '../LinkPage';
import { DropdownPage } from '../DropdownPage/DropdownPage';
import { InputFieldPage } from '../InputFieldPage/InputFieldPage';
import { CheckboxPage } from '../CheckboxPage';
import { TextareaPage } from '../TextareaPage';
import { SelectPage } from '../SelectPage';
import { ModalPage } from '../ModalPage';
import { ToastPage } from '../ToastPage';
import { ColorpickerPage } from '../ColorpickerPage';
import { DatepickerPage } from '../DatepickerPage';

import './Layout.scss';

export const Layout: React.FC = () => {
	const [theme, setTheme] = useState(themes.light);

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
						<Route path="/" element={<Navigate to={Paths.button} />} />
						<Route element={<ButtonPage />} path={Paths.button} />
						<Route element={<LinkPage />} path={Paths.link} />
						<Route element={<DropdownPage />} path={Paths.dropdown} />
						<Route element={<InputFieldPage />} path={Paths.input} />
						<Route element={<CheckboxPage />} path={Paths.checkbox} />
						<Route element={<TextareaPage />} path={Paths.textarea} />
						<Route element={<SelectPage />} path={Paths.select} />
						<Route element={<ModalPage />} path={Paths.modal} />
						<Route element={<ToastPage />} path={Paths.toast} />
						<Route element={<ColorpickerPage />} path={Paths.colorpicker} />
						<Route element={<DatepickerPage />} path={Paths.datepicker} />
					</Routes>
				</div>
			</div>
		</ThemeContext.Provider>
	);
};
