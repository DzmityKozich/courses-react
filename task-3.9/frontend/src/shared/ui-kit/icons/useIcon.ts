import { useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import { getColor } from './icon-utils';

type Props = {
	color: string;
};

export const useIcon = ({ color }: Props) => {
	const theme = useContext(ThemeContext);

	const iconColor = useMemo(() => {
		return getColor(color, theme);
	}, [color, theme]);

	return { iconColor };
};
