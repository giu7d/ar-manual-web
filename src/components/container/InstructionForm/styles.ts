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

  & > .form {
    grid-area: layout-general;
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 100%;
    align-self: center;
  }
`;

export const ActionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 24px;

  button {
    margin-left: 8px;
    min-width: 150px;
    align-items: center;
    justify-content: center;
  }
`;
