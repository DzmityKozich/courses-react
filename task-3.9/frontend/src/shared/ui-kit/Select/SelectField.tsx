import React, { forwardRef, useContext, useRef } from 'react';
import { SelectFieldHolder, SelectFieldInner } from './styled-elements';
import { SelectContext } from './SelectContext';
import { mergeRefs } from 'react-merge-refs';
import { ArrowDown } from '../icons/ArrowDown';
import classNames from 'classnames';

type Props = {
	children?: React.ReactNode;
	error?: boolean;
	helpText?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const SelectField = forwardRef<HTMLDivElement, Props>((props, ref) => {
	const context = useContext(SelectContext);
	const { children, onClick, error, helpText, ...rest } = props;
	const _ref = useRef<HTMLInputElement>(null);

	const handleClick = (event: any) => {
		context?.registerTrigger(_ref.current);
		context?.toggleState();
		props.onClick?.(event);
	};

	return (
		<>
			<SelectFieldHolder ref={mergeRefs([ref, _ref])} {...rest} onClick={handleClick}>
				<SelectFieldInner>{children}</SelectFieldInner>
				<ArrowDown color="inherit" />
			</SelectFieldHolder>
			{helpText && <div className={classNames('text-xs font-semibold mt-1', { 'text-red-500': error })}>{helpText}</div>}
		</>
	);
});
