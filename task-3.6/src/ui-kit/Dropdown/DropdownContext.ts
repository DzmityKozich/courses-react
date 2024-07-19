import { createContext } from 'react';
import { DropdownContextValue } from './types';

export const DropdownContext = createContext<DropdownContextValue | null>(null);
