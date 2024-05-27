import { Button, styled, ButtonProps } from '@mui/material';
import { KitButtonColor } from './types';
import { styles } from './styles';

type Props = ButtonProps & { color: KitButtonColor };

export const KitButton = styled(Button)<Props>(({ color }) => {
	return styles[color].light;
});
