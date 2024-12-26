import React, { useContext, useMemo } from 'react';
import { IconProps } from './types';
import { getColor } from './icon-utils';
import { ThemeContext } from 'styled-components';

export const ArrowDown: React.FC<IconProps> = ({ color }) => {
	const theme = useContext(ThemeContext);

	const iconColor = useMemo(() => {
		return getColor(color, theme!);
	}, [color]);

	return (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M2.66669 6L8.00002 11.3333L13.3334 6" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
};
