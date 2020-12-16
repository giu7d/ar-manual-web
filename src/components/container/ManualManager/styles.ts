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

  & > .general-form {
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 350px;
    align-self: center;
  }

  & > .instructions-form {
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 350px;
    align-self: center;

    .instructions {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }
  }
`;
