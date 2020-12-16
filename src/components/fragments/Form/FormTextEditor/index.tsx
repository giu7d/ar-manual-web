import "draft-js/dist/Draft.css";
import React, { KeyboardEvent, useState } from "react";
import { Editor, EditorState, RichUtils, getDefaultKeyBinding } from "draft-js";
import { BlockStyleControls } from "./BlockStyleControls";
import { InlineStyleControls } from "./InlineStyleControls";
import { Wrapper, TextInputWrapper } from "./styles";
import { Label } from "../../Input";

interface IFormTextEditorProps {
  label?: string;
}

export const FormTextEditor: React.FC<IFormTextEditorProps> = ({ label }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

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

  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
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
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={mapKeyToEditorCommand}
          placeholder="Enter some text..."
        />
      </TextInputWrapper>
    </Wrapper>
  );
};
