import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { AiOutlineQrcode } from "react-icons/ai";
import { IconButton } from "../Buttons/IconButton";
import { Wrapper, ContentWrapper } from "./styles";

interface IManualProps {
  componentSeries: string;
}

export const Manual: React.FC<IManualProps> = ({ componentSeries }) => {
  return (
    <Wrapper>
      <div className="cover">
        <img src="https://via.placeholder.com/150" alt="manual" />
      </div>
      <ContentWrapper>
        <div className="content">
          <small>Component</small>
          <h3>{componentSeries}</h3>
        </div>
        <div className="actions">
          <IconButton>
            <AiOutlineQrcode size={24} />
          </IconButton>
          <IconButton>
            <FiExternalLink size={24} />
          </IconButton>
        </div>
      </ContentWrapper>
    </Wrapper>
  );
};
