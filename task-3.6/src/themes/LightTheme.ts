import { DefaultColors, THEME, Theme } from './types';
import { generateShades } from './utils';

const defaultColors: DefaultColors = {
	gray: { ...generateShades('#EFEFEF') },
	green: { ...generateShades('#00AE1C') },
	white: { ...generateShades('#FFFFFF') },
	black: { ...generateShades('#000000') },
};

export const lightTheme: Theme = {
	themeName: THEME.LIGHT,
	bgColor: defaultColors.white[500],
	themeColors: {
		primary: defaultColors.green[500],
		secondary: defaultColors.gray[500],
	},
	defaultColors,
	buttons: {
		primary: {
			bgColor: defaultColors.green[500],
			borderColor: defaultColors.green[500],
			textColor: defaultColors.white[500],
			active: {
				bgColor: defaultColors.green[400],
				borderColor: defaultColors.green[400],
				textColor: defaultColors.white[500],
			},
			disabled: {
				bgColor: defaultColors.green[600],
				borderColor: defaultColors.green[600],
				textColor: defaultColors.gray[600],
			},
			hover: {
				bgColor: defaultColors.green[500],
				borderColor: defaultColors.green[300],
				textColor: defaultColors.white[500],
			},
		},
		secondary: {
			bgColor: defaultColors.white[500],
			borderColor: defaultColors.gray[600],
			textColor: defaultColors.black[500],
			active: {
				bgColor: defaultColors.gray[600],
				borderColor: defaultColors.gray[600],
				textColor: defaultColors.black[500],
			},
			disabled: {
				bgColor: defaultColors.gray[600],
				borderColor: defaultColors.gray[700],
				textColor: defaultColors.gray[700],
			},
			hover: {
				bgColor: defaultColors.gray[500],
				borderColor: defaultColors.gray[400],
				textColor: defaultColors.black[500],
			},
		},
	},
};
