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

/* gap: 0.2rem; */
export const SelectFieldHolder = styled.div`
	display: inline-flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 0.5rem;
	cursor: pointer;
	padding: 0.25rem;
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

export const SelectFieldInner = styled.div`
	width: 100%;
	min-height: 30px;
`;
