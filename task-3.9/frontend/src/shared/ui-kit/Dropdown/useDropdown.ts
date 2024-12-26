import { useCallback, useState } from 'react';
import { DropdownState } from './types';

export const useDropdown = () => {
	const [state, toggle] = useState<DropdownState>({ open: false });
	const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(null);

	const toggleState = useCallback(
		(force?: boolean) => {
			toggle((prevState) => ({ ...prevState, open: force ?? !prevState.open }));
		},
		[toggle, state]
	);

	return { state, triggerElement, toggleState, registerTrigger: setTriggerElement };
};
