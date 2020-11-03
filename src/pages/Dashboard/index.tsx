import React from "react";
import { useTheme } from "styled-components";

import { AppBar } from "../../components/AppBar";
import { ChartCard } from "../../components/Charts/ChartCard";
import { PlotFailureByTime } from "../../components/Charts/plots/PlotFailuresByTime";
import { ChartFilter } from "../../components/Charts/ChartFilter";
import { Indicator } from "../../components/Indicator";
import { ITheme } from "../../theme";
import { PlotCommonFailures } from "../../components/Charts/plots/PlotCommonFailures";
import { PlotUserByFailures } from "../../components/Charts/plots/PlotUserByFailures";
import { CommonFailures, FailureXTimeData, Indicators } from "../../server";
import { ChartsWrapper, ChardsFlexWrapper, Wrapper } from "./styles";
import { SideScroll } from "../../components/SideScroll";

export const Dashboard = () => {
  const theme = useTheme() as ITheme;

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
          <ChartFilter />
          <ChardsFlexWrapper>
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
            <ChartCard
              title={
                <>
                  Failures <small>x</small> User
                </>
              }
            >
              <PlotUserByFailures
                data={[
                  { failures: 20, user: { initial: "l", name: "lorem ipsum" } },
                  {
                    failures: 10,
                    user: { initial: "g", name: "giuseppe setem" },
                  },
                  { failures: 5, user: { initial: "a", name: "another user" } },
                  { failures: 2, user: { initial: "w", name: "wagner ipsum" } },
                ]}
              />
            </ChartCard>
          </ChardsFlexWrapper>
        </ChartsWrapper>
      </Wrapper>
    </>
  );
};
