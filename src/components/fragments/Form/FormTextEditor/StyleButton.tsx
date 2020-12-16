import React, { MouseEvent } from "react";

interface Props {
  active?: boolean;
  label: string;
  style: any;
  onToggle: (value: string) => void;
}

export const StyleButton = (props: Props) => {
  const handleToggle = (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    props.onToggle(props.style);
  };

  const handleClassName = () =>
    props.active
      ? "RichEditor-styleButton RichEditor-activeButton"
      : "RichEditor-styleButton";

  return (
    <span className={handleClassName()} onMouseDown={handleToggle}>
      {props.label}
    </span>
  );
};
