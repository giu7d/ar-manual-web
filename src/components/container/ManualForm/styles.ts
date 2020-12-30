import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin: 24px;
  align-self: center;

  & > .header {
    grid-area: layout-header;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    div:first-child {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    div:last-child {
      display: flex;
      flex-direction: row;
      gap: 14px;
    }
  }

  & > .general-form {
    grid-area: layout-general;
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-self: center;
    width: 100%;
  }

  & > .instructions-form {
    margin-top: 8px;
    grid-area: layout-instructions;
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-self: center;

    .instructions {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      width: 100%;
    }
  }

  @media only screen and (min-width: 900px) {
    display: grid;
    grid-template-areas: "layout-header layout-header" "layout-general layout-instructions";
    margin: 24px auto;
    gap: 48px;
    justify-content: center;
    max-width: 1000px;

    & > .general-form {
      align-self: flex-start;
      min-width: 380px;
    }

    & > .instructions-form {
      align-self: flex-start;
      max-width: 400px;
    }
  }
`;
