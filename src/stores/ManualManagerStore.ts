import { makeAutoObservable } from "mobx";
import { Instruction } from "../models/Instruction";

interface IManualManagerStore {
  instructions: Instruction[];
  addInstruction: (instruction: Instruction) => void;
}

export const ManualManagerStore = () =>
  makeAutoObservable<IManualManagerStore>({
    instructions: [],
    addInstruction(instruction) {
      console.log(instruction);
      this.instructions.push(instruction);
      console.log(this.instructions);
    },
  });
