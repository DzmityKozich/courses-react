export type SelectContextProps = {
	state: { open: boolean };
	toggleState: (force?: boolean) => void;
	triggerElement: HTMLElement | null;
	registerTrigger: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
	onSelect?: (value: any) => void;
	selectedValue?: any;
	compareFn?: (valueA: any, valueB: any) => boolean;
};
