import { makeAutoObservable } from "mobx";
import { Instruction } from "../models/Instruction";

interface IManualManagerStore {
  instructions: Instruction[];
  selectedInstructionId?: string;
  selectedInstruction?: Instruction;
  addInstruction: (instruction: Instruction) => void;
  editInstruction: (instruction: Instruction) => void;
  deleteInstruction: (id: string) => void;
  setInstruction: (instructions: Instruction[]) => void;
  clearInstruction: () => void;
  setSelectedInstructionId: (id?: string) => void;
  switchInstructionStep: (oldStep: number, newStep: number) => void;
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
      this.instructions = this.instructions.sort((a, b) => a.step - b.step);
    },
    editInstruction(instruction) {
      const index = this.instructions.findIndex(
        ({ id }) => instruction.id === id
      );
      this.instructions[index] = instruction;
    },
    deleteInstruction(id) {
      const index = this.instructions.findIndex(
        (instruction) => instruction.id === id
      );
      this.instructions.splice(index, 1);
    },
    setInstruction(instructions) {
      this.instructions = instructions.sort((a, b) => a.step - b.step);
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
      this.instructions = this.instructions.sort((a, b) => a.step - b.step);
    },
  });
