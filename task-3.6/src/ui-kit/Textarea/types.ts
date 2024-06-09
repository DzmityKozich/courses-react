import React from 'react';

export type KitTextareaProps = {
	label?: string;
};

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & KitTextareaProps;
