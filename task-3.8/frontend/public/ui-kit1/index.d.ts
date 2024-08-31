import { ButtonHTMLAttributes } from 'react';
import { default as default_2 } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';
import { ThemeContext } from 'styled-components';

export declare const Button: ForwardRefExoticComponent<ButtonHTMLAttributes<HTMLButtonElement> & KitButtonProps & RefAttributes<HTMLButtonElement>>;

export declare type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & KitButtonProps;

declare interface ButtonThemeProps {
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

declare type ButtonThemes = Record<Colors, ButtonThemeProps>;

export declare const Checkbox: ForwardRefExoticComponent<CheckboxHTMLAttrs & KitCheckboxProps & RefAttributes<HTMLInputElement>>;

declare type CheckboxHTMLAttrs = Omit<default_2.InputHTMLAttributes<HTMLInputElement>, 'type'>;

declare interface CheckboxThemeProps {
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

export declare const CheckIcon: default_2.FC<IconProps>;

export declare const ChevronLeftIcon: React.FC<IconProps>;

export declare const ChevronRightIcon: React.FC<IconProps>;

export declare const CloseIcon: default_2.FC<IconProps>;

declare type Colors = 'primary' | 'secondary';

declare type ColorTones = Record<50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, string>;

export declare const darkTheme: Theme;

declare interface DatepickerThemeProps {
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

declare interface DefaultColors {
    green: ColorTones;
    gray: ColorTones;
    white: ColorTones;
    black: ColorTones;
    blue: ColorTones;
}

declare interface DefaultStyles {
    bgColor: string;
    textColor: string;
    listItemHoverColor: string;
    listItemActiveColor: string;
}

export declare const DeleteIcon: default_2.FC<IconProps>;

export declare const EditIcon: default_2.FC<IconProps>;

export declare const EyeCloseIcon: React.FC<IconProps>;

export declare const EyeIcon: React.FC<IconProps>;

export declare const IconBtn: ForwardRefExoticComponent<ButtonHTMLAttributes<HTMLButtonElement> & KitIconButtonProps & RefAttributes<HTMLButtonElement>>;

declare type IconColors = 'inherit' | 'primary' | 'secondary' | string;

declare type IconProps = {
    color: IconColors;
};

declare interface InputThemeProps {
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

export declare type KitButtonProps = {
    color: Colors;
    startIcon?: ReactNode;
    children?: ReactNode;
    endIcon?: ReactNode;
};

declare type KitCheckboxProps = {
    label?: string;
};

declare type KitIconButtonProps = {
    icon: ReactNode;
};

export declare const lightTheme: Theme;

export declare const PlayIcon: default_2.FC<IconProps>;

export declare const PlusIcon: default_2.FC<IconProps>;

declare enum THEME {
    LIGHT = "light",
    DARK = "dark"
}

declare interface Theme {
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

declare type ThemeColors = Record<Colors, string>;

export { ThemeContext }

declare type Themes = Record<THEME, Theme>;

export declare const themes: Themes;

declare interface ToastThemeProps {
    bgColor: string;
    color: string;
    borderColor: string;
}

export { }
