import React, { useCallback, useState } from "react";
import { observer } from "mobx-react";
import { Wrapper, ActionWrapper } from "./styles";
import { Typography } from "../../fragments/Typography";
import { FormInput } from "../../fragments/Form/FormInput";
import { FormTextEditor } from "../../fragments/Form/FormTextEditor";
import { FormUpload } from "../../fragments/Form/FormUpload";
import { NavigationButton } from "../../fragments/Buttons/NavigationButton";
import { useStores } from "../../../hooks/useStores";
import { Instruction, InstructionSource } from "../../../models/Instruction";
import { v4 as uuid } from "uuid";

export const InstructionForm = observer(() => {
  const { globalStore, manualManagerStore } = useStores();
  const [instruction, setInstruction] = useState(
    new Instruction({
      title: "",
      description: "",
      sources: [
        {
          id: uuid(),
          type: "AR",
          src: "",
        },
      ],
      warnings: [],
      step: manualManagerStore.instructions.length,
    })
  );

  const handleImageUploadRemove = useCallback(
    (id: string) => {
      const { sources } = instruction;
      const index = sources.findIndex((source) => source.id === id);

      if (index === -1) {
        return;
      }

      sources.splice(index, 1);

      setInstruction((state) => ({
        ...state,
        sources: [...sources],
      }));
    },
    [instruction]
  );

  const handleImageUpload = useCallback(async (files: File[]) => {
    const sources = files.map(
      (file) =>
        ({
          id: uuid(),
          type: "image",
          src: file.name,
          file,
        } as InstructionSource)
    );

    setInstruction((state) => ({
      ...state,
      sources: [...state.sources, ...sources],
    }));
  }, []);

  const handleInput = useCallback((key: string, value: string) => {
    setInstruction((state) => ({
      ...state,
      [key]: value,
    }));
  }, []);

  const handleAnimationInput = useCallback(
    (value: string) => {
      const { sources } = instruction;

      const index = sources.findIndex((source) => source.type === "AR");

      const source = sources.find((source) => source.type === "AR");

      if (index === -1 || !source) {
        return;
      }

      sources.splice(index, 1);
      sources.push({
        ...source,
        src: value,
      });

      setInstruction((state) => ({
        ...state,
        sources: [...sources],
      }));
    },
    [instruction]
  );

  const handleClose = () => {
    globalStore.setBottomSheet(false);
  };

  const handleSubmit = () => {
    console.log(instruction);
  };

  return (
    <>
      <Wrapper>
        <div className="header">
          <Typography.Title>Create Instruction</Typography.Title>
          <Typography.SubTitle>
            Complete the form below to create a new instruction.
          </Typography.SubTitle>
        </div>
        <div className="form">
          <FormInput
            label="Title"
            inputProps={{
              placeholder: "Instruction title",
              value: instruction.title,
              onChange: (e) => handleInput("title", e.target.value),
            }}
          />
          <FormTextEditor
            label="Description"
            inputProps={{
              placeholder: "Enter a description...",
              value: "",
              onChange: (e) => handleInput("description", e),
            }}
          />
        </div>
        <div className="form">
          <FormUpload
            label="Instruction Image"
            limit={3}
            files={instruction.sources.filter(({ type }) => type === "image")}
            onChange={handleImageUpload}
            onRemove={handleImageUploadRemove}
          />
          <FormInput
            label="Animation ID"
            inputProps={{
              placeholder:
                "Animation timeline identification. (Ex: Default,...)",
              onChange: (e) => handleAnimationInput(e.target.value),
            }}
          />
        </div>
      </Wrapper>
      <ActionWrapper>
        <NavigationButton onClick={handleClose}>Cancel</NavigationButton>
        <NavigationButton onClick={handleSubmit} selected>
          Save
        </NavigationButton>
      </ActionWrapper>
    </>
  );
});
