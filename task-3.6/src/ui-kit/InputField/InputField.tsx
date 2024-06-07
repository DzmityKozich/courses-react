import { forwardRef, useMemo, useState, FocusEvent } from 'react';
import styled from 'styled-components';
import { InputProps } from './types';
import classNames from 'classnames';

const StyledInput = styled.input`
	outline: none;
	font-weight: 400;
	font-size: 1rem;
	line-height: 1.5rem;
	font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
	color: #000;

	&:-moz-placeholder {
		color: #323749;
	}

	&:focus {
		/* border-bottom-color: blue; */
	}

	&:disabled {
		/* border-bottom-color: #737373; */
		background-color: transparent;
		color: #737373;
	}
`;

const StyledLabel = styled.label`
	font-weight: 700;
	font-size: 0.75rem;

	&.disabled {
		color: #737373;
	}
`;

const InputHolder = styled.div`
	display: inline-flex;
	flex-direction: row;
	gap: 0.2rem;
	align-items: center;
	padding-bottom: 0.5rem;
	border-bottom: 1px #737373 solid;

	&.focused {
		border-color: blue;
	}

	&.error {
		border-color: #ff5620;
	}
`;

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
		inputProps.onFocus?.(event);
		setFocused(false);
	};

	return (
		<div className="inline-flex flex-col items-start w-full">
			{label && (
				<StyledLabel htmlFor={inputProps.id} className={classNames({ disabled: inputProps.disabled })}>
					{inputLabel}
				</StyledLabel>
			)}
			<InputHolder className={classNames({ focused, error })}>
				{startElement}
				<StyledInput {...inputProps} ref={ref} onFocus={handleFocus} onBlur={handleBlur} />
				{endElement}
			</InputHolder>
			{helpText && <div className={classNames('text-xs font-semibold mt-1', { 'text-red-500': error })}>{helpText}</div>}
		</div>
	);
});
