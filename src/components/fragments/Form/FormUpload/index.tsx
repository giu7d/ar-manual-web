import React from "react";
import { useDropzone } from "react-dropzone";
import { FiX } from "react-icons/fi";
import { v4 as uuid } from "uuid";

import { Typography } from "../../Typography";
import { Badge } from "../../Badge";
import { Label } from "../../Input";
import { Wrapper } from "./styles";

interface IFormUploadProps {
  label?: string;
  subLabel?: string;
  limit?: number;
  files?: { id: string; src: string }[];
  onChange?: (acceptedFiles: File[]) => void;
  onRemove?: (fileName: string) => void;
}

export const FormUpload: React.FC<IFormUploadProps> = ({
  label,
  subLabel,
  limit,
  files = [],
  onChange = () => {},
  onRemove = () => {},
}) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: onChange,
    maxFiles: limit,
  });

  const isLimit = !limit ? true : acceptedFiles.length < limit ? true : false;

  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      {subLabel && <Typography.SubTitle>{subLabel}</Typography.SubTitle>}

      <div className="badges">
        {files.map(({ id, src }) => (
          <Badge key={uuid()} icon={<FiX />} onClick={() => onRemove(id)}>
            {src}
          </Badge>
        ))}
      </div>

      {isLimit && (
        <div className="upload" {...getRootProps()}>
          <input {...getInputProps()} />
          <p>
            <b>Drag 'n' drop files here</b>, or click to select files.
            {limit && `${limit} files maximum.`}
          </p>
        </div>
      )}
    </Wrapper>
  );
};
