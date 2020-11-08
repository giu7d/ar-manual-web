import React, { useEffect } from "react";

import { Indicators } from "../../components/container/Indicators";
import { Statistics } from "../../components/container/Statistics";

import { AppBar } from "../../components/fragments/AppBar";
import { login } from "../../services/api";
import { Wrapper } from "./styles";

export const Dashboard = () => {
  useEffect(() => {
    login();
  }, []);

  return (
    <>
      <AppBar />
      <Wrapper>
        <Indicators />
        <Statistics />
      </Wrapper>
    </>
  );
};
