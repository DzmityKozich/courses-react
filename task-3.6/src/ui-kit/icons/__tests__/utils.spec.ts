import { lightTheme } from '../../../themes/LightTheme';
import { getColor } from '../icon-utils';

describe('icon utils test', () => {
	it('should return currentColor', () => {
		const color = getColor('inherit', lightTheme);

		expect(color).toBe('currentColor');
	});

	it('should return theme color', () => {
		const primaryColor = getColor('primary', lightTheme);
		const secondaryColor = getColor('secondary', lightTheme);

		expect(primaryColor).toBe('#00AE1C');
		expect(secondaryColor).toBe('#EFEFEF');
	});

	it('should return custom color', () => {
		const color = getColor('#ccc', lightTheme);

		expect(color).toBe('#ccc');
	});
});
