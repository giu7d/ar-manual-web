import React from "react";

import { Wrapper } from "./styles";
import { Typography } from "../../fragments/Typography";
import { FormInput } from "../../fragments/Form/FormInput";
import { FormUpload } from "../../fragments/Form/FormUpload";

interface Props {}

export const ManualManager = (props: Props) => {
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
    </Wrapper>
  );
};
