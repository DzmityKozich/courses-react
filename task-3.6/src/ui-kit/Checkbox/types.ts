import React from 'react';

export type KitCheckboxProps = {
	label?: string;
};

export type CheckboxHTMLAttrs = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

export type CheckboxProps = CheckboxHTMLAttrs & KitCheckboxProps;
