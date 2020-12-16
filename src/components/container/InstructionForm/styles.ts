import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 24px 48px;
  align-self: center;

  & > .header {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
