import React from "react";
import { observer } from "mobx-react";
import { Wrapper, ActionWrapper } from "./styles";
import { Typography } from "../../fragments/Typography";
import { FormInput } from "../../fragments/Form/FormInput";
import { FormTextEditor } from "../../fragments/Form/FormTextEditor";
import { FormUpload } from "../../fragments/Form/FormUpload";
import { NavigationButton } from "../../fragments/Buttons/NavigationButton";
import { useStores } from "../../../hooks/useStores";

export const InstructionForm = observer(() => {
  const { globalStore } = useStores();

  const handleClose = () => {
    globalStore.setBottomSheet(false);
  };

  const handleSubmit = () => {
    globalStore.setBottomSheet(false);
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
            }}
          />
          <FormTextEditor label="Description" />
        </div>
        <div className="form">
          <FormUpload label="Instruction Image" limit={3} />
          <FormInput
            label="Animation ID"
            inputProps={{
              placeholder:
                "Animation timeline identification. (Ex: Default,...)",
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
