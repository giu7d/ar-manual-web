import React, { useMemo } from "react";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

interface IFailureByTime {
  failures: number;
  date: string;
}

interface IProps {
  color?: string;
  data?: IFailureByTime[];
}

export const PlotFailureByTime: React.FC<IProps> = ({
  data = [],
  color = "#8884d8",
}) => {
  const innerData = useMemo<IFailureByTime[]>(() => [...data], [data]);

  const handleTickFormat = (data: string) => {
    const date = new Date(data);
    return `${date.getDay()}/${date.getMonth()}`;
  };

  return (
    <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
      <AreaChart data={innerData}>
        <defs>
          <linearGradient id="failure-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.8} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>{" "}
        <XAxis dataKey="date" tickFormatter={handleTickFormat} />
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
