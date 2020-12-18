import { v4 as uuid } from "uuid";

export interface Warning {
  description: string;
}

export interface InstructionSource {
  id: string;
  type: "image" | "video" | "AR";
  src: string;
  file?: File;
}

export class Instruction {
  id!: string;

  title!: string;

  description!: string;

  step!: number;

  sources!: InstructionSource[];

  warnings!: Warning[];

  constructor(props: Omit<Instruction, "id">, id?: string) {
    Object.assign(this, props);
    this.id = !id ? uuid() : id;
  }
}
