import { v4 as uuid } from "uuid";
import { FileSource, Instruction } from "./Instruction";

export class Manual {
  id!: string;

  testBenchSerialNumber!: string;

  componentSerialNumber!: string;

  thumbnail?: FileSource;

  instructions!: Instruction[];

  constructor(props: Omit<Manual, "id">, id?: string) {
    Object.assign(this, props);
    this.id = !id ? uuid() : id;
  }
}
