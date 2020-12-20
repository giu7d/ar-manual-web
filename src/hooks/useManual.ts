import { createTestBench } from "../services/api";
import { Manual } from "../models/Manual";
import * as UploadFiles from "../services/UploadFiles";

// Adapter
// CreateManual
const adaptPayload = (manual: Manual) => {
  return {
    testBenchSerialNumber: manual.testBenchSerialNumber,
    componentSerialNumber: manual.componentSerialNumber,
    thumbnailSrc: manual.thumbnail?.src,
    //modelSrc: manual.model?.src,
    cao: {
      description: "hello world",
      items: [],
    },
    instructions: manual.instructions.map((instruction) => ({
      description: instruction.description,
      step: instruction.step,
      sources: instruction.images.map((image) => ({
        type: "image",
        src: image.src,
      })),
      // warnings: [],
    })),
  };
};

export const useManual = (id?: string) => {
  const createManual = async (manual: Manual) => {
    try {
      if (id) throw new Error("Unable to create a duplicated manual!");

      const manualWithUploadedFiles = await UploadFiles.uploadManual(manual);
      const payload = adaptPayload(manualWithUploadedFiles);

      await createTestBench(payload);
      console.log("createManual", "ok");
    } catch (error) {
      console.log("createManual", "error", error);
    }
  };

  const editManual = async (manual: Partial<Manual>) => {
    console.log(manual);
  };

  return {
    createManual,
    editManual,
  };
};
