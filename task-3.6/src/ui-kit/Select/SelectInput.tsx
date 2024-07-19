import { forwardRef, useContext, useRef } from 'react';
import { InputField } from '../InputField';
import { ArrowDown } from '../icons/ArrowDown';
import { mergeRefs } from 'react-merge-refs';
import { SelectContext } from './SelectContext';
import classNames from 'classnames';
import { InputProps } from '../InputField/types';

export const SelectInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
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
			className={classNames('cursor-pointer', props.className)}
			label={props.label}
			onClick={handleClick}
			ref={mergeRefs([ref, inputRef])}
			endElement={<ArrowDown color="inherit" />}
			placeholder="Select"
			value={props.value}
			readOnly
		/>
	);
});
