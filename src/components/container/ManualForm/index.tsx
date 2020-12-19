import React, {
  useCallback,
  useEffect,
  useState,
  useLayoutEffect,
} from "react";
import { FiPlus } from "react-icons/fi";
import { observer } from "mobx-react";
import { useTheme } from "styled-components";
import { v4 as uuid } from "uuid";

import { Wrapper } from "./styles";
import { Label } from "../../fragments/Input";
import { useStores } from "../../../hooks/useStores";
import { Typography } from "../../fragments/Typography";
import { FormInput } from "../../fragments/Form/FormInput";
import { FormUpload } from "../../fragments/Form/FormUpload";
import { InstructionCard } from "../../fragments/InstructionCard";
import { IconButton } from "../../fragments/Buttons/IconButton";
import { Manual } from "../../../models/Manual";
import { toJS } from "mobx";
import { FileSource } from "../../../models/Instruction";
import { NavigationButton } from "../../fragments/Buttons/NavigationButton";

const createNewManual = () =>
  new Manual({
    componentSerialNumber: "",
    testBenchSerialNumber: "",
    instructions: [],
  });

export const ManualForm = observer(() => {
  const theme = useTheme() as ITheme;
  const { globalStore, manualManagerStore } = useStores();
  const [manual, setManual] = useState(createNewManual());

  useLayoutEffect(() => {
    return () => {
      manualManagerStore.clearInstruction();
    };
  }, [manualManagerStore]);

  useEffect(() => {
    setManual((state) => ({
      ...state,
      instructions: toJS(manualManagerStore.instructions),
    }));
  }, [manualManagerStore.instructions]);

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

  const handleSubmit = () => {
    console.log("submit upload or edit it!");
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
          inputProps={{
            placeholder: "Component identification series",
            value: manual.componentSerialNumber,
            onChange: (e) =>
              handleInput("componentSerialNumber", e.target.value),
          }}
        />
        <FormInput
          label="Test Bench Series"
          inputProps={{
            placeholder: "Test bench identification series",
            value: manual.testBenchSerialNumber,
            onChange: (e) =>
              handleInput("testBenchSerialNumber", e.target.value),
          }}
        />
        <FormUpload
          label="Component Thumbnail"
          limit={1}
          files={manual.thumbnail ? [manual.thumbnail] : undefined}
          onChange={(files) => handleUpload("thumbnail", files)}
          onRemove={() => handleClearUpload("thumbnail")}
        />
        <FormUpload
          label="Component 3D Model"
          subLabel="Add Collada Format model with animations."
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
