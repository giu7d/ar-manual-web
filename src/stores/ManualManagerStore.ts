import { makeAutoObservable } from "mobx";
import { Instruction } from "../models/Instruction";

interface IManualManagerStore {
  instructions: Instruction[];
  addInstruction: (instruction: Instruction) => void;
  switchInstructionStep: (oldStep: number, newStep: number) => void;
  clearInstruction: () => void;
}

export const ManualManagerStore = () =>
  makeAutoObservable<IManualManagerStore>({
    instructions: [],
    addInstruction(instruction) {
      this.instructions.push(instruction);
    },
    clearInstruction() {
      this.instructions = [];
    },
    switchInstructionStep(oldStep, newStep) {
      const currentInstructionIndex = this.instructions.findIndex(
        (instruction) => instruction.step === oldStep
      );

      const replacedInstructionIndex = this.instructions.findIndex(
        (instruction) => instruction.step === newStep
      );

      if (currentInstructionIndex === -1 || replacedInstructionIndex === -1) {
        return;
      }

      this.instructions[currentInstructionIndex].step = newStep;
      this.instructions[replacedInstructionIndex].step = oldStep;
    },
  });
