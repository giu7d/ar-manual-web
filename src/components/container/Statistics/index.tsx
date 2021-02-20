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
import { Warning } from "../../fragments/Warning";
import { useTestBench } from "../../../hooks/useTestBench";

interface IStatistics {
  testBenchId: string;
}

export const Statistics: React.FC<IStatistics> = observer(({ testBenchId }) => {
  const theme = useTheme();
  const { globalStore } = useStores();
  const testBench = useTestBench(testBenchId);
  const { statistics, isLoading, isError } = useStatistics(testBenchId);

  if (isError || testBench.isError) {
    return (
      <Warning
        title="Error on load statistics!"
        description={isError.message || testBench.isError.message}
      />
    );
  }

  if (isLoading || testBench.isLoading || !testBench.manual) {
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
          {
            label: "Component",
            value: testBench.manual.componentSerialNumber.toUpperCase(),
          },
        ]}
      />
      <ChartsWrapper>
        {statistics.commonFailures.length !== 0 && (
          <ChartCard title="Common Failures">
            <PlotCommonFailures
              data={statistics.commonFailures
                .sort((a, b) => b.qtd - a.qtd)
                .slice(0, 5)}
            />
          </ChartCard>
        )}
        {statistics.failuresByTime.length !== 0 && (
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
        )}
        {statistics.failuresByUsers.length !== 0 && (
          <ChartCard
            title={
              <>
                Failures <small>x</small> User
              </>
            }
          >
            <PlotUserByFailures data={statistics.failuresByUsers} />
          </ChartCard>
        )}

        {statistics.commonFailures.length === 0 &&
          statistics.failuresByTime.length === 0 &&
          statistics.failuresByUsers.length === 0 && (
            <div>
              <Warning
                title="No Statistics Available!"
                description={`We were not able to provide statistics for the ${testBench.manual.componentSerialNumber.toUpperCase()} component! Make sure that at least two analysis have been made.`}
                hideIcon
              />
            </div>
          )}
      </ChartsWrapper>
    </Wrapper>
  );
});
