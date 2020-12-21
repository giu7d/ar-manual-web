import { makeAutoObservable } from "mobx";
import { Instruction } from "../models/Instruction";

interface IManualManagerStore {
  instructions: Instruction[];
  selectedInstructionId?: string;
  selectedInstruction?: Instruction;
  addInstruction: (instruction: Instruction) => void;
  editInstruction: (instruction: Instruction) => void;
  setInstruction: (instructions: Instruction[]) => void;
  switchInstructionStep: (oldStep: number, newStep: number) => void;
  clearInstruction: () => void;
  setSelectedInstructionId: (id: string) => void;
}

export const ManualManagerStore = () =>
  makeAutoObservable<IManualManagerStore>({
    instructions: [],
    selectedInstructionId: undefined,
    get selectedInstruction() {
      return this.instructions.find(
        (item: { id: string | undefined }) =>
          item.id === this.selectedInstructionId
      );
    },
    setSelectedInstructionId(id) {
      this.selectedInstructionId = id;
    },
    addInstruction(instruction) {
      this.instructions.push(instruction);
    },
    editInstruction(instruction) {
      const index = this.instructions.findIndex(
        ({ id }) => instruction.id === id
      );
      this.instructions[index] = instruction;
    },
    setInstruction(instructions) {
      this.instructions = instructions;
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
