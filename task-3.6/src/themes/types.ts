// Theme
export enum THEME {
	LIGHT = 'light',
	DARK = 'dark',
}

export type Themes = Record<THEME, Theme>;

export interface Theme {
	themeName: THEME;
	defaultStyles: DefaultStyles;
	themeColors: ThemeColors;
	defaultColors: DefaultColors;
	buttons: ButtonThemes;
	inputs: InputThemeProps;
	checkbox: CheckboxThemeProps;
	toast: ToastThemeProps;
	datepicker: DatepickerThemeProps;
}

// General
export type Colors = 'primary' | 'secondary';

export interface GeneralStyles {
	bgColor: string;
}

export interface DefaultStyles {
	bgColor: string;
	textColor: string;
	listItemHoverColor: string;
	listItemActiveColor: string;
}

export type ColorTones = Record<50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, string>;

export type ThemeColors = Record<Colors, string>;

export interface DefaultColors {
	green: ColorTones;
	gray: ColorTones;
	white: ColorTones;
	black: ColorTones;
	blue: ColorTones;
}

// Buttons
export interface ButtonThemeProps {
	textColor: string;
	bgColor: string;
	borderColor: string;
	hover: {
		textColor: string;
		bgColor: string;
		borderColor: string;
	};
	active: {
		textColor: string;
		bgColor: string;
		borderColor: string;
	};
	disabled: {
		textColor: string;
		bgColor: string;
		borderColor: string;
	};
}

export type ButtonThemes = Record<Colors, ButtonThemeProps>;

// Inputs
export interface InputThemeProps {
	color: string;
	placeholderColor: string;
	borderColor: string;
	labelColor: string;

	focused: {
		borderColor: string;
	};

	disbled: {
		color: string;
		borderColor: string;
		labelColor: string;
	};
}

// Checkbox
export interface CheckboxThemeProps {
	borderColor: string;
	labelColor: string;

	checked: {
		borderColor: string;
		markerColor: string;
		bgColor: string;
	};

	disabled: {
		labelColor: string;
		borderColor: string;

		checked: {
			borderColor: string;
			markerColor: string;
			bgColor: string;
		};
	};
}

// Toast
export interface ToastThemeProps {
	bgColor: string;
	color: string;
	borderColor: string;
}

// Datepicker
export interface DatepickerThemeProps {
	bgColor: string;
	color: string;
	selectedDate: {
		color: string;
		bgColor: string;
	};
	disabledDate: {
		color: string;
		bgColor: string;
	};
	availableDate: {
		color: string;
		bgColor: string;
	};
	shadow: string;
}
