import { rgba } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div<IDefaultStyledProps>`
  display: flex;
  flex-direction: column;
  margin: 8px 0;
  gap: 14px;
`;

export const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: ${({ theme }) => theme.colors.foreground};
  border-radius: 8px;
  padding: 14px;
  font-size: 2rem;

  .RichEditor-editor {
    margin: 24px;
    font-size: 1.75rem;
    cursor: text;
  }

  .RichEditor-controls {
    font-family: "Helvetica", sans-serif;
    font-size: 14px;
    margin-bottom: 5px;
    user-select: none;
  }

  .RichEditor-styleButton {
    color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
    cursor: pointer;
    margin-right: 14px;
    padding: 4px;
    display: inline-block;
  }

  .RichEditor-activeButton {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
