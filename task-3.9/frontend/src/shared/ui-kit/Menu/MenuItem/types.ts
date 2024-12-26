import { ReactNode } from 'react';

export type MenuItemProps = React.HTMLAttributes<HTMLLIElement> & {
	children: ReactNode;
	value?: any;
};
