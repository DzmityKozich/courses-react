import React, { useContext, useMemo } from 'react';
import { IconProps } from './types';
import { ThemeContext } from 'styled-components';
import { getColor } from './icon-utils';

export const TitleIcon: React.FC<IconProps> = ({ color }) => {
	const theme = useContext(ThemeContext);

	const iconColor = useMemo(() => {
		return getColor(color, theme);
	}, [color, theme]);

	return (
		<svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M7.23023 3.59377H2.75942C2.54821 3.59377 2.36906 3.51726 2.22195 3.36425C2.07402 3.21124 2.00006 3.02508 2.00006 2.80576C2.00006 2.58645 2.07402 2.39774 2.22195 2.23963C2.36988 2.07981 2.54903 1.99991 2.75942 1.99991H13.2419C13.4523 1.99991 13.6315 2.07641 13.7794 2.22942C13.9265 2.38243 14.0001 2.5686 14.0001 2.78791C14.0001 3.00723 13.9261 3.19594 13.7782 3.35405C13.6311 3.51386 13.4523 3.59377 13.2419 3.59377H8.77113V13.2157C8.77113 13.4333 8.69716 13.6187 8.54924 13.7717C8.40131 13.9238 8.22133 13.9999 8.00931 13.9999C7.79728 13.9999 7.61442 13.9213 7.46074 13.764C7.30707 13.6068 7.23023 13.4155 7.23023 13.1902V3.59377Z"
				fill={iconColor}
			/>
		</svg>
	);
};
