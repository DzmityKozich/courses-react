import styled, { css } from 'styled-components';

export const ToastDiv = styled.div`
	position: fixed;
	padding: 0.75rem;
	border-radius: 8px;
	display: flex;
	flex-direction: row;
	gap: 1rem;
	justify-content: space-between;
	align-items: center;
	max-width: 300px;
	box-shadow: 0px 16px 50px 0px #0000003d;

	${({ theme }) => css`
		background-color: ${theme.toast.bgColor};
		color: ${theme.toast.color};
		border: 1px ${theme.toast.borderColor} solid;
	`}

	&.bottom-left {
		left: 20px;
		bottom: 20px;
	}

	&.top-left {
		left: 20px;
		top: 20px;
	}

	&.top-center {
		top: 20px;
		left: 50%;
		transform: translateX(-50%);
	}

	&.top-right {
		top: 20px;
		right: 20px;
	}

	&.bottom-right {
		bottom: 20px;
		right: 20px;
	}

	&.bottom-center {
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
	}
`;
