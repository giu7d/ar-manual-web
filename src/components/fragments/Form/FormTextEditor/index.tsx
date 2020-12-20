import "draft-js/dist/Draft.css";

import React, { KeyboardEvent, useState } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
  convertFromHTML,
  ContentState,
} from "draft-js";
import { convertToHTML } from "draft-convert";

import { Label } from "../../Input";
import { Wrapper, TextInputWrapper } from "./styles";
import { BlockStyleControls } from "./BlockStyleControls";
import { InlineStyleControls } from "./InlineStyleControls";
import { Typography } from "../../Typography";

interface IFormTextEditorProps {
  label?: string;
  error?: string;
  inputProps?: {
    placeholder: string;
    defaultValue: string;
    onChange: (value: string) => void;
  };
}

export const FormTextEditor: React.FC<IFormTextEditorProps> = ({
  label,
  error,
  inputProps = { onChange: () => {}, defaultValue: "", placeholder: "" },
}) => {
  const [editorState, setEditorState] = useState(() => {
    const html = convertFromHTML(inputProps.defaultValue);
    const content = ContentState.createFromBlockArray(html.contentBlocks);
    return EditorState.createWithContent(content);
  });

  const handleKeyCommand = (command: string, editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return "handled";
    }

    return "not-handled";
  };

  const mapKeyToEditorCommand = (e: KeyboardEvent<HTMLElement>) => {
    if (e.keyCode === 9) {
      const newEditorState = RichUtils.onTab(e, editorState, 4);
      if (newEditorState !== editorState) {
        setEditorState(newEditorState);
      }
      return null;
    }

    return getDefaultKeyBinding(e);
  };

  const toggleBlockType = (blockType: string) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleInlineStyle = (inlineStyle: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  const handleChange = (e: EditorState) => {
    setEditorState(e);

    const content = editorState.getCurrentContent();
    const html = convertToHTML({})(content);
    inputProps.onChange(html);
  };

  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      {error && <Typography.Warning>{error}</Typography.Warning>}
      <TextInputWrapper>
        <div>
          <BlockStyleControls
            editorState={editorState}
            onToggle={toggleBlockType}
          />
          <InlineStyleControls
            editorState={editorState}
            onToggle={toggleInlineStyle}
          />
        </div>
        <Editor
          editorState={editorState}
          onChange={handleChange}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={mapKeyToEditorCommand}
          placeholder={inputProps.placeholder}
        />
      </TextInputWrapper>
    </Wrapper>
  );
};
