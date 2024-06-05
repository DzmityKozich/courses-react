import styled, { css } from 'styled-components';

export const PageDescription = styled.p`
	${({ theme }) => css`
		color: ${theme.defaultStyles.textColor};
	`}
`;
