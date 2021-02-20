import React, { ComponentPropsWithoutRef } from "react";
import { Input, Label, Required } from "../../Input";
import { Typography } from "../../Typography";
import { Wrapper } from "./styles";

interface IFormInputProps {
  label?: string;
  error?: string;
  required?: boolean;
  inputProps?: ComponentPropsWithoutRef<"input">;
}

export const FormInput: React.FC<IFormInputProps> = ({
  inputProps,
  error,
  label,
  required,
}) => {
  return (
    <Wrapper>
      {label && (
        <Label>
          {label}
          {required && <Required>*</Required>}
        </Label>
      )}
      {error && <Typography.Warning>{error}</Typography.Warning>}
      <Input {...inputProps} />
    </Wrapper>
  );
};
