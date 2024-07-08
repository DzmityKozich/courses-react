import React, { Children, useEffect, useRef } from 'react';
import { SelectInput } from '../SelectInput';
import { useSelect } from '../hooks/useSelect';
import { SelectContext } from '../hooks/useSelect';
import { Popover } from '../Popover';
import styled, { css } from 'styled-components';
import { KitSelectProps } from './types';

const StyledDiv = styled.div`
	overflow: auto;

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

export const Select: React.FC<KitSelectProps> = ({ children, value, compareFn, select, className }) => {
	const contextValue = useSelect({ value, compareFn, select });
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const selectedOption: any = Children.toArray(children).find((child) => contextValue.compareFn!((child as any).props.value, value));
		if (inputRef.current && selectedOption) {
			inputRef.current.value = selectedOption.props.children;
		}
	}, [children, value, contextValue.compareFn]);

	return (
		<SelectContext.Provider value={contextValue}>
			<SelectInput ref={inputRef} className={className} />
			<Popover open={contextValue.state.open} toggleState={contextValue.toggleState} triggerElement={contextValue.triggerElement!}>
				<StyledDiv>
					<OptionList>{children}</OptionList>
				</StyledDiv>
			</Popover>
		</SelectContext.Provider>
	);
};
