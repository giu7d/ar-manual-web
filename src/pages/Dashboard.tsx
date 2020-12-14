import React from "react";

import { Indicators } from "../components/container/Indicators";
import { Statistics } from "../components/container/Statistics";
import { CommonLayout } from "../components/layouts/CommonLayout";
import { BottomSheet } from "../components/fragments/BottomSheet";
import { observer } from "mobx-react";
import { useStores } from "../hooks/useStores";
import { FilterForm } from "../components/container/FilterForm";

export const Dashboard = observer(() => {
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
        <FilterForm />
      </BottomSheet>
    </>
  );
});
