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
import { getColor } from "../../../../../utils";

import { CommonFailuresLabel } from "./CommonFailuresLabel";
import { CommonFailuresQuantity } from "./CommonFailuresQuantity";

interface IProps {
  data?: {
    failure: string;
    qtd: number;
  }[];
}

export const PlotCommonFailures: React.FC<IProps> = ({ data = [] }) => {
  const innerData = useMemo(() => [...data], [data]);

  return (
    <ResponsiveContainer width="99%" aspect={1.5}>
      <BarChart layout="vertical" margin={{ top: 14 }} data={innerData}>
        <Bar
          isAnimationActive={false}
          dataKey="qtd"
          barSize={20}
          radius={4}
          style={{ margin: 14 }}
        >
          {innerData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getColor() || "#413ea0"} />
          ))}
          <LabelList
            dataKey="failure"
            position="top"
            content={(label: LabelProps) => <CommonFailuresLabel {...label} />}
          />
          <LabelList
            dataKey="qtd"
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
