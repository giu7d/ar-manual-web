import React from "react";

import { Indicator } from "../../fragments/Indicator";
import { SideScroll } from "../../fragments/SideScroll";
import { IndicatorsShimmer } from "../../fragments/Shimmer/IndicatorsShimmer";
import { useStatistics } from "../../../hooks/useStatistics";
import { Indicators as data } from "../../../server";

export const Indicators = () => {
  const { isLoading, isError } = useStatistics(
    "72c515f7-3fea-426e-88a9-870aa659a1d2"
  );

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
};
