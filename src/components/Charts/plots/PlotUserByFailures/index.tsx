import React, { useMemo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getColor, maskInitial } from "../../../../utils";

interface IPlotUserByFailuresProps {
  data?: {
    account: {
      id: string;
      fullName: string;
    };
    failures: number;
  }[];
}

export const PlotUserByFailures: React.FC<IPlotUserByFailuresProps> = ({
  data = [],
}) => {
  const innerData = useMemo(() => [...data], [data]);

  return (
    <ResponsiveContainer width="99%" aspect={1.5}>
      <BarChart data={innerData}>
        <XAxis
          dataKey="account.fullName"
          axisLine={false}
          tickLine={false}
          tickFormatter={maskInitial}
        />
        <YAxis dataKey="failures" width={24} axisLine={false} />
        <Tooltip />
        <CartesianGrid vertical={false} strokeDasharray="2 5" />
        <Bar
          isAnimationActive={false}
          dataKey="failures"
          radius={4}
          overflow="scroll"
        >
          {innerData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getColor() || "#b5b4e0"} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
