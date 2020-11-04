import React, { useEffect } from "react";
import { useTheme } from "styled-components";

import { AppBar } from "../../components/AppBar";
import { ChartCard } from "../../components/Charts/ChartCard";
import { PlotFailureByTime } from "../../components/Charts/plots/PlotFailuresByTime";
import { ChartFilter } from "../../components/Charts/ChartFilter";
import { Indicator } from "../../components/Indicator";
import { PlotCommonFailures } from "../../components/Charts/plots/PlotCommonFailures";
import { PlotUserByFailures } from "../../components/Charts/plots/PlotUserByFailures";
import { SideScroll } from "../../components/SideScroll";
import { useStatistics } from "../../hooks/useStatistics";
import { login } from "../../services/api";
import { ITheme } from "../../theme";
import { Indicators } from "../../server";
import { ChartsWrapper, ChardsFlexWrapper, Wrapper } from "./styles";
import { CardShimmer } from "../../components/Shimmer/CardShimmer";
import { IndicatorsShimmer } from "../../components/Shimmer/IndicatorsShimmer";

export const Dashboard = () => {
  const theme = useTheme() as ITheme;

  const { statistics, isLoading, isError } = useStatistics(
    "72c515f7-3fea-426e-88a9-870aa659a1d2"
  );

  useEffect(() => {
    login();
  }, []);

  if (isLoading || isError) {
    return (
      <>
        <AppBar />
        <Wrapper>
          <IndicatorsShimmer />
          <ChartsWrapper>
            <CardShimmer />
          </ChartsWrapper>
        </Wrapper>
      </>
    );
  }

  return (
    <>
      <AppBar />
      <Wrapper>
        <SideScroll>
          {Indicators.map((item) => (
            <Indicator key={item.id} {...item} />
          ))}
        </SideScroll>
        <ChartsWrapper>
          <ChartFilter
            filters={[
              { label: "Components", value: "1697135X" },
              { label: "Period", value: "2020" },
            ]}
          />
          <ChardsFlexWrapper>
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
          </ChardsFlexWrapper>
        </ChartsWrapper>
      </Wrapper>
    </>
  );
};
