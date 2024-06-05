import { forwardRef, useContext, useRef } from 'react';
import { Button } from '../Button';
import { DropdownContext } from '../hooks/useDropdown/DropdownContext';
import { ButtonProps } from '../Button/types';
import { mergeRefs } from 'react-merge-refs';

export const DropdownButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const { onClick, children, ...btnProps } = props;

	const context = useContext(DropdownContext);
	const btnRef = useRef<HTMLButtonElement>(null);

	const handleClick = (event: any) => {
		context?.registerTrigger(btnRef.current);
		context?.toggleState(!context?.state.open);
		onClick?.(event);
	};

	return (
		<Button onClick={handleClick} ref={mergeRefs([ref, btnRef])} {...btnProps}>
			{children}
		</Button>
	);
});
