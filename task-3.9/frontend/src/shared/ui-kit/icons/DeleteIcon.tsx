import React, { useContext, useMemo } from 'react';
import { IconProps } from './types';
import { ThemeContext } from 'styled-components';
import { getColor } from './icon-utils';

export const DeleteIcon: React.FC<IconProps> = ({ color }) => {
	const theme = useContext(ThemeContext);

	const iconColor = useMemo(() => {
		return getColor(color, theme!);
	}, [color]);

	return (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_1_461)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M5.21533 2.24533C5.3038 1.97972 5.47362 1.7487 5.70073 1.585C5.92784 1.42131 6.20071 1.33326 6.48067 1.33333H9.51933C9.79929 1.33326 10.0722 1.42131 10.2993 1.585C10.5264 1.7487 10.6962 1.97972 10.7847 2.24533L11.1467 3.33333H13.3333C13.5101 3.33333 13.6797 3.40357 13.8047 3.52859C13.9298 3.65361 14 3.82318 14 3.99999C14 4.17681 13.9298 4.34637 13.8047 4.4714C13.6797 4.59642 13.5101 4.66666 13.3333 4.66666H12.6667V12.6667C12.6667 13.1971 12.456 13.7058 12.0809 14.0809C11.7058 14.4559 11.1971 14.6667 10.6667 14.6667H5.33333C4.8029 14.6667 4.29419 14.4559 3.91912 14.0809C3.54405 13.7058 3.33333 13.1971 3.33333 12.6667V4.66666H2.66667C2.48986 4.66666 2.32029 4.59642 2.19526 4.4714C2.07024 4.34637 2 4.17681 2 3.99999C2 3.82318 2.07024 3.65361 2.19526 3.52859C2.32029 3.40357 2.48986 3.33333 2.66667 3.33333H4.85333L5.21533 2.24533ZM6.258 3.33333L6.48067 2.66666H9.51933L9.742 3.33333H6.258Z"
					fill={iconColor}
				/>
			</g>
			<defs>
				<clipPath id="clip0_1_461">
					<rect width="16" height="16" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};
