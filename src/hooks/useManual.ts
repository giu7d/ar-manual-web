import * as UploadFiles from "../services/UploadFiles";
import { Manual } from "../models/Manual";
import {
  createTestBench,
  deleteTestBench,
  editTestBench,
  fetchTestBench,
} from "../services/api";
import {
  CreateTestBenchAdapter,
  ModifyTestBenchAdapter,
  ShowTestBenchAdapter,
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

  const duplicateManual = async (id: string) => {
    try {
      const testBench = await fetchTestBench(id);

      const originalManual = ShowTestBenchAdapter(testBench);

      console.log(originalManual);

      const manual = new Manual({
        ...originalManual,
        componentSerialNumber: originalManual.componentSerialNumber + "_copy",
        testBenchSerialNumber: originalManual.componentSerialNumber + "_copy",
      });

      const payload = CreateTestBenchAdapter(manual);
      await createTestBench(payload);
      console.log("duplicateManual", "ok");
    } catch (error) {
      console.log("duplicateManual", "error", error);
    }
  };

  const deleteManual = async (id: string) => {
    try {
      await deleteTestBench(id);
      console.log("deleteManual", "ok");
    } catch (error) {
      console.log("deleteManual", "error", error);
    }
  };

  return {
    createManual,
    editManual,
    deleteManual,
    duplicateManual,
  };
};
