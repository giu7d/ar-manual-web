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

export const Manuals = observer(() => {
  const { testBenches, isLoading, isError } = useTestBenches();
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
          onClick={() => history.push("/manuals/manager")}
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
            onOpenQRCode={() => {
              window.open(testBench.qrCodeSrc);
            }}
          />
        ))}
      </ManualsWrapper>
    </Wrapper>
  );
});
