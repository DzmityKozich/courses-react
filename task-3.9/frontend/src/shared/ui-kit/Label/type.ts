import React from 'react';

export type KitLabelProps = {
	required?: boolean;
};

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & KitLabelProps;
