import { uploadFiles } from "./api";
import { FileSource, Instruction } from "../models/Instruction";
import { Manual } from "../models/Manual";

export const uploadThumbnail = async (thumbnail: FileSource) => {
  if (thumbnail.file) {
    const [response] = await uploadFiles("thumbnails", [thumbnail.file]);
    thumbnail.src = response.url;
  }

  return thumbnail;
};

export const uploadInstruction = async (instruction: Instruction) => {
  instruction.images = await Promise.all(
    instruction.images.map(async (image) => {
      if (image.file) {
        const [response] = await uploadFiles("instructions", [image.file]);
        image.src = response.url;
      }
      return image;
    })
  );

  instruction.animations = await Promise.all(
    instruction.animations.map(async (animation) => {
      if (animation.file) {
        const [response] = await uploadFiles("instructions", [animation.file]);
        animation.src = response.url;
      }
      return animation;
    })
  );

  return instruction;
};

export const uploadInstructions = async (instructions: Instruction[]) => {
  return await Promise.all(
    instructions.map((instruction) => uploadInstruction(instruction))
  );
};

export const uploadManual = async (manual: Manual) => {
  try {
    if (manual.thumbnail) {
      manual.thumbnail = await uploadThumbnail(manual.thumbnail);
    }

    manual.instructions = await uploadInstructions(manual.instructions);

    return manual;
  } catch (error) {
    console.log(error);
    throw new Error("Something happens in uploadManual");
  }
};
