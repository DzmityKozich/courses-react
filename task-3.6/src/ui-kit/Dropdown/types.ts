import React from 'react';

export interface DropdownState {
	open: boolean;
}

export interface DropdownContextValue {
	state: DropdownState;
	toggleState: (force?: boolean) => void;
	triggerElement: HTMLElement | null;
	registerTrigger: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}
