import React from 'react';
import { IconProps } from './types';
import { useIcon } from './useIcon';

export const DescriptionIcon: React.FC<IconProps> = ({ color }) => {
	const { iconColor } = useIcon({ color });

	return (
		<svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2 4.08331C2 3.8844 2.05926 3.69364 2.16475 3.55298C2.27024 3.41233 2.41332 3.33331 2.5625 3.33331H13.4375C13.5867 3.33331 13.7298 3.41233 13.8352 3.55298C13.9407 3.69364 14 3.8844 14 4.08331C14 4.28223 13.9407 4.47299 13.8352 4.61364C13.7298 4.7543 13.5867 4.83331 13.4375 4.83331H2.5625C2.41332 4.83331 2.27024 4.7543 2.16475 4.61364C2.05926 4.47299 2 4.28223 2 4.08331ZM2 8.33331C2 8.1344 2.05926 7.94363 2.16475 7.80298C2.27024 7.66233 2.41332 7.58331 2.5625 7.58331H13.4375C13.5867 7.58331 13.7298 7.66233 13.8352 7.80298C13.9407 7.94363 14 8.1344 14 8.33331C14 8.53223 13.9407 8.72299 13.8352 8.86364C13.7298 9.00429 13.5867 9.08331 13.4375 9.08331H2.5625C2.41332 9.08331 2.27024 9.00429 2.16475 8.86364C2.05926 8.72299 2 8.53223 2 8.33331ZM2.5625 11.8333C2.41332 11.8333 2.27024 11.9123 2.16475 12.053C2.05926 12.1936 2 12.3844 2 12.5833C2 12.7822 2.05926 12.973 2.16475 13.1136C2.27024 13.2543 2.41332 13.3333 2.5625 13.3333H9.6875C9.83668 13.3333 9.97976 13.2543 10.0852 13.1136C10.1907 12.973 10.25 12.7822 10.25 12.5833C10.25 12.3844 10.1907 12.1936 10.0852 12.053C9.97976 11.9123 9.83668 11.8333 9.6875 11.8333H2.5625Z"
				fill={iconColor}
			/>
		</svg>
	);
};
