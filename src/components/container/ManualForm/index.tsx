import React from "react";

import { Wrapper } from "./styles";
import { Typography } from "../../fragments/Typography";
import { FormInput } from "../../fragments/Form/FormInput";
import { FormUpload } from "../../fragments/Form/FormUpload";
import { Label } from "../../fragments/Input";
import { InstructionCard } from "../../fragments/InstructionCard";
import { IconButton } from "../../fragments/Buttons/IconButton";
import { FiPlus } from "react-icons/fi";
import { useTheme } from "styled-components";
import { useStores } from "../../../hooks/useStores";

export const ManualForm = () => {
  const theme = useTheme() as ITheme;
  const { globalStore } = useStores();

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

          {Array(5)
            .fill("")
            .map((e, i) => (
              <InstructionCard
                key={i}
                step={1}
                title="Lorem ipsum ipsum ipsum"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa saepe pariatur autem reprehenderit! Ab optio ipsum reprehenderit id quasi porro ea, sit, modi at laudantium asperiores aperiam, maxime tenetur molestias."
                badges={[
                  { qtd: 2, title: "Images" },
                  { title: "Animations", color: theme.colors.secondary },
                ]}
              />
            ))}
        </div>
      </div>
    </Wrapper>
  );
};
