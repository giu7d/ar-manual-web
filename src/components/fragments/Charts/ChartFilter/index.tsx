import React from "react";
import { FiSliders } from "react-icons/fi";

import { IconButton } from "../../Buttons/IconButton";
import { Wrapper } from "./styles";

interface IProps {
  filters?: {
    label: string;
    value: string;
  }[];
}

export const ChartFilter: React.FC<IProps> = ({ filters = [] }) => {
  return (
    <Wrapper>
      <IconButton>
        <FiSliders className="icon" />
      </IconButton>
      {filters.map((filter, index) => (
        <div key={index} className="filter">
          <h4>{filter.label}</h4>
          <p>{filter.value}</p>
        </div>
      ))}
    </Wrapper>
  );
};
