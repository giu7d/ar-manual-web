import React, { useRef } from "react";
import { PanInfo, useDragControls } from "framer-motion";
import { FiChevronDown, FiChevronUp, FiEdit2, FiTrash2 } from "react-icons/fi";
import { useTheme } from "styled-components";

import { Badge } from "../Badge";
import { IconButton } from "../Buttons/IconButton";
import { ContentWrapper, Wrapper } from "./styles";

interface IInstructionCardProps {
  step: number;
  title: string;
  description: string;
  imageBadge?: number;
  animationBadge?: number;
  onEdit?: () => void;
  onRemove?: () => void;
  onMovement?: (movement: "up" | "down", step: number) => void;
}

export const InstructionCard: React.FC<IInstructionCardProps> = ({
  step,
  title,
  description,
  imageBadge,
  animationBadge,
  onEdit = () => {},
  onRemove = () => {},
  onMovement = () => {},
}) => {
  const wrapperRef = useRef(null);
  const dragControls = useDragControls();
  const theme = useTheme();

  const handleDrag = (event: any, pan: PanInfo) => {
    const THRESHOLD = 150;

    if (pan.offset.y < THRESHOLD) {
      onMovement("up", step);
    }

    if (pan.offset.y > THRESHOLD) {
      onMovement("down", step);
    }
  };

  return (
    <Wrapper
      ref={wrapperRef}
      drag="y"
      dragConstraints={wrapperRef}
      dragControls={dragControls}
      dragElastic={0.8}
      onDragEnd={handleDrag}
    >
      <ContentWrapper>
        <div className="content">
          <small>#{step}</small>
          <h3 className="title">{title}</h3>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div className="footer">
          <div className="badges">
            {imageBadge && <Badge icon={imageBadge}>Images</Badge>}
            {animationBadge && (
              <Badge icon={animationBadge} background={theme.colors.secondary}>
                Animation
              </Badge>
            )}
          </div>
          <IconButton onClick={onRemove}>
            <FiTrash2 />
          </IconButton>
          <IconButton onClick={onEdit}>
            <FiEdit2 />
          </IconButton>
        </div>
      </ContentWrapper>
      <div className="actions">
        <IconButton onClick={() => onMovement("up", step)}>
          <FiChevronUp />
        </IconButton>
        <IconButton onClick={() => onMovement("down", step)}>
          <FiChevronDown />
        </IconButton>
      </div>
    </Wrapper>
  );
};
