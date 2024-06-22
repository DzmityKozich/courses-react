import { useCallback, useState } from 'react';
import { DropdownState } from './types';

export const useDropdown = () => {
	const [state, toggle] = useState<DropdownState>({ open: false });
	const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(null);

	const toggleState = useCallback(
		(force?: boolean) => {
			toggle({ ...state, open: force ?? !state.open });
		},
		[toggle, state],
	);

	return { state, triggerElement, toggleState, registerTrigger: setTriggerElement };
};
