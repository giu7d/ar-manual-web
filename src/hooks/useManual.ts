import * as UploadFiles from "../services/UploadFiles";
import { Manual } from "../models/Manual";
import { createTestBench, editTestBench } from "../services/api";
import {
  CreateTestBenchAdapter,
  ModifyTestBenchAdapter,
} from "../services/adapters";

export const useManual = () => {
  const createManual = async (manual: Manual) => {
    try {
      const manualWithUploadedFiles = await UploadFiles.uploadManual(manual);
      const payload = CreateTestBenchAdapter(manualWithUploadedFiles);

      await createTestBench(payload);
      console.log("createManual", "ok");
    } catch (error) {
      console.log("createManual", "error", error);
    }
  };

  const editManual = async (manual: Manual) => {
    try {
      const manualWithUploadedFiles = await UploadFiles.uploadManual(manual);
      const payload = ModifyTestBenchAdapter(manualWithUploadedFiles);

      await editTestBench(manual.id, payload);
      console.log("editManual", "ok");
    } catch (error) {
      console.log("editManual", "error", error);
    }
  };

  return {
    createManual,
    editManual,
  };
};
