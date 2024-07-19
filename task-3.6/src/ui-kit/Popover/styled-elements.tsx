import styled from 'styled-components';

export const PopoverContainer = styled.div`
	max-height: 400px;
	z-index: 1000;
	transform: translateX(-50%);
	position: fixed;
	overflow: auto;
	border: 1px #dee0e5 solid;
	box-shadow: 0px 8px 16px 0px #3131311a;
	border-radius: 8px;
	outline: none;
`;

export const PopoverBackdrop = styled.div`
	position: fixed;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: transparent;
	z-index: 999;
`;
