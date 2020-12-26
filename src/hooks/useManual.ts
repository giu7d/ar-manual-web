import * as UploadFiles from "../services/UploadFiles";
import { createTestBench } from "../services/api";
import { Manual } from "../models/Manual";

const adaptPayload = (manual: Manual) => {
  return {
    testBenchSerialNumber: manual.testBenchSerialNumber,
    componentSerialNumber: manual.componentSerialNumber,
    thumbnailSrc: manual.thumbnail?.src,
    cao: {
      description: "hello world",
      items: [],
    },
    instructions: manual.instructions.map((instruction) => ({
      title: instruction.title,
      description: instruction.description,
      step: instruction.step,
      sources: [
        ...instruction.images.map((image) => ({
          type: "image",
          src: image.src,
        })),
        ...instruction.animations.map((animation) => ({
          type: "3D",
          src: animation.src,
        })),
      ],
    })),
  };
};

export const useManual = () => {
  const createManual = async (manual: Manual) => {
    try {
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
