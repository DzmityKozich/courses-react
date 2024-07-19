import { createContext } from 'react';
import { ModalContextProps } from './types';

export const ModalContext = createContext<ModalContextProps>({ onClose: () => {} });
