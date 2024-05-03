import React, { forwardRef, useMemo, useState } from 'react';
import { ValidationError } from '../../types';
import classNames from 'classnames';

import './Input.scss';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
	errors?: ValidationError[];
};

export const InputControl = forwardRef<HTMLInputElement, Props>((props, ref) => {
	const { label, id, required, type, errors } = props;

	const [showPassword, setShowPassword] = useState(false);
	const inputType = useMemo(() => {
		if (type !== 'password') return type;
		return showPassword ? 'text' : 'password';
	}, [type, showPassword]);

	return (
		<div className="flex flex-col justify-start w-full bg-transparent text-white text-start">
			<label className="inputLabel" htmlFor={id}>
				{required ? `${label}*` : label}
			</label>
			<div className="relative">
				<input
					className={classNames('inputControl', { 'pr-8': type === 'password' }, { 'border-red-500': !!errors?.length })}
					{...props}
					type={inputType}
					ref={ref}
				/>
				{type === 'password' && (
					<div className="absolute top-[50%] right-0 translate-y-[-50%]">
						<button
							className={classNames('passwordBtn', { show: showPassword })}
							type="button"
							onClick={() => setShowPassword(!showPassword)}
						></button>
					</div>
				)}
			</div>
			{errors &&
				errors.map((error) => {
					const [key, message] = Object.entries(error)[0];
					return (
						<span key={key} className="text-sm text-red-500">
							{message}
						</span>
					);
				})}
		</div>
	);
});
