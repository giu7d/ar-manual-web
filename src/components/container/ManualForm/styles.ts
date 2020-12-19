import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 24px 48px;
  align-self: center;

  & > .header {
    grid-area: layout-header;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  & > .general-form {
    grid-area: layout-general;
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-self: center;
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
    }
  }

  @media only screen and (min-width: 900px) {
    display: grid;
    grid-template-areas: "layout-header layout-header" "layout-general layout-instructions";
    margin: 24px 48px;
    gap: 48px;
    justify-content: center;

    & > .general-form,
    & > .instructions-form {
      align-self: flex-start;
      max-width: 450px;
    }
  }
`;
