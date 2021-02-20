import React, { useEffect } from "react";

import { Indicators } from "../components/container/Indicators";
import { Statistics } from "../components/container/Statistics";
import { CommonLayout } from "../components/layouts/CommonLayout";
import { BottomSheet } from "../components/fragments/BottomSheet";
import { observer } from "mobx-react";
import { useStores } from "../hooks/useStores";
import { FilterForm } from "../components/container/FilterForm";
import { fetchLatestTestBench } from "../services/api";

export const Dashboard = observer(() => {
  const { globalStore } = useStores();

  useEffect(() => {
    setupLatestTestbench();
  });

  const setupLatestTestbench = async () => {
    const latestTestBench = await fetchLatestTestBench();

    if (latestTestBench) {
      globalStore.setSelectedTestBenchId(latestTestBench.id);
    }
  };

  return (
    <>
      <CommonLayout>
        <Indicators />
        {globalStore.selectedTestBenchId && (
          <Statistics testBenchId={globalStore.selectedTestBenchId} />
        )}
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
