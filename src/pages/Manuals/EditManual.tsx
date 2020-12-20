import React from "react";
import { observer } from "mobx-react";

import { useStores } from "../../hooks/useStores";
import { ManualForm } from "../../components/container/ManualForm";
import { BottomSheet } from "../../components/fragments/BottomSheet";
import { CommonLayout } from "../../components/layouts/CommonLayout";
import { InstructionForm } from "../../components/container/InstructionForm";
import { useParams } from "react-router-dom";
import { useTestBench } from "../../hooks/useTestBench";

export const EditManual = observer(() => {
  const param = useParams<{ id: string }>();
  const { globalStore, manualManagerStore } = useStores();
  const { manual, isLoading, isError } = useTestBench(param.id);

  if (isLoading || isError) {
    return <div>loading...</div>;
  }

  return (
    <>
      <CommonLayout>
        {console.log(manual)}
        <ManualForm externalManual={manual} />
      </CommonLayout>
      <BottomSheet
        visible={globalStore.bottomSheet}
        onClose={() => globalStore.setBottomSheet(false)}
      >
        <InstructionForm
          externalInstruction={manualManagerStore.selectedInstruction}
        />
      </BottomSheet>
    </>
  );
});
