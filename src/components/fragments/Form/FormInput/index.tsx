import React, { ComponentPropsWithoutRef } from "react";
import { Input, Label } from "../../Input";
import { Wrapper } from "./styles";

interface IFormInputProps {
  label?: string;
  inputProps?: ComponentPropsWithoutRef<"input">;
}

export const FormInput: React.FC<IFormInputProps> = ({
  inputProps,
  label = undefined,
}) => {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <Input {...inputProps} />
    </Wrapper>
  );
};
