import { forwardRef } from 'react';
import { CheckboxProps } from './types';
import { CheckIcon } from '../icons';
import classNames from 'classnames';
import { MockCheckbox, StyledInput, StyledLabel } from './styled-elements';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
	const { label, color, ...checkboxProps } = props;

	return (
		<div className="flex flex-row items-center">
			<div className="inline-flex justify-center items-center p-[5px] mr-[5px] relative">
				<StyledInput {...checkboxProps} ref={ref} type="checkbox" color={color} />
				<MockCheckbox>
					<CheckIcon color="inherit" />
				</MockCheckbox>
			</div>
			{label && (
				<StyledLabel htmlFor={props.id} className={classNames({ disabled: checkboxProps.disabled })}>
					{label}
				</StyledLabel>
			)}
		</div>
	);
});
