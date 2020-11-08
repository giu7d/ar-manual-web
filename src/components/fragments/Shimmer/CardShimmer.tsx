import React from "react";
import { Shimmer } from ".";
import { ChartCard } from "../Charts/ChartCard";

export const CardShimmer = () => {
  return (
    <ChartCard
      title={
        <>
          <Shimmer
            style={{
              width: 48,
              height: 48,
              borderRadius: 48,
            }}
          />
          <Shimmer
            style={{
              width: "50%",
              height: 48,
              borderRadius: 8,
            }}
          />
        </>
      }
    >
      <>
        <Shimmer
          style={{
            width: "75%",
            height: 24,
            borderRadius: 8,
            margin: 8,
          }}
        />
        <Shimmer
          style={{
            width: "50%",
            height: 24,
            borderRadius: 8,
            margin: 8,
          }}
        />
        <Shimmer
          style={{
            width: "65%",
            height: 24,
            borderRadius: 8,
            margin: 8,
          }}
        />
      </>
    </ChartCard>
  );
};
