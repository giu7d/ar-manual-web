import React, { FormEvent, useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import { v4 as uuid } from "uuid";

import { Wrapper, ActionWrapper } from "./styles";
import { useStores } from "../../../hooks/useStores";
import { Typography } from "../../fragments/Typography";
import { FormInput } from "../../fragments/Form/FormInput";
import { FormUpload } from "../../fragments/Form/FormUpload";
import { FormTextEditor } from "../../fragments/Form/FormTextEditor";
import { NavigationButton } from "../../fragments/Buttons/NavigationButton";
import { Instruction } from "../../../models/Instruction";
import { InstructionSchema } from "./validation";
import { ValidationError } from "yup";

const createNewInstruction = () =>
  new Instruction({
    title: "",
    description: "",
    images: [],
    animations: [],
    warnings: [],
    step: 0,
  });

const createEmptyError = () => ({
  title: undefined,
  description: undefined,
  images: undefined,
  animations: undefined,
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
    const [error, setError] = useState(createEmptyError());

    useEffect(() => {
      if (!externalInstruction) {
        setInstruction((state) => ({
          ...state,
          step: manualManagerStore.instructions.length + 1,
        }));
      }
    }, [externalInstruction, manualManagerStore.instructions]);

    const handleInput = useCallback(
      (key: keyof Instruction, value: string | File[]) => {
        if (
          value instanceof Array &&
          (key === "animations" || key === "images")
        ) {
          const files = value.map((file: File) => ({
            id: uuid(),
            src: file.name,
            file,
          }));

          return setInstruction((state) => ({
            ...state,
            [key]: [...state[key], ...files],
          }));
        }

        return setInstruction((state) => ({
          ...state,
          [key]: value,
        }));
      },
      []
    );

    const handleRemove = useCallback((key: "animations" | "images") => {
      setInstruction((state) => {
        return {
          ...state,
          [key]: [],
        };
      });
    }, []);

    const handleClose = () => {
      globalStore.setBottomSheet(false);
    };

    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      setError(createEmptyError());

      try {
        await InstructionSchema.validate(instruction, {
          abortEarly: false,
        });

        if (!externalInstruction) {
          manualManagerStore.addInstruction(instruction);
        } else {
          manualManagerStore.editInstruction(instruction);
        }

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
      <form onSubmit={handleSubmit}>
        <Wrapper>
          <div className="header">
            <Typography.Title>
              {!externalInstruction ? "Create" : "Edit"} Instruction
            </Typography.Title>
            <Typography.SubTitle>
              Complete the form below to create a new instruction.
            </Typography.SubTitle>
          </div>
          <div className="form">
            <FormInput
              required
              label="Title"
              error={error.title}
              inputProps={{
                placeholder: "Instruction title",
                value: instruction.title,
                onChange: (e) => handleInput("title", e.target.value),
              }}
            />
            <FormTextEditor
              required
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
              required
              label="Instruction Image"
              subLabel="Add instruction image in .png or .jpeg format."
              error={error.images}
              limit={1}
              files={instruction.images}
              onChange={(files) => handleInput("images", files)}
              onRemove={() => handleRemove("images")}
              accept={["image/jpeg", "image/png"]}
            />
            <FormUpload
              label="Instruction 3D Model"
              subLabel="Add instruction animation in .glb format."
              error={error.animations}
              limit={1}
              files={instruction.animations}
              accept=".glb"
              onChange={(files) => handleInput("animations", files)}
              onRemove={() => handleRemove("animations")}
            />
          </div>
        </Wrapper>
        <ActionWrapper>
          <NavigationButton onClick={handleClose}>Cancel</NavigationButton>
          <NavigationButton type="submit" selected>
            Save
          </NavigationButton>
        </ActionWrapper>
      </form>
    );
  }
);
