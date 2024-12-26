import styled, { css } from 'styled-components';

export const StyledTextarea = styled.textarea`
	border-bottom: 1px #000 solid;
	resize: none;
	background-color: transparent;
	outline: none;
	width: 100%;

	${({ theme }) => css`
		color: ${theme.inputs.color};
		border-color: ${theme.inputs.borderColor};

		&::placeholder {
			color: ${theme.inputs.placeholderColor};
		}

		&:focus {
			border-bottom: 1px ${theme.inputs.focused.borderColor} solid;
		}

		&:disabled {
			color: ${theme.inputs.disbled.color};
			border-color: ${theme.inputs.disbled.borderColor};
		}

		&.error {
			border-color: #ff5620;
		}
	`}
`;

export const ShadowTextarea = styled.textarea`
	visibility: hidden;
	position: absolute;
	overflow: hidden;
	height: 0;
	top: 0;
	left: 0;
	transform: translateZ(0);
`;
