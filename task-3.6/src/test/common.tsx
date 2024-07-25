import { render } from '@testing-library/react';
import { ThemeContext } from 'styled-components';
import { Theme } from '../themes/types';
import { ReactNode } from 'react';
import { lightTheme } from '../themes/LightTheme';

export const renderWithContext = (component: ReactNode, theme: Theme = lightTheme) => {
	return render(<ThemeContext.Provider value={theme}>{component}</ThemeContext.Provider>);
};
