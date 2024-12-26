import styled, { css } from 'styled-components';

export const ModalContainer = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 1rem;
	box-shadow: 0px 16px 50px 0px #0000003d;
	z-index: 99;
	border-radius: 8px;
	padding: 1rem;
	min-width: 250px;
	max-width: 80%;

	${({ theme }) => css`
		background-color: ${theme.defaultStyles.bgColor};
	`}
`;

export const ModalBodyContainer = styled.div`
	margin: 1rem 0;
`;

export const ModalFooterContainer = styled.div`
	padding-top: 0.75rem;
	border-top: 1px #dedfe5 solid;
`;

export const ModalHeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 1rem;
	border-bottom: 1px #dedfe5 solid;
	font-weight: 700;
	font-size: 1.5rem;

	${({ theme }) => css`
		color: ${theme.defaultStyles.textColor};
	`}
`;
