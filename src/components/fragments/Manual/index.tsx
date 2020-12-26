import React from "react";
import { FiExternalLink, FiTrash2 } from "react-icons/fi";
import { AiOutlineQrcode } from "react-icons/ai";
import { IconButton } from "../Buttons/IconButton";
import { Wrapper, ContentWrapper } from "./styles";

interface IManualProps {
  componentSeries: string;
  thumbnailSrc: string;
  onOpenQRCode?: () => void;
  onOpenManual?: () => void;
  onRemove?: () => void;
}

export const Manual: React.FC<IManualProps> = ({
  componentSeries,
  thumbnailSrc,
  onOpenQRCode = () => {},
  onOpenManual = () => {},
  onRemove = () => {},
}) => {
  return (
    <Wrapper>
      <div className="cover">
        <img
          src={thumbnailSrc}
          alt={`manual for component ${componentSeries} `}
        />
      </div>
      <ContentWrapper>
        <div className="content">
          <small>Component</small>
          <h3>{componentSeries}</h3>
        </div>
        <div className="actions">
          <IconButton onClick={onOpenQRCode}>
            <AiOutlineQrcode size={24} />
          </IconButton>
          <IconButton onClick={onRemove}>
            <FiTrash2 size={24} />
          </IconButton>
          <IconButton onClick={onOpenManual}>
            <FiExternalLink size={24} />
          </IconButton>
        </div>
      </ContentWrapper>
    </Wrapper>
  );
};
