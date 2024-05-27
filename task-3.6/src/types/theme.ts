import { StandardCSSProperties } from '@mui/system';

export enum THEME {
	LIGHT = 'light',
	DARK = 'dark',
}

export type ThemeKitStyles = Record<THEME, StandardCSSProperties & { [props: string]: any }>;
