import React, { useEffect } from "react";

import { Indicators } from "../../components/container/Indicators";
import { Statistics } from "../../components/container/Statistics";
import { login } from "../../services/api";
import { CommonLayout } from "../../components/layouts/CommonLayout";
import { BottomSheet } from "../../components/fragments/BottomSheet";
import { observer } from "mobx-react";
import { useStores } from "../../hooks/useStores";

export const Dashboard = observer(() => {
  useEffect(() => {
    login();
  }, []);

  const { globalStore } = useStores();

  return (
    <>
      <CommonLayout>
        <Indicators />
        <Statistics />
      </CommonLayout>
      <BottomSheet
        visible={globalStore.bottomSheet}
        onClose={() => globalStore.setBottomSheet(false)}
      >
        Hello World
      </BottomSheet>
    </>
  );
});
