import React, { forwardRef } from 'react';

import './Input.scss';
import { ControlError } from '../types';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
	ref?: React.ForwardedRef<HTMLInputElement>;
	label?: string;
	contolErrors?: ControlError[];
};

// export const InputControl = forwardRef<HTMLInputElement, Props>((props, ref) => Input({ ...props, ref }));
export const InputControl = forwardRef<HTMLInputElement, Props>((props, ref) => {
	const { label, id } = props;

	return (
		<div className="flex flex-col justify-start w-full bg-transparent text-white text-start">
			<label className="inputLabel" htmlFor={id}>
				{label}
			</label>
			<input className="inputControl" {...props} ref={ref} />
			<div className="text-sm text-red-500">error here</div>
		</div>
	);
});
