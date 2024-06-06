export type KitInputProps = {
	label?: string;
	error?: boolean;
	helpText?: string;
};

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & KitInputProps;
