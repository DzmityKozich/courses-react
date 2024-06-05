import styled, { css } from 'styled-components';

import './PageTitle.scss';

// TODO: move to share

export const PageTitle = styled.h1`
	font-weight: 600;
	width: 100%;
	text-align: center;

	${({ theme }) => css`
		color: ${theme.defaultStyles.textColor};
	`}
`;
