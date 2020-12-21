import React, { ComponentPropsWithoutRef } from "react";
import { Input, Label } from "../../Input";
import { Typography } from "../../Typography";
import { Wrapper } from "./styles";

interface IFormInputProps {
  label?: string;
  error?: string;
  inputProps?: ComponentPropsWithoutRef<"input">;
}

export const FormInput: React.FC<IFormInputProps> = ({
  inputProps,
  error,
  label,
}) => {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      {error && <Typography.Warning>{error}</Typography.Warning>}
      <Input {...inputProps} />
    </Wrapper>
  );
};
