import React from "react";

// import { CardShimmer } from "../../fragments/Shimmer/CardShimmer";
// import { useStatistics } from "../../../hooks/useStatistics";
import { ManualsWrapper, Wrapper } from "./styles";
import { observer } from "mobx-react";
import { Manual } from "../../fragments/Manual";

export const Manuals = observer(() => {
  // const { isLoading, isError } = useStatistics(
  //   "72c515f7-3fea-426e-88a9-870aa659a1d2"
  // );

  // if (isLoading || isError) {
  //   return (
  //     <Wrapper>
  //       <ManualsWrapper>
  //         <CardShimmer />
  //         <CardShimmer />
  //         <CardShimmer />
  //         <CardShimmer />
  //       </ManualsWrapper>
  //     </Wrapper>
  //   );
  // }

  return (
    <Wrapper>
      <ManualsWrapper>
        <Manual componentSeries="1697135X" />
        <Manual componentSeries="1697135X" />
        <Manual componentSeries="1697135X" />
        <Manual componentSeries="1697135X" />
      </ManualsWrapper>
    </Wrapper>
  );
});
