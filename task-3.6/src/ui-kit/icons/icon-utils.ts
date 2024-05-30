import { themes } from '../../themes/themes';
import { THEME } from '../../themes/types';
import { IconColors } from './types';

export const getColor = (iconColor: IconColors, theme: THEME): string => {
	switch (iconColor) {
		case 'primary':
			return themes[theme].defaultColors.green[500];
		case 'secondary':
			return themes[theme].defaultColors.gray[500];
		case 'inherit':
			return 'currentColor';
		default:
			return iconColor;
	}
};
