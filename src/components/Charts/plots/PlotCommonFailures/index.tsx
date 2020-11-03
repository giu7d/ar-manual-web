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

import { CommonFailuresLabel } from "./CommonFailuresLabel";
import { CommonFailuresQuantity } from "./CommonFailuresQuantity";

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
            content={(label: LabelProps) => <CommonFailuresLabel {...label} />}
          />
          <LabelList
            dataKey="quantity"
            position="right"
            content={(label: LabelProps) => (
              <CommonFailuresQuantity {...label} />
            )}
          />
        </Bar>
        <XAxis type="number" hide />
        <YAxis dataKey="failure" type="category" hide />
      </BarChart>
    </ResponsiveContainer>
  );
};
