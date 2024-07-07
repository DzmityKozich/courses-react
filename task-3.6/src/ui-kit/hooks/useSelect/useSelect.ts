import { useState } from 'react';
import { useDropdown } from '../useDropdown';
import { SelectContextProps } from './types';
import { KitSelectProps } from '../../Select/types';

type Props = Omit<KitSelectProps, 'children'>;

export const useSelect = ({ compareFn, value }: Props): SelectContextProps => {
	const { registerTrigger, state, toggleState, triggerElement } = useDropdown();

	const [selectedValue, setSelectedValue] = useState(value);

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
		selectedValue,
		onSelect: setSelectedValue,
		compareFn: compare,
		defaultValue: value,
	};
};
