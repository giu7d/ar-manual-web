import React, { useEffect } from "react";

import { Indicators } from "../../components/container/Indicators";
import { SideBar } from "../../components/container/SideBar";
import { Statistics } from "../../components/container/Statistics";
import { AppBar } from "../../components/container/AppBar";
import { login } from "../../services/api";
import { Wrapper, InnerWrapper } from "./styles";

export const Dashboard = () => {
  useEffect(() => {
    login();
  }, []);

  return (
    <Wrapper>
      <SideBar />
      <InnerWrapper>
        <AppBar />
        <Indicators />
        <Statistics />
      </InnerWrapper>
    </Wrapper>
  );
};
