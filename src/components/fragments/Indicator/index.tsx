import React from "react";
import { Wrapper } from "./styles";

interface IProps {
  title: string;
  value: string;
  color?: string;
}

export const Indicator: React.FC<IProps> = ({ title, value, color }) => {
  return (
    <Wrapper color={color}>
      <h3>{title}</h3>
      <p className={value.length > 5 ? "small" : ""}>{value}</p>
    </Wrapper>
  );
};
