import { rgba } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div<IDefaultStyledProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 24px 0;
  border-radius: ${({ theme }) => theme.roundness}px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  & > .cover {
    width: 100%;
    height: 200px;

    overflow: hidden;
    img {
      width: 100%;
    }
  }

  @media only screen and (min-width: 560px) {
    min-width: 350px;
    max-width: 370px;
    margin: 24px;

    & > .cover {
      height: 250px;

      img {
        width: 100%;
        transform: translateY(0);
      }
    }
  }
`;

export const ContentWrapper = styled.div<IDefaultStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;

  & > .content {
    align-self: flex-start;
    background-color: ${({ theme }) => theme.colors.background};

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

    button {
      font-size: 24px;
      color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
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
