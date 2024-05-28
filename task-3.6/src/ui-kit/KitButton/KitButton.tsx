import styled, { css } from 'styled-components';
import { KitButtonColor } from './types';
import React, { ReactNode } from 'react';

export const btn = styled.button``;

// 1) выделить какие поля нам нужны для темы
// 2) выделить какие цвета нам нужны для какой темы и распределить из по полям темы
// 3) использовать styled-components для стилей компонентов
// 4) использовать темы как background-color: ${theme[`btn-${primary}-bgc`]};

type Props = {
	color: KitButtonColor;
};

export const KitButton = styled.button<Props>`
	padding: 0.5rem 0.75rem;
	border-radius: 8px;

	${({ color }) => css`
		background-color: ${color === 'primary' ? '#00AE1C' : 'inherit'};
	`}
`;
