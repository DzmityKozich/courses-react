import React, { Children, useEffect, useRef, useState } from 'react';
import { useSelect } from './useSelect';
import { SelectContext } from './SelectContext';
import { Popover } from '../Popover';
import { KitSelectProps } from './types';
import { OptionList, StyledDiv } from './styled-elements';
import { SelectField } from './SelectField';
import { Label } from '../Label';

export const Select: React.FC<KitSelectProps> = (props) => {
	const { children, value, compareFn, select, className, label, error, helpText, onClose, ...attrs } = props;

	const [content, setContent] = useState<React.ReactNode | null>(null);
	const contextValue = useSelect({ value, compareFn, select });
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const selectedOption: any = Children.toArray(children).find((child) => contextValue.compareFn!((child as any).props.value, value));
		if (inputRef.current && selectedOption) {
			inputRef.current.value = selectedOption.props.children;
		}
		setContent(selectedOption?.props?.children || null);
	}, [children, value, contextValue.compareFn]);

	useEffect(() => {
		if (contextValue?.state?.open === false && contextValue.triggerElement) {
			onClose && onClose();
		}
	}, [contextValue.triggerElement, contextValue.state.open]);

	return (
		<SelectContext.Provider value={contextValue}>
			<div className="inline-flex flex-col w-full">
				{label && <Label>{label}</Label>}
				<SelectField className={className} error={error} helpText={helpText} tabIndex={0} {...attrs}>
					{content}
				</SelectField>
				<Popover
					open={contextValue.state.open}
					toggleState={() => contextValue.toggleState()}
					triggerElement={contextValue.triggerElement!}
				>
					<StyledDiv>
						<OptionList>{children}</OptionList>
					</StyledDiv>
				</Popover>
			</div>
		</SelectContext.Provider>
	);
};
