import { ThemeContext } from 'styled-components';
import { forwardRef, useContext } from 'react';
import { ButtonProps } from './types';
import { StyledButton } from './styled-elements';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const { color, startIcon, children, endIcon, ...btnProps } = props;
	const theme = useContext(ThemeContext);

	return (
		<StyledButton color={color} {...btnProps} theme={theme} ref={ref}>
			<div className="flex flex-row justify-center items-center gap-1">
				{startIcon}
				{children}
				{endIcon}
			</div>
		</StyledButton>
	);
});
