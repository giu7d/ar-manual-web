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

    font-size: 2rem;
    color: ${({ theme }) => rgba(theme.colors.text, 0.75)};

    border-radius: 2rem;
    border: 2px dashed ${({ theme }) => theme.colors.primary};
  }
`;
