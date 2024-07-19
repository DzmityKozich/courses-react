import React, { Children, useEffect, useRef } from 'react';
import { SelectInput } from './SelectInput';
import { useSelect } from './useSelect';
import { SelectContext } from './SelectContext';
import { Popover } from '../Popover';
import { KitSelectProps } from './types';
import { OptionList, StyledDiv } from './styled-elements';

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
