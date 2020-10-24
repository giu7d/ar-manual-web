import React from "react";
import { FiSliders } from "react-icons/fi";

import { IconButton } from "../../Buttons/IconButton";
import { Wrapper } from "./styles";

interface IProps {}

export const ChartFilter: React.FC<IProps> = (props) => {
  return (
    <Wrapper>
      <IconButton>
        <FiSliders className="icon" />
      </IconButton>
      <div className="filter">
        <h4>Component</h4>
        <p>1697135X</p>
      </div>
      <div className="filter">
        <h4>Period</h4>
        <p>October, 2020</p>
      </div>
    </Wrapper>
  );
};
