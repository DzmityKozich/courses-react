import React, { ReactNode, useEffect, useRef } from 'react';
import { Menu } from '../Menu';
import { SelectInput } from '../SelectInput';
import { DropdownContext } from '../hooks/useDropdown/DropdownContext';
import { useSelect } from '../hooks/useSelect';

type Props = {
	children: ReactNode[];
	value?: any;
};

export const Select: React.FC<Props> = ({ children }) => {
	const contextValue = useSelect();
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		console.log(contextValue.selectedValue);
		if (inputRef.current && contextValue.selectedValue?.text) {
			inputRef.current.value = contextValue.selectedValue.text;
		}
	}, [contextValue.selectedValue]);

	return (
		<DropdownContext.Provider value={contextValue}>
			<SelectInput ref={inputRef} />
			<Menu>{children}</Menu>
		</DropdownContext.Provider>
	);
};
