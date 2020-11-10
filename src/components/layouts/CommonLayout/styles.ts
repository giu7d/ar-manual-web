import styled from "styled-components";

export const InnerWrapper = styled.main<IDefaultStyledProps>`
  display: flex;
  flex-direction: column;
  flex: 1 1;
`;

export const ScrollWrapper = styled.div<IDefaultStyledProps>`
  overflow: auto;
`;

export const Wrapper = styled.div<IDefaultStyledProps>`
  display: flex;
  flex-direction: row;
  height: 100%;
  overflow: hidden;
`;
