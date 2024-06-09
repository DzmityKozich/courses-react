import styled, { css } from 'styled-components';

export const Label = styled.label`
	font-weight: 700;
	font-size: 0.75rem;

	${({ theme }) => css`
		color: ${theme.inputs.color};

		&.disabled {
			color: ${theme.inputs.disbled.labelColor};
		}
	`}
`;
