import React from "react";
import { observer } from "mobx-react";

import { useStores } from "../../hooks/useStores";
import { ManualForm } from "../../components/container/ManualForm";
import { BottomSheet } from "../../components/fragments/BottomSheet";
import { CommonLayout } from "../../components/layouts/CommonLayout";
import { InstructionForm } from "../../components/container/InstructionForm";

export const CreateManual = observer(() => {
  const { globalStore } = useStores();

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
});
