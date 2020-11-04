import React, { useEffect } from "react";

import { Indicators } from "../../components/container/Indicators";
import { Statistics } from "../../components/container/Statistics";

import { AppBar } from "../../components/AppBar";
import { ChartFilter } from "../../components/Charts/ChartFilter";
import { login } from "../../services/api";
import { ChartsWrapper, Wrapper } from "./styles";

export const Dashboard = () => {
  useEffect(() => {
    login();
  }, []);

  return (
    <>
      <AppBar />
      <Wrapper>
        <Indicators />
        <ChartsWrapper>
          <ChartFilter
            filters={[
              { label: "Components", value: "1697135X" },
              { label: "Period", value: "2020" },
            ]}
          />
          <Statistics />
        </ChartsWrapper>
      </Wrapper>
    </>
  );
};
