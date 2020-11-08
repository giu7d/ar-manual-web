import styled from "styled-components";

export const SideScroll = styled.div<IDefaultStyledProps>`
  display: flex;
  margin: 24px 0;
  flex-direction: row;
  max-width: 100%;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
