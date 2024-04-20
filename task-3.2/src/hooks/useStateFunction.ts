import { useState } from 'react';

export function useStateFunction<T>(fn: (newValue: T) => T, defaultValue?: T) {
	const [state, updateState] = useState(defaultValue);

	const setState = (newValue: T) => {
		updateState(fn(newValue));
	};

	return { state, setState };
}
