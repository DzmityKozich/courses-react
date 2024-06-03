import React from 'react';

export interface DropdownContextValue {
	state: { open: boolean };
	toggleState: (force?: boolean) => void;
	triggerElement: HTMLElement | null;
	registerTrigger: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}
