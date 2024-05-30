import { darken, lighten } from 'polished';
import { ColorTones, DefaultColors, Themes } from './types';

const defaultColorsLight: DefaultColors = {
	gray: { ...generateShades('#EFEFEF') },
	green: { ...generateShades('#00AE1C') },
	white: { ...generateShades('#FFFFFF') },
	black: { ...generateShades('#000000') },
};

export function generateShades(color: string): ColorTones {
	return {
		'50': lighten(0.9, color),
		'100': lighten(0.7, color),
		'200': lighten(0.5, color),
		'300': lighten(0.3, color),
		'400': lighten(0.1, color),
		'500': color,
		'600': darken(0.1, color),
		'700': darken(0.3, color),
		'800': darken(0.5, color),
		'900': darken(0.7, color),
	};
}

export const themes: Themes = {
	light: {
		themeColors: {
			primary: defaultColorsLight.green[500],
			secondary: defaultColorsLight.gray[500],
		},
		defaultColors: defaultColorsLight,
		buttons: {
			primary: {
				bgColor: defaultColorsLight.green[500],
				borderColor: defaultColorsLight.green[500],
				textColor: defaultColorsLight.white[500],
				active: {
					bgColor: defaultColorsLight.green[400],
					borderColor: defaultColorsLight.green[400],
					textColor: defaultColorsLight.white[500],
				},
				disabled: {
					bgColor: defaultColorsLight.green[600],
					borderColor: defaultColorsLight.green[600],
					textColor: defaultColorsLight.gray[600],
				},
				hover: {
					bgColor: defaultColorsLight.green[500],
					borderColor: defaultColorsLight.green[300],
					textColor: defaultColorsLight.white[500],
				},
			},
			secondary: {
				bgColor: defaultColorsLight.white[500],
				borderColor: defaultColorsLight.gray[600],
				textColor: defaultColorsLight.black[500],
				active: {
					bgColor: defaultColorsLight.gray[600],
					borderColor: defaultColorsLight.gray[600],
					textColor: defaultColorsLight.black[500],
				},
				disabled: {
					bgColor: defaultColorsLight.gray[600],
					borderColor: defaultColorsLight.gray[700],
					textColor: defaultColorsLight.gray[700],
				},
				hover: {
					bgColor: defaultColorsLight.gray[500],
					borderColor: defaultColorsLight.gray[400],
					textColor: defaultColorsLight.black[500],
				},
			},
		},
	},
};
