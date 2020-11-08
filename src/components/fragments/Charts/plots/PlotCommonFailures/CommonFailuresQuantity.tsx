import React from "react";

interface ICommonFailuresQuantityProps {
  x?: number;
  y?: number;
  width?: number;
  value?: string | number;
}

export const CommonFailuresQuantity: React.FC<ICommonFailuresQuantityProps> = ({
  x = 0,
  y = 0,
  width = 0,
  value = "",
}) => {
  return (
    <text
      x={x}
      y={y}
      dy={15}
      dx={width + x}
      fill="#333"
      opacity={0.75}
      fontWeight="600"
      fontSize={14}
    >
      {value}
    </text>
  );
};
