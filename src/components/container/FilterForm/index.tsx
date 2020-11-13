import React from "react";
import { useStores } from "../../../hooks/useStores";

import { NavigationButton } from "../../fragments/Buttons/NavigationButton";
import { FormInput } from "../../fragments/Form/FormInput";
import { ActionWrapper, FormWrapper } from "./styles";

export const FilterForm = () => {
  const { globalStore } = useStores();

  const handleClose = () => {
    globalStore.setBottomSheet(false);
  };

  const handleSubmit = () => {
    globalStore.setBottomSheet(false);
  };
  return (
    <>
      <FormWrapper>
        <div className="section">
          <h3>Time period</h3>
          <FormInput
            label="From"
            inputProps={{ placeholder: "Jan 01, 2020" }}
          />
          <FormInput label="To" inputProps={{ placeholder: "Nov 11, 2020" }} />
        </div>
        <div className="section">
          <h3>Filter by</h3>

          <FormInput
            label="Type"
            inputProps={{ placeholder: "Component, User,..." }}
          />
        </div>
      </FormWrapper>
      <ActionWrapper>
        <NavigationButton onClick={handleClose}>Cancel</NavigationButton>
        <NavigationButton onClick={handleSubmit} selected>
          Save
        </NavigationButton>
      </ActionWrapper>
    </>
  );
};
