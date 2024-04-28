import React, { forwardRef, useMemo, useState } from 'react';

import './Input.scss';
import { ControlError } from '../types';
import classNames from 'classnames';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
	// ref?: React.ForwardedRef<HTMLInputElement>;
	label?: string;
	contolErrors?: ControlError[];
};

export const InputControl = forwardRef<HTMLInputElement, Props>((props, ref) => {
	const { label, id, required, type } = props;

	const [showPassword, setShowPassword] = useState(false);
	const inputType = useMemo(() => {
		if (type !== 'password') return type;
		return showPassword ? 'text' : 'password';
	}, [type, showPassword]);

	const btnClasses = classNames('passwordBtn', { show: showPassword });
	const inputClasses = classNames('inputControl', { 'pr-8': type === 'password' });

	return (
		<div className="flex flex-col justify-start w-full bg-transparent text-white text-start">
			<label className="inputLabel" htmlFor={id}>
				{required ? `${label}*` : label}
			</label>
			<div className="relative">
				<input className={inputClasses} {...props} type={inputType} ref={ref} />
				{type === 'password' && (
					<div className="absolute top-[50%] right-0 translate-y-[-50%]">
						<button className={btnClasses} type="button" onClick={() => setShowPassword(!showPassword)}></button>
					</div>
				)}
			</div>
		</div>
	);
});
