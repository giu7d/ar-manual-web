import React, { useCallback } from "react";
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
}

export const FormUpload: React.FC<IFormUploadProps> = ({
  label,
  subLabel,
  limit,
}) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({ onDrop, maxFiles: limit });

  const isLimit = !limit ? true : acceptedFiles.length < limit ? true : false;

  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      {subLabel && <Typography.SubTitle>{subLabel}</Typography.SubTitle>}

      <div className="badges">
        {acceptedFiles.map(({ name }) => (
          <Badge
            key={uuid()}
            icon={<FiX />}
            onClick={() => console.log("Remove")}
          >
            {name}
          </Badge>
        ))}
      </div>

      {isLimit && (
        <div className="upload" {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the file here!</p>
          ) : (
            <p>
              <b>Drag 'n' drop files here</b>, or click to select files.
              {limit && `${limit} files maximum.`}
            </p>
          )}
        </div>
      )}
    </Wrapper>
  );
};
