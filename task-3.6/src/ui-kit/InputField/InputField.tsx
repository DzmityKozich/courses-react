import { forwardRef, useMemo, useState, FocusEvent } from 'react';
import styled, { css } from 'styled-components';
import { InputProps } from './types';
import classNames from 'classnames';

const StyledInput = styled.input`
	outline: none;
	font-weight: 400;
	font-size: 1rem;
	min-height: 30px;
	background-color: transparent;
	line-height: 1.5rem;
	font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

	${({ theme }) => css`
		color: ${theme.inputs.color};

		&:-moz-placeholder {
			color: ${theme.inputs.placeholderColor};
		}

		&:disabled {
			background-color: transparent;
			color: ${theme.inputs.disbled.color};
		}
	`}
`;

const StyledLabel = styled.label`
	font-weight: 700;
	font-size: 0.75rem;

	${({ theme }) => css`
		color: ${theme.inputs.color};

		&.disabled {
			color: ${theme.inputs.disbled.labelColor};
		}
	`}
`;

const InputHolder = styled.div`
	display: inline-flex;
	flex-direction: row;
	gap: 0.2rem;
	align-items: center;
	padding-bottom: 0.5rem;

	&.error {
		border-color: #ff5620;
	}

	${({ theme }) => css`
		border-bottom: 1px ${theme.inputs.borderColor} solid;
		color: ${theme.inputs.color};

		&.focused {
			border-color: ${theme.inputs.focused.borderColor};
		}
	`}
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
