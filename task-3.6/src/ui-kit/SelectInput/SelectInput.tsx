import React, { forwardRef, useContext, useRef } from 'react';
import { InputField } from '../InputField';
import { ArrowDown } from '../icons/ArrowDown';
import { mergeRefs } from 'react-merge-refs';
import { SelectContext } from '../hooks/useSelect';

export const SelectInput = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
	const context = useContext(SelectContext);

	const inputRef = useRef<HTMLInputElement>(null);

	const handleClick = (event: any) => {
		const parent = inputRef.current?.parentElement || null;
		context?.registerTrigger(parent);
		context?.toggleState(!context?.state.open);
		props.onClick?.(event);
	};

	return (
		<InputField
			className="cursor-pointer"
			label="Time"
			onClick={handleClick}
			ref={mergeRefs([ref, inputRef])}
			endElement={<ArrowDown color="inherit" />}
			placeholder="Select"
			value={props.value}
			readOnly
		/>
	);
});
