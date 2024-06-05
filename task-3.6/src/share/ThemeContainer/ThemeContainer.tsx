import styled, { css } from 'styled-components';

export const ThemeContainer = styled.div`
	${({ theme }) => css`
		color: ${theme.defaultStyles.textColor};
	`}
`;
