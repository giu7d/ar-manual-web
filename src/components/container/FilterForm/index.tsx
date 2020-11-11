import React from "react";

import { NavigationButton } from "../../fragments/Buttons/NavigationButton";
import { Input, Label } from "../../fragments/Input";
import { ActionWrapper, FormInput, FormWrapper } from "./styles";

export const FilterForm = () => {
  return (
    <>
      <FormWrapper>
        <div className="section">
          <h3>Time period</h3>
          <FormInput>
            <Label>From</Label>
            <Input placeholder="Jan 01, 2020" />
          </FormInput>
          <FormInput>
            <Label>To</Label>
            <Input placeholder="Nov 11, 2020" />
          </FormInput>
        </div>
        <div className="section">
          <h3>Filter by</h3>
          <FormInput>
            <Label>Type</Label>
            <Input placeholder="Component, User..." />
          </FormInput>
        </div>
      </FormWrapper>
      <ActionWrapper>
        <NavigationButton>Cancel</NavigationButton>
        <NavigationButton selected>Save</NavigationButton>
      </ActionWrapper>
    </>
  );
};
