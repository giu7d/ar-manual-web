import React from "react";
import { AppBar } from "../../container/AppBar";
import { SideBar } from "../../container/SideBar";
import { Wrapper, ScrollWrapper, InnerWrapper } from "./styles";

export const CommonLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <SideBar />
      <InnerWrapper>
        <AppBar />
        <ScrollWrapper>{children}</ScrollWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};
