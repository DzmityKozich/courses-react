import { useState } from 'react';
import { useDropdown } from '../useDropdown';
import { SelectContextProps } from './types';

export const useSelect = (): SelectContextProps => {
	const { registerTrigger, state, toggleState, triggerElement } = useDropdown();

	const [selectedValue, setSelectedValue] = useState();

	return { registerTrigger, state, toggleState, triggerElement, selectedValue, onSelect: setSelectedValue };
};
