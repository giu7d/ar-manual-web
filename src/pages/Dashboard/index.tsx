import React from "react";
import { useTheme } from "styled-components";

import { AppBar } from "../../components/AppBar";
import { ChartCard } from "../../components/Charts/ChartCard";
import { PlotFailureByTime } from "../../components/Charts/plots/PlotFailuresByTime";
import { ChartFilter } from "../../components/Charts/ChartFilter";
import { Indicator } from "../../components/Indicator";
import { SideScroll } from "../../components/SideScroll";
import { ITheme } from "../../theme";

import { ChartsWrapper, Wrapper } from "./styles";
import { PlotCommonFailures } from "../../components/Charts/plots/PlotCommonFailures";

import { CommonFailures, FailureXTimeData, Indicators } from "../../server";

interface IProps {}

export const Dashboard: React.FC<IProps> = (props) => {
  const theme = useTheme() as ITheme;

  return (
    <Wrapper>
      <AppBar />
      <SideScroll>
        {Indicators.map((item) => (
          <Indicator key={item.id} {...item} />
        ))}
      </SideScroll>
      <ChartsWrapper>
        <ChartFilter />
        <ChartCard title="Common Failures">
          <PlotCommonFailures data={CommonFailures} />
        </ChartCard>
        <ChartCard
          title={
            <>
              Failures <small>x</small> Time
            </>
          }
        >
          <PlotFailureByTime
            color={theme.colors.primary}
            data={FailureXTimeData}
          />
        </ChartCard>
      </ChartsWrapper>
    </Wrapper>
  );
};
