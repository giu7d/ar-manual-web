import React, { useCallback, useState, useLayoutEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { observer } from "mobx-react";
import { useTheme } from "styled-components";
import { v4 as uuid } from "uuid";
import { toJS } from "mobx";

import { Wrapper } from "./styles";
import { Label } from "../../fragments/Input";
import { Manual } from "../../../models/Manual";
import { useStores } from "../../../hooks/useStores";
import { Typography } from "../../fragments/Typography";
import { FormInput } from "../../fragments/Form/FormInput";
import { FormUpload } from "../../fragments/Form/FormUpload";
import { IconButton } from "../../fragments/Buttons/IconButton";
import { InstructionCard } from "../../fragments/InstructionCard";
import { NavigationButton } from "../../fragments/Buttons/NavigationButton";
import { ValidationError } from "yup";
import { ManualSchema } from "./validation";
import { useManual } from "../../../hooks/useManual";

const createNewManual = () =>
  new Manual({
    componentSerialNumber: "",
    testBenchSerialNumber: "",
    instructions: [],
  });

export const ManualForm = observer(() => {
  const theme = useTheme() as ITheme;
  const { globalStore, manualManagerStore } = useStores();
  const { createManual } = useManual();
  const [manual, setManual] = useState(createNewManual());
  const [error, setError] = useState({
    componentSerialNumber: undefined,
    testBenchSerialNumber: undefined,
    instructions: undefined,
    thumbnail: undefined,
    model: undefined,
  });

  useLayoutEffect(() => {
    return () => {
      manualManagerStore.clearInstruction();
    };
  }, [manualManagerStore]);

  const handleMovement = (movement: "up" | "down", step: number) => {
    manualManagerStore.switchInstructionStep(
      step,
      movement === "up" ? step - 1 : step + 1
    );
  };

  const handleUpload = useCallback((key: string, files: File[]) => {
    setManual((state) => ({
      ...state,
      [key]: {
        id: uuid(),
        src: files[0].name,
        file: files[0],
      },
    }));
  }, []);

  const handleClearUpload = useCallback((key: string) => {
    setManual((state) => ({
      ...state,
      [key]: undefined,
    }));
  }, []);

  const handleInput = useCallback((key: string, value: string) => {
    setManual((state) => ({
      ...state,
      [key]: value,
    }));
  }, []);

  const handleSubmit = async () => {
    setError({
      componentSerialNumber: undefined,
      testBenchSerialNumber: undefined,
      instructions: undefined,
      thumbnail: undefined,
      model: undefined,
    });

    try {
      const data = {
        ...manual,
        instructions: toJS(manualManagerStore.instructions),
      };

      await ManualSchema.validate(data, {
        abortEarly: false,
      });

      await createManual(data);

      console.log("success");
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
    <Wrapper>
      <div className="header">
        <div>
          <Typography.Title>Create Manual</Typography.Title>
          <Typography.SubTitle>
            Complete the form below to create a new manual.
          </Typography.SubTitle>
        </div>
        <NavigationButton onClick={handleSubmit} selected>
          Save
        </NavigationButton>
      </div>

      <div className="general-form">
        <FormInput
          label="Component Series"
          error={error.componentSerialNumber}
          inputProps={{
            placeholder: "Component identification series",
            value: manual.componentSerialNumber,
            onChange: (e) =>
              handleInput("componentSerialNumber", e.target.value),
          }}
        />
        <FormInput
          label="Test Bench Series"
          error={error.testBenchSerialNumber}
          inputProps={{
            placeholder: "Test bench identification series",
            value: manual.testBenchSerialNumber,
            onChange: (e) =>
              handleInput("testBenchSerialNumber", e.target.value),
          }}
        />
        <FormUpload
          label="Component Thumbnail"
          error={error.thumbnail}
          limit={1}
          files={manual.thumbnail ? [manual.thumbnail] : undefined}
          onChange={(files) => handleUpload("thumbnail", files)}
          onRemove={() => handleClearUpload("thumbnail")}
        />
        <FormUpload
          label="Component 3D Model"
          subLabel="Add Collada Format model with animations."
          error={error.model}
          limit={1}
          files={manual.model ? [manual.model] : undefined}
          onChange={(files) => handleUpload("model", files)}
          onRemove={() => handleClearUpload("model")}
        />
      </div>

      <div className="instructions-form">
        <Label>Instructions</Label>
        <Typography.SubTitle>
          Create and order the instructions in the correct order.
        </Typography.SubTitle>
        {error.instructions && (
          <Typography.Warning>{error.instructions}</Typography.Warning>
        )}
        <div className="instructions">
          <IconButton
            onClick={() => globalStore.setBottomSheet(true)}
            style={{ color: theme.colors.primary }}
          >
            <FiPlus size={24} />
          </IconButton>

          {manualManagerStore.instructions
            .slice()
            .sort((a, b) => a.step - b.step)
            .map((instruction) => (
              <InstructionCard
                key={uuid()}
                step={instruction.step}
                title={instruction.title}
                description={instruction.description}
                imageBadge={instruction.images.length}
                animationBadge={instruction.animation !== ""}
                onMovement={handleMovement}
              />
            ))}
        </div>
      </div>
    </Wrapper>
  );
});
