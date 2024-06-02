import React, { useContext } from 'react';
import { Button } from '../Button';
import { DropdownContext } from '../hooks/useDropdown/DropdownContext';

export const DropdownButton: React.FC = () => {
	const context = useContext(DropdownContext);

	return (
		<Button color="secondary" onClick={context?.toggleState}>
			Click me!
		</Button>
	);
};
