import { ThemeContext } from 'styled-components';
import { forwardRef, useContext } from 'react';
import { ButtonProps } from './types';
import { ButtonInner, StyledButton } from './styled-elements';
import classNames from 'classnames';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const { color, startIcon, children, endIcon, block, className, ...btnProps } = props;
	const theme = useContext(ThemeContext);

	return (
		<StyledButton color={color} {...btnProps} theme={theme} ref={ref} className={classNames(className, block ? 'w-full' : 'w-fit')}>
			<ButtonInner>
				{startIcon}
				{children}
				{endIcon}
			</ButtonInner>
		</StyledButton>
	);
});
