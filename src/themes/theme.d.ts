type ITheme = {
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
};

const colors = [
  "primary",
  "secondary",
  "text",
  "background",
  "foreground",
  "info",
  "success",
  "warn",
  "danger",
] as const;

type IThemeColors = typeof colors[number];
