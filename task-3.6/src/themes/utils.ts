import { darken, lighten } from 'polished';
import { ColorTones } from './types';

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
