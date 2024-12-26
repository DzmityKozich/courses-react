import { createContext } from 'react';
import { SelectContextProps } from './types';

export const SelectContext = createContext<SelectContextProps | null>(null);
