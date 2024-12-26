import { Colors, Theme, ThemeColors } from '../themes/types';
import { IconColors } from './types';

export const getColor = (iconColor: IconColors, theme: Theme): string => {
	if (iconColor === 'inherit') return 'currentColor';
	if (isThemeColor(iconColor, theme.themeColors)) {
		return theme.themeColors[iconColor];
	}
	return iconColor;
};

const isThemeColor = (color: string, themeColors: ThemeColors): color is Colors => {
	return Object.prototype.hasOwnProperty.call(themeColors, color);
};
