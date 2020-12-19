import React from "react";
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

export const ManualForm = observer(() => {
  const theme = useTheme() as ITheme;
  const { globalStore, manualManagerStore } = useStores();

  const handleInstructionMovement = (movement: "up" | "down", step: number) => {
    manualManagerStore.switchInstructionStep(
      step,
      movement === "up" ? step - 1 : step + 1
    );
  };

  return (
    <Wrapper>
      <div className="header">
        <Typography.Title>Create Manual</Typography.Title>
        <Typography.SubTitle>
          Complete the form below to create a new manual.
        </Typography.SubTitle>
      </div>

      <div className="general-form">
        <FormInput
          label="Component Series"
          inputProps={{
            placeholder: "Component identification series",
          }}
        />
        <FormInput
          label="Test Bench Series"
          inputProps={{
            placeholder: "Test bench identification series",
          }}
        />
        <FormUpload label="Component Thumbnail" limit={1} />
        <FormUpload
          label="Component 3D Model"
          subLabel="Add Collada Format model with animations."
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
                onMovement={handleInstructionMovement}
              />
            ))}
        </div>
      </div>
    </Wrapper>
  );
});
