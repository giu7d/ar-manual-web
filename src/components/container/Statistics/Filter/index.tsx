import React from "react";
import { observer } from "mobx-react";

import { useStores } from "../../../../hooks/useStores";
import { NavigationButton } from "../../../fragments/Buttons/NavigationButton";
import { ActionWrapper, Wrapper } from "./styles";
import Select from "react-select";
import { Label } from "../../../fragments/Input";
import { useTestBenches } from "../../../../hooks/useTestBenches";

export const Filter = observer(() => {
  const { globalStore } = useStores();
  const { testBenches, isLoading, isError } = useTestBenches();

  const handleClose = () => {
    globalStore.setBottomSheet(false);
  };

  const handleComponentSelection = (data: any) => {
    globalStore.setSelectedTestBenchId(data.value);
  };

  const _adaptTestBenchesToOptions = () =>
    testBenches.map((testBench) => ({
      value: testBench.id,
      label: testBench.componentSerialNumber.toUpperCase(),
    }));

  if (isLoading || isError) return null;

  return (
    <>
      <Wrapper>
        <div className="section">
          <h3>Filter By</h3>
          <Label>Component</Label>
          <Select
            styles={{
              valueContainer: () => ({
                padding: 8,
                fontSize: 14,
              }),
              input: () => ({
                width: 350,
              }),
              menuList: () => ({
                fontSize: 14,
              }),
            }}
            defaultValue={_adaptTestBenchesToOptions().find(
              ({ value }) => globalStore.selectedTestBenchId === value
            )}
            options={_adaptTestBenchesToOptions()}
            onChange={handleComponentSelection}
          />
        </div>
      </Wrapper>
      <ActionWrapper>
        <NavigationButton onClick={handleClose} selected>
          Ok
        </NavigationButton>
      </ActionWrapper>
    </>
  );
});
