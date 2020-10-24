import React from "react";

import { Wrapper } from "./styles";

interface IProps {
  title: string | JSX.Element;
  children: JSX.Element;
}

export const ChartCard: React.FC<IProps> = ({ title, children }) => {
  return (
    <Wrapper>
      <h3 className="header">{title}</h3>
      <div className="content">{children}</div>
    </Wrapper>
  );
};
