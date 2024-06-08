import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { CheckboxProps } from './types';
import { CheckIcon } from '../icons';

const StyledInput = styled.input`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	opacity: 0;
	z-index: 1;
	cursor: pointer;

	&:checked ~ div {
		background-color: green;
		color: #fff;
		border-color: green;
	}
`;

const StyledLabel = styled.label`
	cursor: pointer;
	font-size: 1rem;

	${({ theme }) => css`
		color: ${theme.defaultStyles.textColor};
	`}
`;

const MockCheckbox = styled.div`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	width: 15px;
	height: 15px;
	padding-bottom: 2px;
	border: 1px #000 solid;
	border-radius: 3px;
	background-color: transparent;
	color: transparent;
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
			<StyledLabel htmlFor={props.id}>{label}</StyledLabel>
		</div>
	);
});
