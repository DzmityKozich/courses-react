import styled, { css } from 'styled-components';

export const DatepickerCard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 0.75rem 0.25rem;
	border-radius: 8px;
	max-width: fit-content;

	${({ theme }) => css`
		box-shadow: ${theme.datepicker.shadow};
		background-color: ${theme.datepicker.bgColor};
		color: ${theme.datepicker.color};
	`}
`;

export const DatepickerCardHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const DatepickerTable = styled.table`
	& th {
		width: 40px;
		padding: 5px;
	}

	& td {
		padding: 5px;
	}
`;

export const DateBtn = styled.button`
	width: 24px;
	height: 24px;
	border-radius: 8px;
	margin: auto;
	background-color: transparent;

	${({ theme }) => css`
		&.selected {
			background-color: ${theme.datepicker.selectedDate.bgColor};
			color: ${theme.datepicker.selectedDate.color};
			font-weight: 700;
		}

		&:disabled {
			color: ${theme.datepicker.disabledDate.color};
		}
	`}
`;
