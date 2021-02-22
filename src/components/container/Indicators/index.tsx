import { v4 } from "uuid";
import React from "react";
import { observer } from "mobx-react";
import { useTheme } from "styled-components";

import { Indicator } from "../../fragments/Indicator";
import { SideScroll } from "../../fragments/SideScroll";
import { IndicatorsShimmer } from "../../fragments/Shimmer/IndicatorsShimmer";
import { Warning } from "../../fragments/Warning";
import { useStatistics } from "../../../hooks/useStatistics";
import { useTestBenches } from "../../../hooks/useTestBenches";

interface IIndicators {
  testBenchId: string;
}

export const Indicators: React.FC<IIndicators> = observer(({ testBenchId }) => {
  const { statistics, isLoading, isError } = useStatistics(testBenchId);
  const { testBenches } = useTestBenches();
  const theme = useTheme();

  if (isError) {
    return (
      <Warning
        title="Error while loading performance indicators!"
        description={isError.message}
      />
    );
  }

  if (isLoading) {
    return <IndicatorsShimmer />;
  }

  return (
    <SideScroll>
      {[
        {
          id: v4(),
          title: "Failures Today",
          value: statistics.failuresToday.toString(),
          color: theme.colors.primary,
        },
        {
          id: v4(),
          title: "Most Failures Component",
          value: statistics.componentMostUsed.toString(),
          color: theme.colors.danger,
        },
        {
          id: v4(),
          title: "Manuals Available",
          value: testBenches.length.toString(),
          color: theme.colors.text,
        },
      ].map((item) => (
        <Indicator key={item.id} {...item} />
      ))}
    </SideScroll>
  );
});
