import React from "react";
import { Wrapper } from "./styles";

interface IProps {
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

export const Indicator: React.FC<IProps> = ({
  title,
  value,
  color = "primary",
}) => {
  return (
    <Wrapper color={color}>
      <h3>{title}</h3>
      <p className={value.length > 5 ? "small" : ""}>{value}</p>
    </Wrapper>
  );
};
