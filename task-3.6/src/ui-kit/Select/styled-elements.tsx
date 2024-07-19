import styled, { css } from 'styled-components';

export const StyledDiv = styled.div`
	overflow: auto;

	${({ theme }) => css`
		background-color: ${theme.defaultStyles.bgColor};
		color: ${theme.defaultStyles.textColor};
	`}
`;

export const OptionList = styled.ul`
	list-style-type: none;

	& li {
		text-align: start;
	}
`;
