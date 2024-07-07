import { useMemo } from 'react';
import { SelectContextProps } from '../useSelect/types';

type Props = {
	context: SelectContextProps | null;
	value: any;
};

export const useSelectMenuItem = ({ value, context }: Props) => {
	const selected = useMemo(() => {
		if (context?.compareFn) {
			return context.compareFn(value, context?.selectedValue);
		} else {
			return value === context?.selectedValue;
		}
	}, [value, context?.selectedValue, context?.compareFn]);

	return { selected };
};
