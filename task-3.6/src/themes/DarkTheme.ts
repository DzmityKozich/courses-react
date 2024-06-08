import { DefaultColors, THEME, Theme } from './types';
import { generateShades } from './utils';

const defaultColors: DefaultColors = {
	gray: { ...generateShades('#EFEFEF') },
	green: { ...generateShades('#00AE1C') },
	white: { ...generateShades('#FFFFFF') },
	black: { ...generateShades('#000000') },
	blue: { ...generateShades('#0000FF') },
};

export const darkTheme: Theme = {
	themeName: THEME.DARK,
	defaultStyles: {
		bgColor: defaultColors.black[400],
		textColor: defaultColors.white[500],
		listItemActiveColor: defaultColors.black[300],
		listItemHoverColor: defaultColors.black[200],
	},
	themeColors: {
		primary: defaultColors.green[500],
		secondary: defaultColors.gray[700],
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
			bgColor: defaultColors.gray[700],
			borderColor: defaultColors.gray[600],
			textColor: defaultColors.white[500],
			active: {
				bgColor: defaultColors.gray[600],
				borderColor: defaultColors.gray[500],
				textColor: defaultColors.white[500],
			},
			disabled: {
				bgColor: defaultColors.gray[800],
				borderColor: defaultColors.gray[700],
				textColor: defaultColors.gray[700],
			},
			hover: {
				bgColor: defaultColors.gray[700],
				borderColor: defaultColors.white[500],
				textColor: defaultColors.white[500],
			},
		},
	},
	inputs: {
		color: defaultColors.white[500],
		borderColor: defaultColors.gray[600],
		labelColor: defaultColors.white[500],
		placeholderColor: defaultColors.white[600],
		disbled: {
			borderColor: defaultColors.blue[500],
			color: defaultColors.gray[700],
			labelColor: defaultColors.gray[700],
		},
		focused: {
			borderColor: defaultColors.blue[500],
		},
	},
	checkbox: {
		borderColor: defaultColors.white[500],
		labelColor: defaultColors.white[500],
		checked: {
			bgColor: defaultColors.green[500],
			borderColor: defaultColors.green[500],
			markerColor: defaultColors.white[500],
		},
		disabled: {
			borderColor: defaultColors.gray[700],
			labelColor: defaultColors.gray[700],

			checked: {
				bgColor: defaultColors.green[600],
				borderColor: defaultColors.green[600],
				markerColor: defaultColors.gray[500],
			},
		},
	},
};
