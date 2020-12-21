import { rgba } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div<IDefaultStyledProps>`
  display: flex;
  flex-direction: column;
  margin: 8px 0;

  & > label {
    margin-bottom: 8px;
  }

  & > .badges {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 500px;
    margin: 8px 0;
    gap: 8px;
  }

  & > .upload {
    padding: 48px 24px;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => rgba(theme.colors.text, 0.75)};
    border: 1px dashed ${({ theme }) => rgba(theme.colors.text, 0.25)};
    font-size: 2rem;
    border-radius: 8px;
    transition: all 200ms ease-in-out;

    &:focus-within,
    &:hover {
      border: 1px dashed ${({ theme }) => rgba(theme.colors.primary, 0.75)};
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }
  }
`;
