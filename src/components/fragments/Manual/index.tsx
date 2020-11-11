import React from "react";
import { FiExternalLink } from "react-icons/fi";
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
        <IconButton>
          <FiExternalLink size={24} />
        </IconButton>
      </ContentWrapper>
    </Wrapper>
  );
};
