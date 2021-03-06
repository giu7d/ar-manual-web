import { rgba } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.roundness}px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  & > .cover {
    width: 100%;
    height: 200px;
    cursor: pointer;

    overflow: hidden;
    img {
      width: 100%;
    }
  }

  @media only screen and (min-width: 560px) {
    max-width: 300px;

    & > .cover {
      height: 250px;

      img {
        width: 100%;
      }
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;

  & > .content {
    cursor: pointer;
    align-self: flex-start;
    background-color: ${({ theme }) => theme.colors.background};
    overflow: hidden;

    h3 {
      margin-top: 8px;
      font-weight: 600;
      font-size: 2.5rem;
      color: ${({ theme }) => theme.colors.text};
    }

    small {
      font-weight: 600;
      font-size: 2rem;
      color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
    }
  }

  & > .actions {
    align-self: center;
    margin-top: 14px;
    min-width: 100px;

    .item {
      padding: 14px 24px;
    }

    button,
    .item {
      font-size: 24px;
      color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
    }

    .item > span {
      margin-left: 14px;
      font-size: 16px;
      color: ${({ theme }) => rgba(theme.colors.text, 0.75)};
    }

    .danger,
    .danger > span {
      color: ${({ theme }) => rgba(theme.colors.danger, 0.75)} !important;
    }
  }

  @media only screen and (min-width: 400px) {
    flex-direction: row;
    justify-content: space-between;

    & > .actions {
      margin-top: 0;
    }
  }
`;
