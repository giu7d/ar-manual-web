import { EditorState } from "draft-js";
import React from "react";
import { StyleButton } from "./StyleButton";

interface Props {
  editorState: EditorState;
  onToggle: (value: string) => void;
}

export const InlineStyleControls: React.FC<Props> = (props) => {
  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map((type) => (
        <StyleButton
          key={type.label}
          active={props.editorState.getCurrentInlineStyle().has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

const INLINE_STYLES = [
  { label: "Bold", style: "BOLD" },
  { label: "Italic", style: "ITALIC" },
  { label: "Underline", style: "UNDERLINE" },
  { label: "Monospace", style: "CODE" },
];
