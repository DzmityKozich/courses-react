import { forwardRef, useMemo, useState, FocusEvent } from 'react';
import { InputProps } from './types';
import classNames from 'classnames';
import { Label } from '../Label';
import { InputHolder, StyledInput } from './styled-components';

export const InputField = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { label, error, helpText, startElement, endElement, ...inputProps } = props;

	const inputLabel = useMemo(() => {
		return inputProps.required ? `${label}*` : label;
	}, [label, inputProps.required]);

	const [focused, setFocused] = useState(false);

	const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
		inputProps.onFocus?.(event);
		setFocused(true);
	};

	const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
		inputProps.onBlur?.(event);
		setFocused(false);
	};

	return (
		<div className={classNames('inline-flex flex-col items-start w-full', props.className)}>
			{label && (
				<Label htmlFor={inputProps.id} className={classNames({ disabled: inputProps.disabled })}>
					{inputLabel}
				</Label>
			)}
			<InputHolder className={classNames('kit-input-holder', { focused, error })}>
				{startElement}
				<StyledInput
					{...inputProps}
					ref={ref}
					onFocus={handleFocus}
					onBlur={handleBlur}
					className={classNames(props.className, 'kit-input')}
				/>
				{endElement}
			</InputHolder>
			{helpText && <div className={classNames('text-xs font-semibold mt-1', { 'text-red-500': error })}>{helpText}</div>}
		</div>
	);
});
