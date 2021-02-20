import React from "react";
import { useDropzone } from "react-dropzone";
import { FiX } from "react-icons/fi";
import { v4 as uuid } from "uuid";

import { Typography } from "../../Typography";
import { Badge } from "../../Badge";
import { Label, Required } from "../../Input";
import { Wrapper } from "./styles";
import { FileSource } from "../../../../models/Instruction";

interface IFormUploadProps {
  label?: string;
  subLabel?: string;
  error?: string;
  required?: boolean;
  limit?: number;
  files?: FileSource[];
  onChange?: (acceptedFiles: File[]) => void;
  onRemove?: (id: string) => void;
}

export const FormUpload: React.FC<IFormUploadProps> = ({
  label,
  subLabel,
  required,
  error,
  limit,
  files = [],
  onChange = () => {},
  onRemove = () => {},
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onChange,
    maxFiles: limit,
  });

  const isLimit = !limit ? true : files.length < limit ? true : false;

  return (
    <Wrapper>
      {label && (
        <Label>
          {label}
          {required && <Required>*</Required>}
        </Label>
      )}
      {subLabel && <Typography.SubTitle>{subLabel}</Typography.SubTitle>}
      {error && <Typography.Warning>{error}</Typography.Warning>}

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
