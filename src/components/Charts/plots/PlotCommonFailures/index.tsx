import React, { useMemo } from "react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  YAxis,
  XAxis,
  Cell,
  LabelList,
  LabelProps,
} from "recharts";

interface ICommonFailure {
  failure: string;
  quantity: number;
  color?: string;
}

interface IProps {
  data?: ICommonFailure[];
}

export const PlotCommonFailures: React.FC<IProps> = ({ data = [] }) => {
  const innerData = useMemo<ICommonFailure[]>(() => [...data], [data]);

  const renderCustomizedLabel = ({ x = 0, y = 0, value = "" }: LabelProps) => {
    return (
      <text
        x={x}
        y={y}
        dy={-8}
        fill="#333"
        opacity={0.75}
        fontWeight="400"
        fontSize={16}
      >
        {value}
      </text>
    );
  };

  const renderCustomizedQtd = ({
    x = 0,
    y = 0,
    width = 0,
    value = "",
  }: LabelProps) => {
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

  return (
    <ResponsiveContainer width="99%" aspect={1.5}>
      <BarChart layout="vertical" data={innerData}>
        <Bar
          isAnimationActive={false}
          dataKey="quantity"
          minPointSize={15}
          barSize={20}
          radius={4}
        >
          {innerData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color || "#413ea0"} />
          ))}
          <LabelList
            dataKey="failure"
            position="top"
            content={renderCustomizedLabel}
          />
          <LabelList
            dataKey="quantity"
            position="right"
            content={renderCustomizedQtd}
          />
        </Bar>
        <XAxis type="number" hide />
        <YAxis dataKey="failure" type="category" hide />
      </BarChart>
    </ResponsiveContainer>
  );
};
