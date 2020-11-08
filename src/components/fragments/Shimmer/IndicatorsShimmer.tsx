import React from "react";
import { Shimmer } from ".";
import { SideScroll } from "../SideScroll";

export const IndicatorsShimmer = () => {
  return (
    <SideScroll>
      <Shimmer
        style={{ width: 150, height: 100, borderRadius: 8, margin: 14 }}
      />
      <Shimmer
        style={{ width: 150, height: 100, borderRadius: 8, margin: 14 }}
      />
      <Shimmer
        style={{ width: 150, height: 100, borderRadius: 8, margin: 14 }}
      />
    </SideScroll>
  );
};
