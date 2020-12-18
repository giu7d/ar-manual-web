import { v4 as uuid } from "uuid";

export interface Warning {
  description: string;
}

export interface InstructionImageSource {
  id: string;
  src: string;
  file?: File;
}

export class Instruction {
  id!: string;

  title!: string;

  description!: string;

  step!: number;

  images!: InstructionImageSource[];

  animation!: string;

  warnings!: Warning[];

  constructor(props: Omit<Instruction, "id">, id?: string) {
    Object.assign(this, props);
    this.id = !id ? uuid() : id;
  }
}
