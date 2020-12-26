import * as Yup from "yup";
import {
  FileSourceSchema,
  InstructionSchema,
} from "../InstructionForm/validation";

export const ManualSchema = Yup.object().shape({
  componentSerialNumber: Yup.string().min(4).required(),
  testBenchSerialNumber: Yup.string().min(4).required(),
  instructions: Yup.array(InstructionSchema).min(1).required(),
  thumbnail: FileSourceSchema.required(),
});
