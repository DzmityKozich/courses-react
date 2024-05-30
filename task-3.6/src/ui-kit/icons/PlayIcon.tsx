import React, { useMemo } from 'react';
import { IconProps } from './types';
import { getColor } from './icon-utils';
import { THEME } from '../../themes/types';

export const PlayIcon: React.FC<IconProps> = ({ color = '#fff' }) => {
	const iconColor = useMemo(() => {
		return getColor(color, THEME.LIGHT);
	}, [color]);

	return (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M4.604 3.02467C4.54327 2.98866 4.47409 2.96937 4.40349 2.96875C4.33289 2.96813 4.26339 2.98621 4.20204 3.02115C4.14069 3.0561 4.08968 3.10665 4.0542 3.16769C4.01871 3.22872 4.00001 3.29806 4 3.36867V12.6313C4.00001 12.7019 4.01871 12.7713 4.0542 12.8323C4.08968 12.8933 4.14069 12.9439 4.20204 12.9788C4.26339 13.0138 4.33289 13.0319 4.40349 13.0312C4.47409 13.0306 4.54327 13.0113 4.604 12.9753L12.4193 8.344C12.479 8.30858 12.5285 8.25824 12.5628 8.19793C12.5972 8.13762 12.6152 8.0694 12.6152 8C12.6152 7.93059 12.5972 7.86238 12.5628 7.80207C12.5285 7.74176 12.479 7.69142 12.4193 7.656L4.604 3.02467Z"
				fill={iconColor}
				stroke={iconColor}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
