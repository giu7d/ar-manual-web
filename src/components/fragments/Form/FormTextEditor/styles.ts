import { rgba } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div<IDefaultStyledProps>`
  display: flex;
  flex-direction: column;
  margin: 8px 0;
  gap: 14px;
`;

export const TextInputWrapper = styled.div`
  margin: 4px 0;
  padding: 14px 24px;
  font-size: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => rgba(theme.colors.text, 0.25)};
  border-radius: 8px;
  transition: all 200ms ease-in-out;

  &:focus-within {
    border: 1px solid ${({ theme }) => rgba(theme.colors.primary, 0.75)};
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }

  display: flex;
  flex-direction: column;
  gap: 24px;

  .DraftEditor-editorContainer {
    overflow: auto;
    min-height: 60px;
    max-height: 300px;
  }

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
