import styled, { css } from 'styled-components';

export const PageDescription = styled.p`
	text-align: center;
	line-height: 2rem;

	${({ theme }) => css`
		color: ${theme.defaultStyles.textColor};
	`}
`;
