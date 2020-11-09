import React, { useEffect } from "react";

import { Indicators } from "../../components/container/Indicators";
import { Statistics } from "../../components/container/Statistics";
import { login } from "../../services/api";
import { CommonLayout } from "../../components/layouts/CommonLayout";

export const Dashboard = () => {
  useEffect(() => {
    login();
  }, []);

  return (
    <CommonLayout>
      <Indicators />
      <Statistics />
    </CommonLayout>
  );
};
