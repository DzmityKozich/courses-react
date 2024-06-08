import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { CheckboxProps } from './types';
import { CheckIcon } from '../icons';
import classNames from 'classnames';

const StyledInput = styled.input`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	opacity: 0;
	z-index: 1;
	cursor: pointer;

	${({ theme, checked }) => css`
		&:checked ~ div {
			background-color: ${theme.checkbox.checked.bgColor};
			color: ${theme.checkbox.checked.markerColor};
			border-color: ${theme.checkbox.checked.borderColor};
		}

		&:disabled ~ div {
			background-color: ${checked ? theme.checkbox.disabled.checked.bgColor : 'transparent'};
			color: ${checked ? theme.checkbox.disabled.checked.markerColor : 'transparent'};
			border-color: ${checked ? theme.checkbox.disabled.checked.borderColor : theme.checkbox.disabled.borderColor};
		}
	`}
`;

const StyledLabel = styled.label`
	cursor: pointer;
	font-size: 1rem;

	${({ theme }) => css`
		color: ${theme.checkbox.labelColor};

		&.disabled {
			color: ${theme.checkbox.disabled.labelColor};
		}
	`}
`;

const MockCheckbox = styled.div`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	width: 15px;
	height: 15px;
	padding-bottom: 2px;
	border-radius: 3px;
	background-color: transparent;
	color: transparent;

	${({ theme }) => css`
		border: 1px ${theme.checkbox.borderColor} solid;
	`}
`;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
	const { label, ...checkboxProps } = props;

	return (
		<div className="flex flex-row items-center">
			<div className="inline-flex justify-center items-center p-[5px] mr-[5px] relative">
				<StyledInput {...checkboxProps} ref={ref} type="checkbox" />
				<MockCheckbox>
					<CheckIcon color="inherit" />
				</MockCheckbox>
			</div>
			{label && (
				<StyledLabel htmlFor={props.id} className={classNames({ disabled: checkboxProps.disabled })}>
					{label}
				</StyledLabel>
			)}
		</div>
	);
});
