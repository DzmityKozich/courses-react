import { useDropdown } from '../Dropdown/useDropdown';
import { KitSelectProps, SelectContextProps } from './types';

type Props = Omit<KitSelectProps, 'children' | 'className'>;

export const useSelect = ({ compareFn, value, select }: Props): SelectContextProps => {
	const { registerTrigger, state, toggleState, triggerElement } = useDropdown();

	let compare = compareFn;
	if (!compare) {
		compare = (valueA: any, valueB: any) => {
			return valueA === valueB;
		};
	}

	return {
		registerTrigger,
		state,
		toggleState,
		triggerElement,
		selectedValue: value,
		onSelect: select,
		compareFn: compare,
	};
};
