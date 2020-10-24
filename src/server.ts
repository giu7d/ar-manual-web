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
    value: "34",
    color: "text",
  },
];

export const FailureXTimeData = [
  {
    failures: 25,
    date: new Date(2020, 10, 2).toString(),
  },
  {
    failures: 15,
    date: new Date(2020, 10, 4).toString(),
  },
  {
    failures: 55,
    date: new Date(2020, 10, 5).toString(),
  },
  {
    failures: 3,
    date: new Date(2020, 10, 7).toString(),
  },
];

export const CommonFailures = [
  {
    failure: "surface deformation",
    quantity: 512,
    color: "#0070F3",
  },
  {
    failure: "grip",
    quantity: 256,
    color: "#FC0080",
  },
  {
    failure: "sharp edges",
    quantity: 128,
    color: "#79FCE0",
  },
  {
    failure: "material overlap",
    quantity: 256,
    color: "#FB5555",
  },
];
