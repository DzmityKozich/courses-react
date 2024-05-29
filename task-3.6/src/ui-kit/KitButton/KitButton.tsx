import styled, { css } from 'styled-components';
// import { KitButtonColor } from './types';
import { Colors, THEME } from '../../themes/types';
import { themes } from '../../themes/themes';

// 1) выделить какие поля нам нужны для темы
// 2) выделить какие цвета нам нужны для какой темы и распределить из по полям темы
// 3) использовать styled-components для стилей компонентов
// 4) использовать темы как background-color: ${theme[`btn-${primary}-bgc`]};

type Props = {
	color: Colors;
};

const theme = THEME.LIGHT;

export const KitButton = styled.button<Props>`
	padding: 0.5rem 0.75rem;
	border-radius: 8px;
	border-width: 1px;
	border-style: solid;

	${({ color }) => css`
		background-color: ${themes[theme].buttons[color].bgColor};
		border-color: ${themes[theme].buttons[color].borderColor};
		color: ${themes[theme].buttons[color].textColor};

		&:hover {
			background-color: ${themes[theme].buttons[color].hover.bgColor};
			border-color: ${themes[theme].buttons[color].hover.borderColor};
			color: ${themes[theme].buttons[color].hover.textColor};
		}

		&:active {
			background-color: ${themes[theme].buttons[color].active.bgColor};
			border-color: ${themes[theme].buttons[color].active.borderColor};
			color: ${themes[theme].buttons[color].active.textColor};
		}

		&:disabled {
			background-color: ${themes[theme].buttons[color].disabled.bgColor};
			border-color: ${themes[theme].buttons[color].disabled.borderColor};
			color: ${themes[theme].buttons[color].disabled.textColor};
		}
	`}
`;
