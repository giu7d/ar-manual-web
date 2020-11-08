import React, { useMemo } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

import { maskDateDayAndMonth } from "../../../../../utils";

interface IPlotFailureByTimeProps {
  color?: string;
  data?: {
    failures: number;
    timestamp: string;
  }[];
}

export const PlotFailureByTime: React.FC<IPlotFailureByTimeProps> = ({
  data = [],
  color = "#8884d8",
}) => {
  const innerData = useMemo(() => [...data], [data]);

  return (
    <ResponsiveContainer width="99%" aspect={1.5}>
      <AreaChart data={innerData}>
        <defs>
          <linearGradient id="failure-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.8} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="timestamp"
          axisLine={false}
          tickFormatter={maskDateDayAndMonth}
        />
        <CartesianGrid horizontal={false} strokeDasharray="2 5" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="failures"
          stroke={color}
          fillOpacity={1}
          fill="url(#failure-area)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
