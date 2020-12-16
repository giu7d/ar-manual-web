import React from "react";
import { observer } from "mobx-react";
import { Wrapper } from "./styles";
import { Typography } from "../../fragments/Typography";
import { FormInput } from "../../fragments/Form/FormInput";
import { FormTextEditor } from "../../fragments/Form/FormTextEditor";

export const InstructionForm = observer(() => {
  return (
    <Wrapper>
      <div className="header">
        <Typography.Title>Create Instruction</Typography.Title>
        <Typography.SubTitle>
          Complete the form below to create a new instruction.
        </Typography.SubTitle>
      </div>
      <div className="general-form">
        <FormInput
          label="Title"
          inputProps={{
            placeholder: "Instruction title",
          }}
        />
        <FormTextEditor label="Description" />
      </div>
    </Wrapper>
  );
});
