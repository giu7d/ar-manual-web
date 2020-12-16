import React, { useEffect } from "react";

import { InstructionForm } from "../components/container/InstructionForm";
import { ManualForm } from "../components/container/ManualForm";
import { BottomSheet } from "../components/fragments/BottomSheet";
import { CommonLayout } from "../components/layouts/CommonLayout";
import { useStores } from "../hooks/useStores";

export const ManualManager = () => {
  const { globalStore } = useStores();

  useEffect(() => {
    return () => globalStore.setBottomSheet(false);
  });

  return (
    <>
      <CommonLayout>
        <ManualForm />
      </CommonLayout>
      <BottomSheet
        visible={globalStore.bottomSheet}
        onClose={() => globalStore.setBottomSheet(false)}
      >
        <InstructionForm />
      </BottomSheet>
    </>
  );
};
