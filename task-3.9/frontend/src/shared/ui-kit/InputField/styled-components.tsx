import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
	outline: none;
	font-weight: 400;
	font-size: 1rem;
	min-height: 30px;
	background-color: transparent;
	line-height: 1.5rem;
	font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
	width: 100%;

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

export const InputHolder = styled.div`
	display: inline-flex;
	flex-direction: row;
	gap: 0.2rem;
	align-items: center;
	padding-bottom: 0.5rem;
	width: 100%;

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
