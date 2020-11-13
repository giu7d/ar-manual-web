import React from "react";
import { observer } from "mobx-react";

import { Indicator } from "../../fragments/Indicator";
import { SideScroll } from "../../fragments/SideScroll";
import { IndicatorsShimmer } from "../../fragments/Shimmer/IndicatorsShimmer";
import { useStatistics } from "../../../hooks/useStatistics";
import { Indicators as data } from "../../../server";
import { useStores } from "../../../hooks/useStores";

export const Indicators = observer(() => {
  const { globalStore } = useStores();
  const { isLoading, isError } = useStatistics(globalStore.selectedTestBenchId);

  if (isLoading || isError) {
    return <IndicatorsShimmer />;
  }

  return (
    <SideScroll>
      {data.map((item) => (
        <Indicator key={item.id} {...item} />
      ))}
    </SideScroll>
  );
});
