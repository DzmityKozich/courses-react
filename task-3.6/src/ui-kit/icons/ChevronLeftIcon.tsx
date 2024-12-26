import { useContext, useMemo } from 'react';
import { IconProps } from './types';
import { ThemeContext } from 'styled-components';
import { getColor } from './icon-utils';

export const ChevronLeftIcon: React.FC<IconProps> = ({ color }) => {
	const theme = useContext(ThemeContext);

	const iconColor = useMemo(() => {
		return getColor(color, theme!);
	}, [color]);

	return (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M10 2.66667L4.66669 8.00001L10 13.3333" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
};
