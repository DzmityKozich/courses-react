import { darken, lighten } from 'polished';
import { ColorTones, DefaultColors, Themes } from './types';

const defaultColors: DefaultColors = {
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
	},
};
