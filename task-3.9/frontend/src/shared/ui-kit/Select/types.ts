import { ReactNode } from 'react';

export type KitSelectProps = {
	children: ReactNode[];
	value?: any;
	compareFn?: (valueA: any, valueB: any) => boolean;
	select: (value: any) => void;
	className?: string;
	label?: string;
	error?: boolean;
	helpText?: string;
	onClose?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

export type SelectContextProps = {
	state: { open: boolean };
	toggleState: (force?: boolean) => void;
	triggerElement: HTMLElement | null;
	registerTrigger: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
	onSelect?: (value: any) => void;
	selectedValue?: any;
	compareFn?: (valueA: any, valueB: any) => boolean;
};
