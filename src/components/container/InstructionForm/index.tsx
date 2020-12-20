import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import { v4 as uuid } from "uuid";

import { Wrapper, ActionWrapper } from "./styles";
import { useStores } from "../../../hooks/useStores";
import { Typography } from "../../fragments/Typography";
import { FormInput } from "../../fragments/Form/FormInput";
import { FormUpload } from "../../fragments/Form/FormUpload";
import { FormTextEditor } from "../../fragments/Form/FormTextEditor";
import { NavigationButton } from "../../fragments/Buttons/NavigationButton";
import { Instruction, FileSource } from "../../../models/Instruction";
import { InstructionSchema } from "./validation";
import { ValidationError } from "yup";

const createNewInstruction = () =>
  new Instruction({
    title: "",
    description: "",
    images: [],
    animation: "",
    warnings: [],
    step: 0,
  });

interface IProps {
  externalInstruction?: Instruction;
}

export const InstructionForm: React.FC<IProps> = observer(
  ({ externalInstruction }) => {
    const { globalStore, manualManagerStore } = useStores();
    const [instruction, setInstruction] = useState(
      externalInstruction || createNewInstruction()
    );
    const [error, setError] = useState({
      title: undefined,
      description: undefined,
      images: undefined,
      animation: undefined,
    });

    useEffect(() => {
      setInstruction((state) => ({
        ...state,
        step: manualManagerStore.instructions.length + 1,
      }));
    }, [manualManagerStore.instructions]);

    const handleImageUpload = useCallback((files: File[]) => {
      const newImages: FileSource[] = files.map((file) => ({
        id: uuid(),
        src: file.name,
        file,
      }));

      setInstruction((state) => ({
        ...state,
        images: [...state.images, ...newImages],
      }));
    }, []);

    const handleImageRemove = useCallback(
      (id: string) => {
        const { images } = instruction;
        const index = images.findIndex((img) => img.id === id);

        if (index === -1) {
          return;
        }

        images.splice(index, 1);

        setInstruction((state) => ({
          ...state,
          images: [...images],
        }));
      },
      [instruction]
    );

    const handleInput = useCallback((key: string, value: string) => {
      setInstruction((state) => ({
        ...state,
        [key]: value,
      }));
    }, []);

    const handleClose = () => {
      globalStore.setBottomSheet(false);
    };

    const handleSubmit = async () => {
      setError({
        title: undefined,
        description: undefined,
        images: undefined,
        animation: undefined,
      });

      try {
        await InstructionSchema.validate(instruction, {
          abortEarly: false,
        });

        manualManagerStore.addInstruction(instruction);
        handleClose();
      } catch (error) {
        if (error instanceof ValidationError) {
          error.inner.forEach(({ path = "", message }) =>
            setError((state) => ({
              ...state,
              [path]: message,
            }))
          );
        }
      }
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
              error={error.title}
              inputProps={{
                placeholder: "Instruction title",
                value: instruction.title,
                onChange: (e) => handleInput("title", e.target.value),
              }}
            />
            <FormTextEditor
              label="Description"
              error={error.description}
              inputProps={{
                placeholder: "Enter a description...",
                defaultValue: instruction.description,
                onChange: (e) => handleInput("description", e),
              }}
            />
          </div>
          <div className="form">
            <FormUpload
              label="Instruction Image"
              error={error.images}
              limit={3}
              files={instruction.images}
              onChange={handleImageUpload}
              onRemove={handleImageRemove}
            />
            <FormInput
              label="Animation ID"
              error={error.animation}
              inputProps={{
                placeholder:
                  "Animation timeline identification. (Ex: Default,...)",
                value: instruction.animation,
                onChange: (e) => handleInput("animation", e.target.value),
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
  }
);
