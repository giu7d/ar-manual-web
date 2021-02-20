import React from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { useTheme } from "styled-components";

import { Wrapper } from "./styles";

interface IProps {
  hideIcon?: boolean;
  title?: string;
  description: string;
}

export const Warning: React.FC<IProps> = ({ title, description, hideIcon }) => {
  const theme = useTheme();

  return (
    <Wrapper>
      {!hideIcon && <FiAlertTriangle color={theme.colors.danger} size={18} />}
      <div className="content">
        {title && <h4>{title}</h4>}
        <p>{description}</p>
      </div>
    </Wrapper>
  );
};
