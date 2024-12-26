import { useMemo, useState } from 'react';
import { InputField } from '../../ui-kit/InputField';
import { InputProps } from '../../ui-kit/InputField/types';
import { IconBtn } from '../../ui-kit/IconBtn';
import { EyeCloseIcon, EyeIcon } from '../../ui-kit/icons';

export const PasswordInput: React.FC<InputProps> = (props) => {
	const [showPassword, setShowPassword] = useState(false);
	const icon = useMemo(() => {
		return showPassword ? <EyeCloseIcon color="inherit" /> : <EyeIcon color="inherit" />;
	}, [showPassword]);

	const toggle = () => {
		setShowPassword(!showPassword);
	};

	return (
		<InputField
			{...props}
			type={showPassword ? 'text' : 'password'}
			endElement={<IconBtn icon={icon} onClick={toggle} disabled={props.disabled} />}
		/>
	);
};
