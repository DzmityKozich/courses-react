import { ReactNode } from 'react';
import { renderWithThemeContext } from '../../../test/common';
import { Theme } from '../../../themes/types';
import { lightTheme } from '../../../themes/LightTheme';

export const renderIcon = (icon: ReactNode, theme: Theme = lightTheme) => {
	const { container } = renderWithThemeContext(<div data-testid="icon">{icon}</div>, theme);
	return container.querySelector('svg');
};
