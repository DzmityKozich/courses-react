import React, { forwardRef } from 'react';

import './Checkbox.scss';

type CheckboxAttrs = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;
type Props = CheckboxAttrs & {
	label?: string;
};

export const Checkbox = forwardRef<HTMLInputElement, Props>((props, ref) => {
	const { id, label } = props;

	return (
		<div className="w-full inline-flex gap-2 flex-row text-white items-center">
			<input type="checkbox" className="hidden originalCheckbox" {...props} ref={ref} />
			<label htmlFor={id} className="checkboxMark cursor-pointer"></label>
			<label htmlFor={id} className="cursor-pointer">
				{label}
			</label>
		</div>
	);
});
