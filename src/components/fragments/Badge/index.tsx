import React from "react";
import { Wrapper } from "./styles";

interface IBadgeProps {
  icon?: JSX.Element | string | number;
  background?: string;
  onClick?: () => void;
}

export const Badge: React.FC<IBadgeProps> = ({
  icon,
  children,
  background,
  onClick = () => {},
}) => {
  return (
    <Wrapper background={background}>
      {icon && (
        <div className="icon" onClick={onClick}>
          {icon}
        </div>
      )}
      {children}
    </Wrapper>
  );
};
