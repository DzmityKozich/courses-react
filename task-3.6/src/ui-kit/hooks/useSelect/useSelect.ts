import { useState } from 'react';
import { useDropdown } from '../useDropdown';
import { DropdownContextValue } from '../useDropdown/types';

export const useSelect = (): DropdownContextValue => {
	const { registerTrigger, state, toggleState, triggerElement } = useDropdown();

	const [selectedValue, setSelectedValue] = useState();

	return { registerTrigger, state, toggleState, triggerElement, selectedValue, onSelect: setSelectedValue };
};
