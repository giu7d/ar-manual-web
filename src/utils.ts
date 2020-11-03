import { Theme } from "./theme";

export const maskInitial = (content: string) => {
  return content.toUpperCase()[0];
};

export const maskDateDayAndMonth = (data: string) => {
  const date = new Date(data);
  return `${date.getDay()}/${date.getMonth()}`;
};

export const getColor = () => {
  const keys = [
    "primary",
    "secondary",
    "text",
    "info",
    "success",
    "warn",
    "danger",
  ];

  const index = Math.floor(Math.random() * keys.length);

  const selectedKey = keys[index] as
    | "primary"
    | "secondary"
    | "text"
    | "info"
    | "success"
    | "warn"
    | "danger";

  return Theme.colors[selectedKey];
};
