import { useCallback, useState } from 'react';

interface DropdownState {
	open: boolean;
}

export const useDropdown = () => {
	const [state, toggle] = useState<DropdownState>({ open: false });
	const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(null);

	const toggleState = useCallback(() => {
		toggle({ ...state, open: !state.open });
	}, [toggle, state]);

	return { state, triggerElement, toggleState, registerTrigger: setTriggerElement };
};
