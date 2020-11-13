import styled from "styled-components";

export const Wrapper = styled.section<IDefaultStyledProps>`
  display: flex;
  width: 100%;
  max-width: 1000px;
  flex-direction: column;

  @media only screen and (min-width: 1500px) {
    max-width: 1200px;
  }
`;

export const ActionsWrapper = styled.div<IDefaultStyledProps>`
  display: flex;
  flex-direction: row;
  margin: 24px;

  & > button {
    padding: 0 24px 0 14px;
    width: fit-content;
  }
`;

export const ManualsWrapper = styled.div<IDefaultStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 24px;

  @media only screen and (min-width: 760px) {
    flex-direction: row;
    flex-wrap: wrap;

    & > div {
      margin: 14px;
    }
  }
`;
