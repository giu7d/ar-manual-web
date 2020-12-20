import * as Yup from "yup";

const FileSourceSchema = Yup.object().shape({
  id: Yup.string().required(),
  src: Yup.string().required(),
  file: Yup.object().nullable(),
});

export const InstructionSchema = Yup.object().shape({
  title: Yup.string().min(5).required(),
  description: Yup.string().min(24).required(),
  images: Yup.array(FileSourceSchema).min(1).max(3).required(),
  animation: Yup.string(),
  step: Yup.number().required(),
});
