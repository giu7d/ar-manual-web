import { Theme } from "./themes";

export const maskInitial = (content: string) => {
  return content.toUpperCase()[0];
};

export const maskDateDayAndMonth = (data: string) => {
  const date = new Date(data);
  const value = `${date.getDate()}/${date.getMonth() + 1}`;
  return value;
};

export const getColor = () => {
  const keys = ["primary", "secondary", "info", "success", "warn", "danger"];

  const index = Math.floor(Math.random() * keys.length);

  const selectedKey = keys[index] as
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warn"
    | "danger";

  return Theme.colors[selectedKey];
};
