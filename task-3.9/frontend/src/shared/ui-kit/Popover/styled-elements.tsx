import styled from 'styled-components';

export const PopoverContainer = styled.div`
	max-height: 400px;
	z-index: 99;
	transform: translateX(-50%);
	position: absolute;
	overflow: auto;
	border: 1px #dee0e5 solid;
	box-shadow: 0px 8px 16px 0px #3131311a;
	border-radius: 8px;
	outline: none;
`;
