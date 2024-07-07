import { ReactNode } from 'react';

export type KitSelectProps = {
	children: ReactNode[];
	value?: any;
	compareFn?: (valueA: any, valueB: any) => boolean;
};
