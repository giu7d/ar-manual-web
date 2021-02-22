import React from "react";

interface ICommonFailuresLabelProps {
  x?: number;
  y?: number;
  value?: string | number;
}

export const CommonFailuresLabel: React.FC<ICommonFailuresLabelProps> = ({
  x = 0,
  y = 0,
  value = "",
}) => {
  return (
    <text
      x={x}
      y={y}
      dy={-5}
      fill="#333"
      opacity={0.75}
      fontWeight="400"
      fontSize={16}
    >
      {value}
    </text>
  );
};
