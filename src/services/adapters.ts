import { Manual } from "../models/Manual";

export const CreateTestBenchAdapter = (manual: Manual) => {
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

export const ModifyTestBenchAdapter = (manual: Manual) => {
  return {
    testBenchSerialNumber: manual.testBenchSerialNumber,
    componentSerialNumber: manual.componentSerialNumber,
    thumbnailSrc: manual.thumbnail?.src,
    cao: {
      description: "hello world",
      items: [],
    },
    instructions: manual.instructions.map((instruction) => ({
      id: instruction.id,
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
