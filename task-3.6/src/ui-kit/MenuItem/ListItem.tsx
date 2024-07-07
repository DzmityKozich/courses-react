import styled, { css } from 'styled-components';

export const ListItem = styled.li`
	padding: 0.45rem;
	cursor: pointer;
	transition: background-color 0.15s ease;

	${({ theme }) => css`
		&:hover {
			background-color: ${theme.defaultStyles.listItemHoverColor};
		}

		&:active {
			background-color: ${theme.defaultStyles.listItemActiveColor};
		}

		&.selected {
			background-color: ${theme.defaultStyles.listItemActiveColor};
		}
	`}
`;
