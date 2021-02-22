import React from "react";
import { FiPlus } from "react-icons/fi";
import { observer } from "mobx-react";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router-dom";

import { CardShimmer } from "../../fragments/Shimmer/CardShimmer";
import { Manual } from "../../fragments/Manual";
import { NavigationButton } from "../../fragments/Buttons/NavigationButton";
import { useTestBenches } from "../../../hooks/useTestBenches";
import { ActionsWrapper, ManualsWrapper, Wrapper } from "./styles";
import { useManual } from "../../../hooks/useManual";
import { Warning } from "../../fragments/Warning";

export const Manuals = observer(() => {
  const { testBenches, isLoading, isError } = useTestBenches();
  const { deleteManual, duplicateManual } = useManual();
  const history = useHistory();

  if (isError) {
    return (
      <Warning title="Error on load manuals!" description={isError.message} />
    );
  }

  if (isLoading) {
    return (
      <Wrapper>
        <ManualsWrapper>
          <CardShimmer />
          <CardShimmer />
          <CardShimmer />
          <CardShimmer />
        </ManualsWrapper>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <ActionsWrapper>
        <NavigationButton
          onClick={() => history.push("/manuals/create")}
          selected
        >
          <FiPlus size={18} />
          <span>Create Manual</span>
        </NavigationButton>
      </ActionsWrapper>
      <ManualsWrapper>
        {testBenches.map((testBench) => (
          <Manual
            key={uuid()}
            thumbnailSrc={testBench.thumbnailSrc}
            componentSeries={testBench.componentSerialNumber}
            onOpenQRCode={() => window.open(testBench.qrCodeSrc)}
            onOpenManual={() => history.push(`/manuals/edit/${testBench.id}`)}
            onDuplicate={() => duplicateManual(testBench.id)}
            onRemove={() => {
              const isApproved = window.confirm(
                `Are you sure, you want to delete the manual for component ${testBench.componentSerialNumber}?`
              );

              if (isApproved) {
                deleteManual(testBench.id);
              }
            }}
          />
        ))}
      </ManualsWrapper>
    </Wrapper>
  );
});
