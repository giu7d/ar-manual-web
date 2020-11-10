import React from "react";
import { useTheme } from "styled-components";

import { ChartCard } from "../../fragments/Charts/ChartCard";
import { ChartFilter } from "../../fragments/Charts/ChartFilter";
import { PlotCommonFailures } from "../../fragments/Charts/plots/PlotCommonFailures";
import { PlotFailureByTime } from "../../fragments/Charts/plots/PlotFailuresByTime";
import { PlotUserByFailures } from "../../fragments/Charts/plots/PlotUserByFailures";
import { CardShimmer } from "../../fragments/Shimmer/CardShimmer";
import { useStatistics } from "../../../hooks/useStatistics";
import { ChartsWrapper, Wrapper } from "./styles";
import { useStores } from "../../../hooks/useStores";
import { observer } from "mobx-react";

export const Statistics = observer(() => {
  const theme = useTheme() as ITheme;
  const { globalStore } = useStores();
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
        onClick={() => globalStore.setBottomSheet(true)}
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
});
