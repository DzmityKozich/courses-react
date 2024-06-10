import React, { useContext, useRef } from 'react';
import { InputField } from '../InputField';
import { DropdownContext } from '../hooks/useDropdown/DropdownContext';
import { ArrowDown } from '../icons/ArrowDown';
import styled from 'styled-components';

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

export const SelectInput: React.FC = () => {
	const context = useContext(DropdownContext);

	const inputRef = useRef<HTMLInputElement>(null);

	const handleClick = (event: any) => {
		const parent = inputRef.current?.parentElement || null;
		context?.registerTrigger(parent);
		context?.toggleState(!context?.state.open);
		// onClick?.(event);
	};

	return (
		// <div className="relative" onClick={handleClick} ref={inputRef}>
		<InputField
			className="cursor-pointer"
			label="Time"
			onClick={handleClick}
			ref={inputRef}
			endElement={<ArrowDown color="inherit" />}
			placeholder="Select"
			readOnly
		/>
		// </div>
	);
};
