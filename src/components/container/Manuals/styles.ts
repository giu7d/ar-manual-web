import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  max-width: 1000px;

  @media only screen and (min-width: 1500px) {
    max-width: 1200px;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 24px;

  & > button {
    padding: 0 24px 0 14px;
    width: fit-content;
  }
`;

export const ManualsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 760px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
