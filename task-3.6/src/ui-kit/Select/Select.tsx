import React, { ReactNode, useEffect, useRef } from 'react';
import { Menu } from '../Menu';
import { SelectInput } from '../SelectInput';
import { useSelect } from '../hooks/useSelect';
import { SelectContext } from '../hooks/useSelect';
import { Popover } from '../Popover';
import styled, { css } from 'styled-components';
import { KitSelectProps } from './types';

const StyledDiv = styled.div`
	border: 1px #dee0e5 solid;
	border-radius: 8px;
	box-shadow: 0px 8px 16px 0px #3131311a;
	overflow: auto;
	/* position: fixed; */
	/* min-width: 200px; */
	/* transform: translateX(-50%); */
	/* z-index: 1000; */
	/* overflow: hidden; */

	${({ theme }) => css`
		background-color: ${theme.defaultStyles.bgColor};
		color: ${theme.defaultStyles.textColor};
	`}
`;

const OptionList = styled.ul`
	list-style-type: none;

	& li {
		text-align: start;
	}
`;

export const Select: React.FC<KitSelectProps> = ({ children, value, compareFn }) => {
	const contextValue = useSelect({ value, compareFn });
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		console.log(contextValue.selectedValue);
		if (inputRef.current && contextValue.selectedValue?.text) {
			inputRef.current.value = contextValue.selectedValue.text;
		}
	}, [contextValue.selectedValue]);

	return (
		<SelectContext.Provider value={contextValue}>
			<SelectInput ref={inputRef} />
			<Popover open={contextValue.state.open} toggleState={contextValue.toggleState} triggerElement={contextValue.triggerElement!}>
				<StyledDiv>
					<OptionList>{children}</OptionList>
				</StyledDiv>
			</Popover>
		</SelectContext.Provider>
	);
};
