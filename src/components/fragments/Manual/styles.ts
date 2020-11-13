import { rgba } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div<IDefaultStyledProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 24px 24px;
  border-radius: ${({ theme }) => theme.roundness}px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  & > .cover {
    width: 100%;
    height: 250px;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  @media only screen and (min-width: 760px) {
    min-width: 350px;
    max-width: 370px;
  }
`;

export const ContentWrapper = styled.div<IDefaultStyledProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;

  & > .content {
    display: block;
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

  & > .actions > button {
    font-size: 24px;
    color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
  }
`;
