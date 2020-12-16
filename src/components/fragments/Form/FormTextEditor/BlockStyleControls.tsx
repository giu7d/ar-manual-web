import { EditorState } from "draft-js";
import React from "react";
import { StyleButton } from "./StyleButton";

interface Props {
  editorState: EditorState;
  onToggle: (value: string) => void;
}

export const BlockStyleControls: React.FC<Props> = (props) => {
  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) => (
        <StyleButton
          key={type.label}
          active={
            type.style ===
            props.editorState
              .getCurrentContent()
              .getBlockForKey(props.editorState.getSelection().getStartKey())
              .getType()
          }
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

const BLOCK_TYPES = [
  { label: "H1", style: "header-one" },
  { label: "H2", style: "header-two" },
  { label: "H3", style: "header-three" },
  { label: "H4", style: "header-four" },
  { label: "H5", style: "header-five" },
  { label: "H6", style: "header-six" },
  { label: "UL", style: "unordered-list-item" },
  { label: "OL", style: "ordered-list-item" },
];
