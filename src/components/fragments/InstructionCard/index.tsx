import React from "react";
import { FiChevronDown, FiChevronUp, FiEdit2 } from "react-icons/fi";
import { Badge } from "../Badge";
import { IconButton } from "../Buttons/IconButton";
import { ContentWrapper, Wrapper } from "./styles";

interface IInstructionCardProps {
  step: number;
  title: string;
  description: string;
  badges?: {
    qtd?: number;
    color?: string;
    title: string;
  }[];
  onEdit?: () => void;
  onUp?: () => void;
  onDown?: () => void;
}

export const InstructionCard: React.FC<IInstructionCardProps> = ({
  step,
  title,
  description,
  badges = [],
  onEdit = () => {},
  onUp = () => {},
  onDown = () => {},
}) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <div className="content">
          <small>#{step}</small>
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
        </div>
        <div className="footer">
          <div className="badges">
            {badges.map((badge) => (
              <Badge icon={badge.qtd} background={badge.color}>
                {badge.title}
              </Badge>
            ))}
          </div>
          <IconButton onClick={onEdit}>
            <FiEdit2 />
          </IconButton>
        </div>
      </ContentWrapper>
      <div className="actions">
        <IconButton onClick={onUp}>
          <FiChevronUp />
        </IconButton>
        <IconButton onClick={onDown}>
          <FiChevronDown />
        </IconButton>
      </div>
    </Wrapper>
  );
};
