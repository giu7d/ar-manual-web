import React from "react";
import { useTheme } from "styled-components";

import { useStatistics } from "../../../hooks/useStatistics";
import { ITheme } from "../../../theme";
import { ChartCard } from "../../Charts/ChartCard";
import { ChartFilter } from "../../Charts/ChartFilter";
import { PlotCommonFailures } from "../../Charts/plots/PlotCommonFailures";
import { PlotFailureByTime } from "../../Charts/plots/PlotFailuresByTime";
import { PlotUserByFailures } from "../../Charts/plots/PlotUserByFailures";
import { CardShimmer } from "../../Shimmer/CardShimmer";
import { ChartsWrapper, Wrapper } from "./styles";

export const Statistics = () => {
  const theme = useTheme() as ITheme;

  const { statistics, isLoading, isError } = useStatistics(
    "72c515f7-3fea-426e-88a9-870aa659a1d2"
  );

  if (isLoading || isError) {
    return (
      <Wrapper>
        <ChartsWrapper>
          <CardShimmer />
          <CardShimmer />
          <CardShimmer />
          <CardShimmer />
        </ChartsWrapper>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <ChartFilter
        filters={[
          { label: "Components", value: "1697135X" },
          { label: "Period", value: "2020" },
        ]}
      />
      <ChartsWrapper>
        <ChartCard title="Common Failures">
          <PlotCommonFailures
            data={statistics.commonFailures
              .sort((a, b) => b.qtd - a.qtd)
              .slice(0, 5)}
          />
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
            data={statistics.failuresByTime}
          />
        </ChartCard>
        <ChartCard
          title={
            <>
              Failures <small>x</small> User
            </>
          }
        >
          <PlotUserByFailures data={statistics.failuresByUsers} />
        </ChartCard>
      </ChartsWrapper>
    </Wrapper>
  );
};
