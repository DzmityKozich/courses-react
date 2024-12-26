import { createContext } from 'react';
import { Theme } from '../themes/types';
import { themes } from '../themes/themes';

export const ThemeContext = createContext<Theme>(themes.light);
