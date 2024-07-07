import React, { forwardRef, useContext, useRef } from 'react';
import { InputField } from '../InputField';
import { ArrowDown } from '../icons/ArrowDown';
import styled from 'styled-components';
import { mergeRefs } from 'react-merge-refs';
import { SelectContext } from '../hooks/useSelect';

const StyledDiv = styled.div`
	content: '';
	position: absolute;
	display: block;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
`;

export const SelectInput = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
	const context = useContext(SelectContext);

	const inputRef = useRef<HTMLInputElement>(null);

	const handleClick = (event: any) => {
		const parent = inputRef.current?.parentElement || null;
		context?.registerTrigger(parent);
		context?.toggleState(!context?.state.open);
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
