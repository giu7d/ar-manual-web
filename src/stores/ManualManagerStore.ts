import { makeAutoObservable } from "mobx";
import { Instruction } from "../models/Instruction";

interface IManualManagerStore {
  instructions: Instruction[];
  setInstruction: (instructions: Instruction[]) => void;
}

export const ManualManagerStore = () =>
  makeAutoObservable<IManualManagerStore>({
    instructions: [],
    setInstruction(instructions) {
      this.instructions = instructions;
    },
  });
