import React from 'react';

export interface DropdownContextValue {
	state: { open: boolean };
	toggleState: () => void;
	triggerElement: HTMLElement | null;
	registerTrigger: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}
