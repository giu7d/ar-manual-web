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

export const Manuals = observer(() => {
  const { testBenches, isLoading, isError } = useTestBenches();
  const { deleteManual } = useManual();
  const history = useHistory();

  if (isLoading || isError) {
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
            onRemove={() => {
              const isApproved = window.confirm(
                `Are you sure, you want to delete the manual id: ${testBench.id}?`
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
