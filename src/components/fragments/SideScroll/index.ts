import styled from "styled-components";

export const SideScroll = styled.div`
  display: flex;
  flex-direction: row;
  margin: 24px 0;
  max-width: 100%;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
