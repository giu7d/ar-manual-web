import { v4 } from "uuid";
import { Instruction } from "../models/Instruction";
import { Manual } from "../models/Manual";

export const CreateTestBenchAdapter = (manual: Manual) => {
  return {
    testBenchSerialNumber: manual.testBenchSerialNumber,
    componentSerialNumber: manual.componentSerialNumber,
    thumbnailSrc: manual.thumbnail?.src,
    cao: !manual.cao
      ? undefined
      : {
          description: manual.cao.description,
          items: manual.cao.items.map(({ id, ...item }) => item),
        },
    instructions: manual.instructions.map((instruction) => ({
      title: instruction.title,
      description: instruction.description,
      inspectionType: instruction.inspectionType,
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
    cao: !manual.cao
      ? undefined
      : {
          description: manual.cao.description,
          items: manual.cao.items,
        },
    instructions: manual.instructions.map((instruction) => ({
      id: instruction.id,
      title: instruction.title,
      description: instruction.description,
      step: instruction.step,
      inspectionType: instruction.inspectionType,
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

export const ShowTestBenchAdapter = (data: IShowTestBenchResponse): Manual => {
  return {
    id: data.id,
    componentSerialNumber: data.componentSerialNumber,
    testBenchSerialNumber: data.testBenchSerialNumber,
    thumbnail: {
      id: v4(),
      src: data.thumbnailSrc,
    },
    cao: data.cao,
    instructions: data.instructions.map(
      (instruction) =>
        new Instruction(
          {
            description: instruction.description,
            inspectionType: instruction.inspectionType,
            step: instruction.step,
            warnings: instruction.warning,
            title: instruction.title,
            images: instruction.sources
              .filter(({ type }) => type === "image")
              .map((src) => ({
                id: src.id,
                src: src.src,
              })),
            animations: instruction.sources
              .filter(({ type }) => type === "3D")
              .map((src) => ({
                id: src.id,
                src: src.src,
              })),
          },
          instruction.id
        )
    ),
  };
};
