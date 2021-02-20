import { v4 } from "uuid";
import React from "react";
import { observer } from "mobx-react";
import { useTheme } from "styled-components";

import { Indicator } from "../../fragments/Indicator";
import { SideScroll } from "../../fragments/SideScroll";
import { IndicatorsShimmer } from "../../fragments/Shimmer/IndicatorsShimmer";
import { Warning } from "../../fragments/Warning";
import { useTestBenches } from "../../../hooks/useTestBenches";

export const Indicators: React.FC = observer(() => {
  const { isLoading, isError } = useTestBenches();
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
          value: "14",
          color: theme.colors.primary,
        },
        {
          id: v4(),
          title: "Most Failures Component",
          value: "1697135X",
          color: theme.colors.danger,
        },
        {
          id: v4(),
          title: "Manuals Available",
          value: "2",
          color: theme.colors.text,
        },
      ].map((item) => (
        <Indicator key={item.id} {...item} />
      ))}
    </SideScroll>
  );
});
