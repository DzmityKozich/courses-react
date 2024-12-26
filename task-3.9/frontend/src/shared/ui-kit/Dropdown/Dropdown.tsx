import React, { ReactNode } from 'react';
import { DropdownContext } from './DropdownContext';
import { useDropdown } from './useDropdown';

type Props = {
	children: ReactNode | ReactNode[];
};

export const Dropdown: React.FC<Props> = ({ children }) => {
	const contexValue = useDropdown();

	return <DropdownContext.Provider value={contexValue}>{children}</DropdownContext.Provider>;
};
