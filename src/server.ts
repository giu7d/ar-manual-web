interface IIndicator {
  id: string;
  title: string;
  value: string;
  color?:
    | "primary"
    | "secondary"
    | "danger"
    | "text"
    | "info"
    | "success"
    | "warn";
}

export const Indicators: IIndicator[] = [
  {
    id: "1",
    title: "Failures Today",
    value: "14",
    color: "primary",
  },
  {
    id: "2",
    title: "Most Failures Component",
    value: "1697135X",
    color: "danger",
  },
  {
    id: "3",
    title: "Manuals Available",
    value: "2",
    color: "text",
  },
];
