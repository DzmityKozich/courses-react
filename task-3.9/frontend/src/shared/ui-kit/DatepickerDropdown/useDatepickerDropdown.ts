import { useDropdown } from '../Dropdown/useDropdown';

export const useDatepickerDropdown = () => {
	const { registerTrigger, state, toggleState, triggerElement } = useDropdown();

	return { registerTrigger, state, toggleState, triggerElement };
};
