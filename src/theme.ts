export interface ITheme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    text: string;
    background: string;
    foreground: string;
    info: string;
    success: string;
    warn: string;
    danger: string;
  };
  font: {
    size: number;
    family: string;
  };
  roundness: number;
}

export interface IThemeCustom {
  name?: string;
  colors?: {
    primary?: string;
    secondary?: string;
    text?: string;
    background?: string;
    foreground?: string;
    info?: string;
    success?: string;
    warn?: string;
    danger?: string;
  };
  font?: {
    size?: number;
    family?: string;
  };
  roundness?: number;
}

export const Theme: ITheme = {
  name: "default",
  colors: {
    primary: "#0070F3",
    secondary: "#7828C8",
    text: "#333333",
    background: "#f5f5f5",
    foreground: "#FFFFFF",
    info: "#FC0080",
    success: "#79FCE0",
    warn: "#F4A623",
    danger: "#FB5555",
  },
  font: {
    size: 14,
    family: `"OpenSans-Regular", Helvetica, sans-serif`,
  },
  roundness: 8,
};
