import React from 'react';

export type KitTextareaProps = {
	label?: string;
	error?: boolean;
	helpText?: string;
};

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & KitTextareaProps;
