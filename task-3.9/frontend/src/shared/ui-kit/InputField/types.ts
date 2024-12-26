import { ReactNode } from "react";

export type KitInputProps = {
	label?: string;
	error?: boolean;
	helpText?: string;
	startElement?: ReactNode;
	endElement?: ReactNode
};

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & KitInputProps;
