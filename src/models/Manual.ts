import { v4 as uuid } from "uuid";
import { FileSource, Instruction } from "./Instruction";

export class Manual {
  id!: string;

  testBenchSerialNumber!: string;

  componentSerialNumber!: string;

  thumbnail?: FileSource;

  cao?: {
    id: string;
    description: string;
    items: {
      id: string;
      description: string;
      frequency:
        | {
            series: string;
            reforce: string;
          }
        | string;
      method: string;
      conformity: string;
    }[];
  };

  instructions!: Instruction[];

  constructor(props: Omit<Manual, "id">, id?: string) {
    Object.assign(this, props);
    this.id = !id ? uuid() : id;
  }
}
